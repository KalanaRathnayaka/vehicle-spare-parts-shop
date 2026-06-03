import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us for quality vehicle spare parts and support.</p>
      </section>

      <section className="contact-section">
        <div className="contact-details">
          <h2>Visit or Contact Us</h2>
          <p>Our team is ready to help you find the right spare part.</p>

          <div className="info-box">📞 +94 77 123 4567</div>
          <div className="info-box">✉ info@autopartshub.com</div>
          <div className="info-box">📍 Colombo, Sri Lanka</div>

          <div className="hours">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 8.00 AM - 6.00 PM</p>
            <p>Saturday: 9.00 AM - 4.00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="6" placeholder="Your Message" required></textarea>

          <button type="submit">Send Inquiry</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Contact;