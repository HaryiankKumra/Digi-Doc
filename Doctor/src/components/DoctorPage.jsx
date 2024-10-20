import { useState } from 'react';
import PatientHistory from './PatientHistory';
import PatientActions from './PatientActions';

const DoctorPage = () => {
    const [patientHistory, setPatientHistory] = useState(null);
    const [patientDetails, setPatientDetails] = useState(null);

    const fetchPatientHistory = async (patientKey) => {
        // Mocked patient history fetch function
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    key: patientKey,
                    history: [
                        { date: '2023-01-01', diagnosis: 'Hypertension', prescription: 'Drug A' },
                        { date: '2023-02-01', diagnosis: 'Diabetes', prescription: 'Drug B' }
                    ]
                });
            }, 1000);
        });
    };

    const fetchPatientDetails = async (patientKey) => {
        // Mocked patient details fetch function
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: 'Arjun Pandey',
                    age: 27,
                    phone: '1234567890',
                    bloodGroup: 'B+ve',
                    allergies: 'none',
                    lastHistory: {
                        disease: 'ABC',
                        doctor: 'def',
                        prescription: 'jkl',
                        lastVisit: '123date',
                        nextVisit: '234date'
                    }
                });
            }, 1000);
        });
    };

    const handleFetchHistory = async (patientKey) => {
        const [history, details] = await Promise.all([fetchPatientHistory(patientKey), fetchPatientDetails(patientKey)]);
        setPatientHistory(history);
        setPatientDetails(details);
    };

    const addPrescription = (patientKey, prescription) => {
        // Mocked add prescription function
        console.log(`Adding prescription for patient ${patientKey}: ${prescription}`);
    };

    const updateDisease = (patientKey, disease) => {
        // Mocked update disease function
        console.log(`Updating disease for patient ${patientKey}: ${disease}`);
    };

    return (
        <div className="doctor-page">
            <div className="content">
                <div className="left-column">
                    <PatientHistory 
                        onFetchPatientHistory={handleFetchHistory} 
                        patientHistory={patientHistory}
                    />
                    {patientHistory && (
                        <PatientActions 
                            patientKey={patientHistory.key}
                            onAddPrescription={addPrescription}
                            onUpdateDisease={updateDisease}
                        />
                    )}
                </div>
                <div className="right-column">
                    {patientDetails && (
                        <div className="patient-details-history">
                            <div className="patient-details-column">
                                <h3>Patient Details</h3>
                                <p><strong>Name:</strong> {patientDetails.name}</p>
                                <p><strong>Age:</strong> {patientDetails.age}</p>
                                <p><strong>Phone no:</strong> {patientDetails.phone}</p>
                                <p><strong>Blood group:</strong> {patientDetails.bloodGroup}</p>
                                <p><strong>Allergies known:</strong> {patientDetails.allergies}</p>
                                <h3>Last History</h3>
                                <p><strong>Disease:</strong> {patientDetails.lastHistory.disease}</p>
                                <p><strong>Doctor concerned:</strong> {patientDetails.lastHistory.doctor}</p>
                                <p><strong>Prescription:</strong> {patientDetails.lastHistory.prescription}</p>
                                <p><strong>Last visit:</strong> {patientDetails.lastHistory.lastVisit}</p>
                                <p><strong>Next visit:</strong> {patientDetails.lastHistory.nextVisit}</p>
                            </div>
                            <div className="patient-history-column">
                                <h3>Past History</h3>
                                <ul>
                                    {patientHistory.history.map((entry, index) => (
                                        <li key={index}>
                                            <strong>Date:</strong> {entry.date}<br />
                                            <strong>Diagnosis:</strong> {entry.diagnosis}<br />
                                            <strong>Prescription:</strong> {entry.prescription}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoctorPage;
