import { useState } from 'react';
import PropTypes from 'prop-types';

const PatientActions = ({ patientKey, onAddPrescription, onUpdateDisease }) => {
    const [newPrescription, setNewPrescription] = useState('');
    const [updatedDisease, setUpdatedDisease] = useState('');

    const handleAddPrescription = () => {
        onAddPrescription(patientKey, newPrescription);
        setNewPrescription('');
    };

    const handleUpdateDisease = () => {
        onUpdateDisease(patientKey, updatedDisease);
        setUpdatedDisease('');
    };

    return (
        <div className="patient-actions">
            <h2>Patient Actions</h2>
            
            <div className="action-section">
                <h3>Add New Prescription</h3>
                <input 
                    type="text" 
                    value={newPrescription} 
                    onChange={(e) => setNewPrescription(e.target.value)} 
                    placeholder="Enter New Prescription" 
                    className="action-input"
                />
                <button onClick={handleAddPrescription} className="action-button">Add Prescription</button>
            </div>
            
            <div className="action-section">
                <h3>Update Disease/Problem</h3>
                <input 
                    type="text" 
                    value={updatedDisease} 
                    onChange={(e) => setUpdatedDisease(e.target.value)} 
                    placeholder="Enter Updated Disease/Problem" 
                    className="action-input"
                />
                <button onClick={handleUpdateDisease} className="action-button">Update Disease/Problem</button>
            </div>
        </div>
    );
};

PatientActions.propTypes = {
    patientKey: PropTypes.string.isRequired,
    onAddPrescription: PropTypes.func.isRequired,
    onUpdateDisease: PropTypes.func.isRequired,
};

export default PatientActions;
