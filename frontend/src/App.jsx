import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

<nav className="navbar">
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Sending...");
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      toast.success("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send.");
    }
  };

  return (
    <div className="main-layout">
      <a
        href="/Avinash_Behara_Resume.pdf"
        download
        className="floating-resume-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        📄 Download Resume
      </a>
      <aside className="sidebar">
        <h1 className="sidebar-title">Avinash Behara</h1>
        <nav className="sidebar-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          {/* <a href="/Avinash_Behara_Resume.pdf" download className="resume-button">
          📄 Download Resume
        </a> */}
        </nav>
      </aside>

      <div className="content">
        <p className="subtitle">
          <span className="tech-skill">Node.js</span> <span className="divider">|</span> <span className="experience">8+ Years Experience</span>
        </p>
        {/* About Section */}
        <div id="about" className="section">
          <h2>Career Objective</h2>
          <p>
            To gain a dynamic and challenging role in software development that offers the best
            opportunity for further development of my abilities and career growth in a reputed MNC.
          </p>

          <h2>Academic Background</h2>
          <ul>
            <li><strong>B.Tech</strong> – Aditya Institute of Technology & Management, Tekkali (2012–2016)</li>
            <li><strong>Intermediate (MPC)</strong> – Board of Intermediate Education (2009–2011)</li>
            <li><strong>SSC</strong> – Andhra Pradesh Secondary School Certificate (2008–2009)</li>
          </ul>

          <h2>Professional Summary</h2>
          <ul>
            <li>8+ years of experience in backend development using Node.js, Java, JSP, JDBC, Hibernate.</li>
            <li>Strong knowledge of SQL Server, MySQL.</li>
            <li>Experience working in Agile teams with tools like GitHub, Jenkins, ADO.</li>
            <li>Currently working at Brillio Technologies (Nov 2020 – Present).</li>
            <li>Past roles at Accenture and TCS.</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div id="projects" className="section">
          <h2>Projects</h2>
          <ul>
            <li><strong>APP Modernization</strong> – Migrated legacy system to MERN stack for Sempra client.</li>
            <li><strong>AVS Backend API</strong> – Built scalable APIs for Vodacom to support Android, iOS, Roku.</li>
            <li><strong>Dedicated Collaboration Solutions</strong> – Integrated WPS and DB2 with Java for TCS client.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div id="contact" className="section">
          <h2>Contact</h2>
          <p><strong>Email:</strong> <a href="mailto:beharaavi@gmail.com">beharaavi@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919030933638">+91-9030933638</a></p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <label>Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Your Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Your Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );


}

export default App;
