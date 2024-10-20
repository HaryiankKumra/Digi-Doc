// This file contains the material for authorization of the patient using two criterions using the patient's email and patient id
// It is an middleware


const Patient = require('../Models/Patient');
const connectDB = require('../Database/conn')

const pAuth = async (req, res, next) => {
    console.log('Authentication middleware called');
    console.log('Request body:', req.body);

    const { Email, pid } = req.body;
    console.log('Extracted Email:', Email);
    console.log('Extracted pid:', pid);

    let conn;
    try {
        conn = await connectDB();
        console.log('Database connection established');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

    try {
        const patient = await Patient.findOne({ email: Email, patientId: pid });
        console.log('Patient found:', patient);

        if (!patient) {
            console.log('Patient not found or credentials do not match');
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.patient = patient;
        next();
    } catch (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = pAuth;