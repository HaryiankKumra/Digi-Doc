import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    console.log('Calling Backend');
    try {
      const response = await axios.post("http://localhost:5000/patient/about", {
        Email: email,        
        pid: password
      });
      console.log('Request successfully received');
      if (response.status === 200) {
        console.log("Response from Backend: ", response.data)
        navigate("/patient"); 
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    console.log('Returning from backend')
  };

  const handleSignUp = () => {
    // Logic for handling sign up
    // Redirect to patient page after sign up
    navigate("/patient"); // Navigate to the patient page
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Background" className="pic"/>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <div className="login-header">
              <h1>Patient</h1>
            </div>
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={handleLogin}>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
