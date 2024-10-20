import { useState } from 'react';
import PropTypes from 'prop-types';

const PatientHistory = ({ onFetchPatientHistory, patientHistory }) => {
    const [patientKey, setPatientKey] = useState('');

    const handleFetchHistory = () => {
        onFetchPatientHistory(patientKey);
    };

    return (
        <div className="patient-history">
            <h2>Patient History</h2>
            <input 
                type="text" 
                value={patientKey} 
                onChange={(e) => setPatientKey(e.target.value)} 
                placeholder="Enter Patient Key" 
                className="patient-key-input"
            />
            <button onClick={handleFetchHistory} className="fetch-history-button">View History</button>
        </div>
    );
};

PatientHistory.propTypes = {
    onFetchPatientHistory: PropTypes.func.isRequired,
    patientHistory: PropTypes.object,
};

export default PatientHistory;
