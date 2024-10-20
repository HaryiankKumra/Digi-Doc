import { useState } from 'react';
import axios from 'axios';

const PatientHistory = () => {
    const [pid, setPid] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [patientData, setPatientData] = useState(null);

    const handleFetch = async () => {
        if (!pid) {
            setError('Please enter a valid Patient ID');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            console.log('Fetching patient history...');
            const response = await axios.post(`http://localhost:5000/doctor/view`, {
                pid: pid,
            });

            console.log('Request successfully received');
            if (response.status === 200) {
                console.log("Response from Backend: ", response.data);
                setPatientData(response.data); // Set the patient data
            } else {
                setError('Failed to fetch patient history');
            }
        } catch (error) {
            console.error('Error fetching patient history:', error);
            setError('Error fetching patient history. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="patient-history">
            <h2>Patient History</h2>
            <input
                type="text"
                placeholder="Enter Patient ID"
                value={pid}
                onChange={(e) => setPid(e.target.value)}
            />
            <button onClick={handleFetch} disabled={loading}>
                {loading ? 'Fetching...' : 'Fetch History'}
            </button>
            {error && <p className="error-message">{error}</p>}
            {patientData && (
                <div className="patient-details">
                    <h3>Patient Details</h3>
                    <p><strong>Name:</strong> {patientData.p_name}</p>
                    <p><strong>Date of Birth:</strong> {new Date(patientData.p_dob).toLocaleDateString()}</p>
                    <p><strong>Phone:</strong> {patientData.p_phone}</p>
                    <p><strong>Blood Type:</strong> {patientData.bloodtype}</p>
                    <p><strong>Medical History:</strong> {patientData.medicalhistory}</p>
                    <p><strong>Last Doctor:</strong> {patientData.last_doctor}</p>
                    <p><strong>Last Findings:</strong> {patientData.last_findings}</p>
                </div>
            )}
        </div>
    );
};


// Mocked PatientActions component
const PatientActions = ({ patientKey, onAddPrescription, onUpdateDisease }) => {
    const [prescription, setPrescription] = useState('');
    const [disease, setDisease] = useState('');

    const handleAddPrescription = () => {
        onAddPrescription(patientKey, prescription);
        setPrescription('');
    };

    const handleUpdateDisease = () => {
        onUpdateDisease(patientKey, disease);
        setDisease('');
    };

    return (
        <div className="patient-actions">
            <h2>Patient Actions</h2>
            <input
                type="text"
                placeholder="New Prescription"
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
            />
            <button onClick={handleAddPrescription}>Add Prescription</button>
            <input
                type="text"
                placeholder="Update Disease"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
            />
            <button onClick={handleUpdateDisease}>Update Disease</button>
        </div>
    );
};

const DoctorPage = () => {
    const [patientHistory, setPatientHistory] = useState(null);
    const [patientDetails, setPatientDetails] = useState(null);

    const fetchPatientHistory = async (patientKey) => {
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
                        doctor: 'Dr. Smith',
                        prescription: 'Medication X',
                        lastVisit: '2023-03-01',
                        nextVisit: '2023-04-01'
                    }
                });
            }, 1000);
        });
    };

    const handleFetchHistory = async (patientKey) => {
        const [history, details] = await Promise.all([
            fetchPatientHistory(patientKey),
            fetchPatientDetails(patientKey)
        ]);
        setPatientHistory(history);
        setPatientDetails(details);
    };

    const addPrescription = (patientKey, prescription) => {
        console.log(`Adding prescription for patient ${patientKey}: ${prescription}`);
    };

    const updateDisease = (patientKey, disease) => {
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

const DoctorProfileCard = () => {
    return (
        <div className="doctor-profile-card">
            <img src={Image} alt="Doctor Avatar" />
            <h3>Dr. John Doe</h3>
            <p>Cardiologist</p>
        </div>
    );
};

const Doctor = () => {
    return (
        <div className="app">
            <div className="doctor-page">
                <div className="sidebar">
                    <DoctorProfileCard />
                </div>
                <div className="main-content">
                    <DoctorPage />
                </div>
            </div>
        </div>
    );
};

export default Doctor;
