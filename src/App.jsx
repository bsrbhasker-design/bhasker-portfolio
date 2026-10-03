import { useState } from "react";
import "./App.css";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="website">

{/* Navbar */}
<nav className="navbar">

  <a href="#home" className="logo">
    Bhasker<span>.</span>
  </a>

  <div className={`nav-links ${menuOpen ? "open" : ""}`}>

    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
    >
      About
    </a>

    <a
      href="#skills"
      onClick={() => setMenuOpen(false)}
    >
      Skills
    </a>

    <a
      href="#projects"
      onClick={() => setMenuOpen(false)}
    >
      Projects
    </a>

    <a
      href="#experience"
      onClick={() => setMenuOpen(false)}
    >
      Experience
    </a>

    <a
      href="#education"
      onClick={() => setMenuOpen(false)}
    >
      Education
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </a>

  </div>


  <button
    className={`menu-button ${menuOpen ? "active" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation"
  >

    <span></span>
    <span></span>
    <span></span>

  </button>

</nav>

      {/* Hero */}
<section id="home" className="hero">

  <div className="hero-content">

    <p className="small-title">
      MCA • FULL STACK DEVELOPER
    </p>

    <h1>
      Hi, I'm <span>Bhasker</span>
    </h1>

    <h2 className="typing-title">
      Full Stack Developer
    </h2>

    <p className="hero-text">
      I build modern web applications, REST APIs and business
      solutions using PHP, React.js, Node.js, MySQL and other
      modern technologies.
    </p>

    {/* Buttons */}
    <div className="hero-buttons">

      <a href="#projects" className="btn primary">
        View My Projects →
      </a>

      <a
        href="/Bhasker-Resume.pdf"
        download
        className="btn secondary"
      >
        Download Resume ↓
      </a>

    </div>

    {/* Statistics */}
    <div className="hero-stats">

      <div className="hero-stat">
        <strong>04+</strong>
        <span>Projects</span>
      </div>

      <div className="hero-stat">
        <strong>10+</strong>
        <span>Technologies</span>
      </div>

      <div className="hero-stat">
        <strong>MCA</strong>
        <span>Graduate</span>
      </div>

    </div>

    {/* Social Links */}
    <div className="hero-social">

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>

    </div>

  </div>


  {/* Hero Right Side */}
  <div className="hero-visual">

    <div className="hero-glow"></div>

    <div className="profile-circle">
      <img
        src="/profile.jpg"
        alt="Bhasker"
      />
    </div>

    <div className="hero-card">

      <span className="hero-card-label">
        CURRENT FOCUS
      </span>

      <h3>
        Building
        <span> Digital Solutions</span>
      </h3>

      <p>
        Web Applications • APIs • Business Systems
      </p>

    </div>

  </div>

</section>

{/* About */}
<section id="about" className="section about-section">

  <div className="about-header">
    <p className="section-title">ABOUT ME</p>

    <h2>
      Turning ideas into
      <span> useful software</span>
    </h2>

    <p className="about-intro">
      I am an MCA graduate and Full Stack Developer focused on
      building practical, user-friendly and business-oriented
      software applications.
    </p>
  </div>


  <div className="about-layout">

    {/* About Text */}
    <div className="about-text">

      <p>
        I work across frontend, backend and database development,
        creating complete applications from user interfaces to
        server-side APIs and database systems.
      </p>

      <p>
        My development experience includes web applications,
        REST APIs, admin dashboards, inventory systems,
        e-commerce functionality and Android applications.
      </p>

      <p>
        I enjoy understanding real-world business requirements
        and converting them into simple, reliable and scalable
        software solutions.
      </p>

      <div className="about-highlights">

        <div className="about-highlight">
          <strong>01</strong>
          <span>Problem Solving</span>
        </div>

        <div className="about-highlight">
          <strong>02</strong>
          <span>Full Stack Development</span>
        </div>

        <div className="about-highlight">
          <strong>03</strong>
          <span>Business Solutions</span>
        </div>

      </div>

    </div>


    {/* What I Do */}
    <div className="about-services">

      <div className="service-card">

        <div className="service-number">01</div>

        <div>
          <h3>Web Development</h3>

          <p>
            Modern and responsive web applications using
            React.js, PHP, JavaScript and modern frontend
            technologies.
          </p>
        </div>

      </div>


      <div className="service-card">

        <div className="service-number">02</div>

        <div>
          <h3>Backend & APIs</h3>

          <p>
            REST API development, authentication, business
            logic and server-side applications using PHP,
            Node.js and MySQL.
          </p>
        </div>

      </div>


      <div className="service-card">

        <div className="service-number">03</div>

        <div>
          <h3>Business Applications</h3>

          <p>
            Applications for products, inventory, stock,
            orders, customers and other real-world business
            requirements.
          </p>
        </div>

      </div>


      <div className="service-card">

        <div className="service-number">04</div>

        <div>
          <h3>Android Development</h3>

          <p>
            Android applications using Kotlin, Retrofit and
            REST APIs for connecting mobile applications
            with backend services.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
      {/* Skills */}
      <section id="skills" className="section dark-section">
        <p className="section-title">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
  <div className="skill">PHP</div>
  <div className="skill">React.js</div>
  <div className="skill">Node.js</div>
  <div className="skill">JavaScript</div>
  <div className="skill">TypeScript</div>
  <div className="skill">MySQL</div>
  <div className="skill">REST API</div>
  <div className="skill">Android / Kotlin</div>
  <div className="skill">Git</div>
  <div className="skill">HTML & CSS</div>
  <div className="skill">Bootstrap</div>
  <div className="skill">Razorpay Integration</div>
</div>
      </section>

{/* Projects */}
<section id="projects" className="section projects-section">
  <p className="section-title">MY WORK</p>

  <h2>Featured Projects</h2>

  <p className="projects-intro">
    Here are some of the applications and business solutions I have
    worked on using modern web, backend and mobile technologies.
  </p>

  <div className="projects-grid">

    {/* MySabala */}
    <div className="project-card featured-project">

      <div className="project-image">
        <img
          src="/projects/mysabala.jpg"
          alt="MySabala project"
        />

        <div className="project-overlay">
          <span>Featured Project</span>
        </div>
      </div>

      <div className="project-content">

        <div className="project-number">01</div>

        <h3>MySabala</h3>

        <p className="project-description">
          MySabala is a complete food ordering and business management
          platform designed to connect customers with food products while
          providing administrators with tools to manage products, orders,
          inventory, stock and customers.
        </p>

        <div className="project-features">
          <div>✓ Customer Registration & Login</div>
          <div>✓ Food Categories & Products</div>
          <div>✓ Shopping Cart & Checkout</div>
          <div>✓ Razorpay Payment Integration</div>
          <div>✓ Order Tracking</div>
          <div>✓ Inventory & Stock Management</div>
        </div>

        <div className="project-tags">
          <span>PHP</span>
          <span>React</span>
          <span>MySQL</span>
          <span>REST API</span>
          <span>Razorpay</span>
          <span>JavaScript</span>
        </div>

        <div className="project-buttons">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            GitHub
          </a>

          <a
            href="https://mysabala.com"
            target="_blank"
            rel="noreferrer"
            className="project-btn demo-btn"
          >
            Live Demo ↗
          </a>

        </div>

      </div>
    </div>


    {/* Inventory Management */}
    <div className="project-card">

      <div className="project-image">
        <img
          src="/projects/inventory.jpg"
          alt="Inventory management system"
        />
      </div>

      <div className="project-content">

        <div className="project-number">02</div>

        <h3>Inventory Management System</h3>

        <p className="project-description">
          A business inventory application for managing products,
          agencies, stock entries, current stock and low-stock alerts.
        </p>

        <div className="project-tags">
          <span>PHP</span>
          <span>MySQL</span>
          <span>JavaScript</span>
          <span>REST API</span>
        </div>

        <div className="project-buttons">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="project-btn demo-btn"
          >
            View Project
          </a>

        </div>

      </div>
    </div>


    {/* Android App */}
    <div className="project-card">

      <div className="project-image">
        <img
          src="/projects/android-app.jpg"
          alt="MySabala Android application"
        />
      </div>

      <div className="project-content">

        <div className="project-number">03</div>

        <h3>MySabala Android App</h3>

        <p className="project-description">
          An Android application connected to the MySabala backend API
          for authentication, categories, products and food ordering.
        </p>

        <div className="project-tags">
          <span>Kotlin</span>
          <span>Android</span>
          <span>Retrofit</span>
          <span>Gson</span>
          <span>REST API</span>
        </div>

        <div className="project-buttons">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="project-btn demo-btn"
          >
            View Project
          </a>

        </div>

      </div>
    </div>


    {/* PHP Business Application */}
    <div className="project-card">

      <div className="project-image">
        <img
          src="/projects/php-app.jpg"
          alt="PHP business application"
        />
      </div>

      <div className="project-content">

        <div className="project-number">04</div>

        <h3>PHP Business Application</h3>

        <p className="project-description">
          A PHP and MySQL based business application with administrator
          authentication, product management, orders and database-driven
          functionality.
        </p>

        <div className="project-tags">
          <span>PHP</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="project-buttons">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="project-btn github-btn"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="project-btn demo-btn"
          >
            View Project
          </a>

        </div>

      </div>
    </div>

  </div>
</section>

{/* Experience */}
<section id="experience" className="section dark-section">
  <div className="experience-header">
    <p className="section-title">MY JOURNEY</p>

    <h2>Experience & Background</h2>

    <p className="experience-intro">
      My journey combines software development with practical business
      experience, helping me understand both technology and real-world
      business requirements.
    </p>
  </div>

  <div className="experience-timeline">

    <div className="experience-item">
      <div className="experience-marker">
        01
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <span className="experience-type">
            DEVELOPMENT
          </span>

          <span className="experience-date">
            Current
          </span>
        </div>

        <h3>Full Stack Developer</h3>

        <p>
          Developing full-stack applications using PHP, React.js,
          Node.js, MySQL and REST APIs. Working on frontend interfaces,
          backend services, database design and business functionality.
        </p>

        <div className="experience-tags">
          <span>PHP</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MySQL</span>
          <span>REST API</span>
        </div>
      </div>
    </div>


    <div className="experience-item">
      <div className="experience-marker">
        02
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <span className="experience-type">
            PROJECT DEVELOPMENT
          </span>

          <span className="experience-date">
            Current
          </span>
        </div>

        <h3>MySabala Platform</h3>

        <p>
          Designed and developed a business platform containing customer
          ordering, product management, inventory, stock management,
          order processing, payment integration and administration.
        </p>

        <div className="experience-tags">
          <span>PHP</span>
          <span>React</span>
          <span>MySQL</span>
          <span>Razorpay</span>
        </div>
      </div>
    </div>


    <div className="experience-item">
      <div className="experience-marker">
        03
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <span className="experience-type">
            BUSINESS
          </span>

          <span className="experience-date">
            Ongoing
          </span>
        </div>

        <h3>Business & Technology</h3>

        <p>
          Experience with practical business requirements and developing
          software solutions to improve product, stock and order
          management.
        </p>

        <div className="experience-tags">
          <span>Business</span>
          <span>Technology</span>
          <span>Management</span>
        </div>
      </div>
    </div>

  </div>
</section>

{/* Education */}
<section id="education" className="section education-section">

  <p className="section-title">EDUCATION</p>

  <h2>Academic Background</h2>

  <div className="education-grid">

    <div className="education-card">

      <div className="education-icon">
        MCA
      </div>

      <div>
        <span className="education-label">
          POSTGRADUATE
        </span>

        <h3>Master of Computer Applications</h3>

        <p>
          Master of Computer Applications (MCA), with a focus on
          computer applications, software development and technology.
        </p>
      </div>

    </div>


    <div className="education-highlight">

      <span>EDUCATION</span>

      <h3>
        Learning never stops.
      </h3>

      <p>
        Continuously learning modern technologies and applying them
        to real-world software projects.
      </p>

    </div>

  </div>

</section>

      {/* Contact */}
<section id="contact" className="section contact-section">

  <div className="contact-header">
    <p className="section-title">CONTACT ME</p>

    <h2>Let's Build Something Together</h2>

    <p>
      Have a project idea, business requirement or development
      opportunity? Send me a message and I'll get back to you.
    </p>
  </div>


  <div className="contact-grid">

    {/* Contact Information */}
    <div className="contact-info">

      <h3>Get In Touch</h3>

      <p className="contact-description">
        I'm available for software development projects, business
        applications, web development and API development.
      </p>


      {/* Email */}
      <a
        href="mailto:bsr.bhasker@gmail.com"
        className="contact-item"
      >
        <div className="contact-icon">
          @
        </div>

        <div>
          <span>Email</span>
          <strong>bsr.bhasker@gmail.com</strong>
        </div>
      </a>


      {/* Phone */}
      <a
        href="tel:+918555904276"
        className="contact-item"
      >
        <div className="contact-icon">
          ☎
        </div>

        <div>
          <span>Phone</span>
          <strong>+91 8555904276</strong>
        </div>
      </a>


      {/* WhatsApp */}
      <a
        href="https://wa.me/91855904276"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <div className="contact-icon">
          W
        </div>

        <div>
          <span>WhatsApp</span>
          <strong>91855904276</strong>
        </div>
      </a>


      {/* GitHub */}
      <a
        href="https://github.com/bsrbhasker-design"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <div className="contact-icon">
          G
        </div>

        <div>
          <span>GitHub</span>
          <strong>github.com/bsrbhasker-design</strong>
        </div>
      </a>


      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/bhaskar-chunchu-035845275/"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <div className="contact-icon">
          in
        </div>

        <div>
          <span>LinkedIn</span>
          <strong>linkedin.com/in/bhaskar-chunchu-035845275</strong>
        </div>
      </a>


      {/* Resume */}
      <a
        href="/Bhasker-Resume.pdf"
        download
        className="resume-button"
      >
        Download Resume ↓
      </a>

    </div>


    {/* Contact Form */}
    <div className="contact-form-container">

      <h3>Send Me a Message</h3>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.target;

          const name = form.name.value;
          const email = form.email.value;
          const subject = form.subject.value;
          const message = form.message.value;

          const mailto =
            `mailto:your-email@example.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\n${message}`
            )}`;

          window.location.href = mailto;
        }}
      >

        <div className="form-row">

          <div className="form-group">
            <label>Your Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>


          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

        </div>


        <div className="form-group">
          <label>Subject</label>

          <input
            type="text"
            name="subject"
            placeholder="What would you like to discuss?"
            required
          />
        </div>


        <div className="form-group">
          <label>Message</label>

          <textarea
            name="message"
            rows="7"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>


        <button
          type="submit"
          className="send-button"
        >
          Send Message →
        </button>

      </form>

    </div>

  </div>

</section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Bhasker. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;