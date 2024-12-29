import { Router } from "express";
import pAuth from '../Middleware/login_patient';

const router1 = Router()
import { AddPrescription, PatientAboutPage, PatientRecords } from '../Controllers/patient_func';

router1.post('/about',pAuth,PatientAboutPage);
router1.get('/records',pAuth,PatientRecords);
router1.post('/add',pAuth,AddPrescription);

export default router1;
