import "../Assets/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}