import { useState } from 'react';
import avatar from '../assets/avatar-1.png';
// import Image from '../assets/image.png';
// import Logo from '../assets/logo.png';


function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About Us</h2>
      </header>
      <section className="about-text">
        <div className="intro">
          <p>Welcome to our platform! We are dedicated to revolutionizing healthcare management by providing a comprehensive and user-friendly system for patients, doctors, and healthcare professionals.</p>
          <p>Our platform offers a range of features designed to streamline medical record management, enhance communication between patients and healthcare providers, and ensure seamless access to healthcare services.</p>
          <p>Here are some key features:</p>
        </div>
        <div className="features-list">
          <ol>
            <li>Centralized Medical Records: Easily access and manage your medical records online, including prescriptions, medical history, test results, and more, all in one secure location.</li>
            <li>Appointment Scheduling: Schedule appointments with healthcare providers conveniently through our platform, eliminating the hassle of phone calls and paperwork.</li>
            <li>Prescription Management: Manage your prescriptions online, including refill requests, dosage instructions, and medication reminders, ensuring you never miss a dose.</li>
            <li>Secure Communication: Communicate securely with your healthcare providers through our encrypted messaging system, allowing for quick and efficient exchange of information.</li>
            <li>Educational Resources: Access a wealth of educational resources, articles, and videos to empower you with knowledge about various health conditions, treatments, and preventive measures.</li>
            <li>User-friendly Interface: Our intuitive and user-friendly interface makes navigating the platform easy and straightforward, ensuring a seamless experience for users of all ages and technical backgrounds.</li>
          </ol>
        </div>
        <div className="note">
          <p>We are committed to providing the highest quality of care and support to our users, and we are continuously evolving our platform to meet the ever-changing needs of the healthcare industry.</p>
        </div>
      </section>
      <footer className="footer">
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>Email: support@digidoc.com</p>
          <p>Phone: +916787345999</p>
          <p>Address: 123 lane 4, XYZ City, 121001</p>
        </div>
        <div className="map-section">
          <h2>Our Location</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01901072472!2d144.96315781535768!3d-37.814107979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c7cbad57a8c!2sMedical%20Center!5e0!3m2!1sen!2sus!4v1629832400000!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </footer>
    </article>
  );
}

function AddPrescription() {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    doctorName: '',
    reason: '',
    findings: '',
    prescription: '',
    visitDate: '',
    file: ''
  });
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { doctorName, reason, findings, prescription, visitDate, file } = formData;

    if (!doctorName || !reason || !findings || !prescription || !visitDate || !file) {
      alert('Please fill in all fields.');
      return;
    }

    setSuccessMessageVisible(true);
    setFormData({
      doctorName: '',
      reason: '',
      findings: '',
      prescription: '',
      visitDate: '',
      file: ''
    });

    document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToHomePage = () => {
    document.querySelector('[data-page="about"]').classList.add('active');
    document.querySelectorAll('[data-page]').forEach((page) => {
      if (page.getAttribute('data-page') !== 'about') {
        page.classList.remove('active');
      }
    });

    setSuccessMessageVisible(false);
    setFormVisible(true);
    setFormData({
      doctorName: '',
      reason: '',
      findings: '',
      prescription: '',
      visitDate: '',
      file: ''
    });
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Add New Prescription</h2>
      </header>
      <section className="contact-info">
        <p>You Can Add New Prescription.</p>
      </section>
      <section className="add-prescription">
        <button id="showPrescriptionForm" onClick={toggleFormVisibility}>Add New Prescription</button>
      </section>
      {formVisible && (
        <section id="prescriptionForm">
          <h3>Prescription Details</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="doctorName">Doctor Name:</label>
              <input type="text" id="doctorName" name="doctorName" value={formData.doctorName} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="reason">Reason for Checkup:</label>
              <input type="text" id="reason" name="reason" value={formData.reason} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="findings">Findings:</label>
              <textarea id="findings" name="findings" value={formData.findings} onChange={handleInputChange}></textarea>
            </div>
            <div>
              <label htmlFor="prescription">Prescription:</label>
              <textarea id="prescription" name="prescription" value={formData.prescription} onChange={handleInputChange}></textarea>
            </div>
            <div>
              <label htmlFor="visitDate">Date of Doctor Visit:</label>
              <input type="date" id="visitDate" name="visitDate" value={formData.visitDate} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="file">Upload File:</label>
              <input type="file" id="file" name="file" value={formData.file} onChange={handleInputChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
          {successMessageVisible && (
            <div id="successMessage">
              <p>Prescription uploaded successfully!</p>
              <button id="goToHomePage" onClick={handleGoToHomePage}>Take me to the home page</button>
            </div>
          )}
        </section>
      )}
    </article>
  );
}

function Contact() {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact Information</h2>
      </header>
      <section className="contact-info">
        <p>Additional contact information and form if needed.</p>
      </section>
    </article>
  );
}

function Navbar() {
  const handleNavClick = (e) => {
    const target = e.target;
    const targetPage = target.textContent.toLowerCase().replace(' ', '-');

    document.querySelectorAll('[data-page]').forEach((page) => {
      page.classList.remove('active');
      if (page.getAttribute('data-page') === targetPage) {
        page.classList.add('active');
      }
    });

    document.querySelectorAll('.navbar-link').forEach((link) => {
      link.classList.remove('active');
    });
    target.classList.add('active');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><button className="navbar-link active" data-nav-link onClick={handleNavClick}>About</button></li>
        <li className="navbar-item"><button className="navbar-link" data-nav-link onClick={handleNavClick}>Records</button></li>
        <li className="navbar-item"><button className="navbar-link" data-nav-link onClick={handleNavClick}>Add New Prescription</button></li>
        <li className="navbar-item"><button className="navbar-link" data-nav-link onClick={handleNavClick}>Contact</button></li>
      </ul>
    </nav>
  );
}

function Records() {
  return (
    <article className="records" data-page="records">
      <header>
        <h2 className="h2 article-title">Records</h2>
      </header>
      <section className="records-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>Reason of Checkup</th>
              <th>Findings</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2023-02-10</td>
              <td>Dr. ABC</td>
              <td>Cough</td>
              <td>T.B</td>
              <td><a href="#">View</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-06-20</td>
              <td>Dr. XYZ</td>
              <td>Sneezing</td>
              <td>Cold</td>
              <td><a href="#">View</a></td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Patient Avatar" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name">Patient Name</h1>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
        </button>
      </div>
      <div className="sidebar-info_more" style={{ display: 'none' }}>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:Patient@example.com" className="contact-link">Patient@example.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><ion-icon name="phone-portrait-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+916787345697" className="contact-link">+91 6787345697</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><ion-icon name="calendar-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2005-11-09">November 9, 2005</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><ion-icon name="location-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Faridabad, Haryana, India</address>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><ion-icon name="blood-outline"></ion-icon></div>
            <div className="contact-info">
              <p className="contact-title">Blood Type</p>
              <p data-blood-type="B+">B+</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

function Patient() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <About />
        <Records />
        <AddPrescription />
        <Contact />
      </div>
    </div>
  );
}

export default Patient;
