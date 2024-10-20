import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chatbot />} /> {/* Set Chatbot as the default route */}
      </Routes>
    </Router>
  );
}

export default App;
