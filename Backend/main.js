import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import errorHandlermiddleware from '../Backend/Middleware/error-handler';
import notfoundmiddleware from '../Backend/Middleware/not-found';
config();


const app = express()

app.use(cors());

import patient_router from '../Backend/Routers/patient_routes';
import doctor_router from '../Backend/Routers/doctor_routes';
import home_router from '../Backend/Routers/home_routes';


app.use(json())
app.use(urlencoded({ extended: true}))


app.use('/patient',patient_router);
app.use('/doctor',doctor_router);
app.use('/home',home_router);

app.use(notfoundmiddleware)
app.use(errorHandlermiddleware)

app.listen(process.env.PORT,(req,res) => {
    console.log("Succesfully listening on port 5000");
})