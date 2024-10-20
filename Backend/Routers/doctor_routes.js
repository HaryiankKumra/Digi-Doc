const express = require('express');
const dAuth = require('../Middleware/login_doctor')
const {addPrescription,DoctorHomePage,ViewPatient} = require('../Controllers/Doctor_func')

const router2 = express.Router()

router2.post('/home',dAuth,DoctorHomePage);
router2.post('/view',ViewPatient);
router2.post('/add',dAuth,addPrescription);


module.exports = router2