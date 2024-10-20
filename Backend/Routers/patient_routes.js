const express = require("express");
const pAuth = require('../Middleware/login_patient')

const router1 = express.Router()
const {AddPrescription,PatientAboutPage,PatientRecords} = require('../Controllers/patient_func')

router1.post('/about',pAuth,PatientAboutPage);
router1.get('/records',pAuth,PatientRecords);
router1.post('/add',pAuth,AddPrescription);

module.exports = router1;
