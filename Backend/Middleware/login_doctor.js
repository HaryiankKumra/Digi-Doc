// This file contains the material for authorization of the doctor using two criterions using the doctor's email and doctor id
// It is an middleware


const Doctors = require('../Models/Doctor');
const connectDB = require('../Database/conn');

const dAuth = async (req, res, next) => {
    const { d_email, did } = req.body;

    // Check if d_email and did are present in the request body
    if (!d_email || !did) {
        console.log("Doctor ID or email is missing in the request");
        return res.status(400).json({ message: "Doctor ID or email is missing in the request" });
    }

    try {
        await connectDB(); // Assuming connectDB returns the database connection
        console.log('Database connection established');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

    console.log('Querying for doctor:', { did, d_email });

    try {
        const doctor = await Doctors.findOne({ did, d_email });
        console.log('Found doctor:', doctor);

        if (!doctor) {
            console.log("Could not find the doctor");
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.doctor = doctor;
        next();
    } catch (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = dAuth;


module.exports = dAuth;
