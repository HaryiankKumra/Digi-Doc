import { Link } from 'react-router-dom';

const Option = () => {
  return (
    <div className="option-container">
      <h2>Select your option:</h2>
      <Link to="/login" className="option-link">
        <button className="option-button">Patient</button>
      </Link>
      <Link to="/logindoc" className="option-link">
        <button className="option-button">Doctor</button>
      </Link>
    </div>
  );
};

export default Option;
