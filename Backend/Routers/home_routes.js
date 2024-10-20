const express = require('express')
const {CreatePatient,CreateDoctor,getHomepage} = require('../Controllers/Home_page')
const router3 = express.Router()

router3.get('/',getHomepage);
router3.post('/newPatient',CreatePatient);
router3.post('/newDoc',CreateDoctor);

module.exports = router3