// The basic schematic of the documents stored in the Patients collection of MongoDB


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Prescription schema
const prescriptionSchema = new Schema({
  doctorName: {
    type: String,
    required: true
  },
  reasonForCheckup: {
    type: String,
    required: true
  },
  findings: {
    type: String,
    required: true
  },
  prescription: {
    type: String,
    required: true
  },
  dateOfDoctorVisit: {
    type: Date,
    required: true
  },
  uploadPicture: {
    type: String,
    required: false // Assuming this will store a URL to the uploaded picture
  }
});

// Define the Patient schema
const patientSchema = new Schema({
  patientId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  medicalHistory: {
    type: String,
    required: false
  },
  bloodType: { 
    type: String,
    required: false
  },
  prescriptions: [prescriptionSchema] 
}, { collection: 'Patient' }); 

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
