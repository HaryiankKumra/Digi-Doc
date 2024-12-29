import { Router } from 'express';
import { CreatePatient, CreateDoctor, getHomepage } from '../Controllers/Home_page';
const router3 = Router()

router3.get('/',getHomepage);
router3.post('/newPatient',CreatePatient);
router3.post('/newDoc',CreateDoctor);

export default router3