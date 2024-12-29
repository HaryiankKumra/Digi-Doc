// ** IMP , before accessing any of these all the queries will pass through an authentication , requiring the patientID as well as the patient email id 

// In this file we will be defining all of the patient functionalities
// We are mainly defining three functionalities here consisting of 
// --> Viewing the about page 
// --> Viewing some previous records 
// --> Adding the prescription



const PatientAboutPage = async(req,res) => {
    res.status(200).json({DOB:req.patient.dob,email:req.patient.email,phone:req.patient.phone,locate:req.patient.location})
}

const PatientRecords = async(req,res) => {
    res.status(200).json({DOB:req.patient.dob,
                         email:req.patient.email,
                         phone:req.patient.phone,
                         locate:req.patient.location,
                         medical_history:req.patient.medicalHistory,
                         prescriptions:req.patient.prescriptions,
                        })
}


const AddPrescription = async (req, res) => {
    const { dname, rfc, find, pres, dte , url} = req.body;
  
    if (!dname || !rfc || !find || !pres || !dte || !url) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }
  
    try {
      const newPrescription = {
        doctorName: req.body.dname,
        reasonForCheckup: req.body.rfc,
        findings: req.body.find,
        prescription: req.body.pres,
        dateOfDoctorVisit: req.body.dte,
        uploadPicture: req.body.url 
      };
  
      req.patient.prescriptions.push(newPrescription);
      await req.patient.save();
  
      res.status(200).json({ success: true, message: "Prescription added successfully", prescription: newPrescription });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
export default {AddPrescription,PatientAboutPage,PatientRecords}
