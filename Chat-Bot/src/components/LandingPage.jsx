import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation code */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Add the AI Chat link */}
          <li><Link to="/chatbot">AI Chat</Link></li>
        </ul>
      </nav>
      {/* Main content */}
      <section id="home">
        {/* Content code */}
        <h1>DigiDoc</h1>
        <p>❤️ Health comes first</p>
        <p>Find your Doctor and make an Appointments</p>
        {/* Change the anchor tag to Link component */}
        <Link to="/option" className="book-appointment-btn">Book Appointment</Link>

      </section>
      <section id="services">
        <h2>Services</h2>
        <ul>
          <li>Emergency Care</li>
          <li>Heart Disease</li>
          <li>Dental Care</li>
          <li>Prescription</li>
          <li>Insights for doctors</li>
        </ul>
      </section>


      <section id="services">
        <h2>Services</h2>
        <ul>
          <li>Emergency Care</li>
          <li>Heart Disease</li>
          <li>Dental Care</li>
          <li>Prescription</li>
          <li>Insights for doctors</li>
        </ul>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>Welcome to Health Plus, your trusted partner for accessible and personalized healthcare. Our expert doctors offer online consultations and specialized services, prioritizing your well-being. Join us on this journey towards a healthier you.</p>
      </section>
      <section id="reviews">
        <h2>Reviews</h2>
        <blockquote>
          Health Plus transformed my healthcare experience! The online consultations were so convenient, and the doctors were knowledgeable and caring.
          <cite>Esther Howard, Texas, USA</cite>
        </blockquote>
      </section>
      <section id="doctors">
        <h2>Meet Our Doctors</h2>
        <div className="doctor-card">
          {/* Doctor cards go here */}
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: support@healthplus.com</p>
        <p>Phone: +022 5454 5252</p>
      </section>
      <footer>
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
