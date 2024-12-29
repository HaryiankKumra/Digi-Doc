import { Router } from 'express';
import dAuth from '../Middleware/login_doctor';
import { addPrescription, DoctorHomePage, ViewPatient } from '../Controllers/Doctor_func';

const router2 = Router()

router2.post('/home',dAuth,DoctorHomePage);
router2.post('/view',ViewPatient);
router2.post('/add',dAuth,addPrescription);


export default router2