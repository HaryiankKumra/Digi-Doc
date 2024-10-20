import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/image.png';
import Logo from '../assets/logo.png';
import axios from "axios";


const LoginDoc = () => {
  const [dEmail, setDEmail] = useState('');
  const [did, setDid] = useState('');
  const navigate = useNavigate();


  const handleLogin = async() => {
    // Here, you should validate the login credentials.
    // If valid, navigate to the Doctor component.
    
  //   console.log('Calling Backend');
  //   try {
  //     const response = await axios.get('http://localhost:5000/home');
  //     if (response.status === 200) {
  //       console.log('Response from backend:', response.data);
  //       navigate('/doctor');
  //     } else {
  //       console.error('Login failed:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  //   console.log('Returning from backend');
  // };
  console.log('Calling Backend');
  console.log(dEmail,did);
  try {
    const response = await axios.post('http://localhost:5000/doctor/home', {
      d_email : dEmail,
      did: did
    });
    console.log('Request succesfully recieved');
    if (response.status === 200) {
      console.log('Response from backend:', response.data);
      navigate('/doctor');
    } else {
      console.error('Login failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
  console.log('Returning from backend');
};


return (
  <div className="login-main">
    <div className="login-left">
      <img src={Image} alt="Background" className="pic" />
    </div>
    <div className="login-right">
      <div className="login-right-container">
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="login-center">
          <div className="login-header">
            <h1>Doctor</h1>
          </div>
          <h2>Welcome back!</h2>
          <p>Please enter your details</p>
          <div>
            <input
              type="email"
              placeholder="Doctor's Email"
              className="d_email"
              value={dEmail}
              onChange={(e) => setDEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Doctor ID"
              className="did"
              value={did}
              onChange={(e) => setDid(e.target.value)}
            />
          </div>
          <div className="login-center-buttons">
            <button type="button" onClick={handleLogin}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default LoginDoc;
