// The basic schematic of the documents stored in the Doctors collection of MongoDB


import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const DoctorSchema = new Schema({
    d_name: {
        type: String,
        required: true
    },
    did: {
        type: String,
        required: true,
        unique: true
    },
    d_email: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    proof_number: {
        type: String,
        required: true
    }
}, { collection: 'Doctors' });

const Doctors = model('Doctor', DoctorSchema);

export default Doctors;
