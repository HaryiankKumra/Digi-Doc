import './App.css';
import DoctorPage from './components/DoctorPage';
import DoctorProfileCard from './components/DoctorProfileCard';

function App() {
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
}

export default App;