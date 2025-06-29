import React, {useState, useEffect} from "react";
import sendEmail from "../utils/emailService.js";
import trust from "../assets/images/trust.webp";
import work from "../assets/images/work.jpg";
import result from "../assets/images/result.png";
import chat from "../assets/images/chats.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";
import {FaInstagram, FaYoutube, FaTiktok} from "react-icons/fa";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({duration: 1000, once: true});
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await sendEmail(formData);
    setStatus(response.message);

    if (response.success) {
      setFormData({name: "", email: "", message: ""});
    }
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-heading">
            📞 Let’s Build Your Dream Website Together
          </h2>
          <h3 className="contact-subheading">
            💎 Your Business Deserves a Website That Sells 💎
          </h3>
          <p className="contact-description">
            We don’t just build websites—we create luxury-grade, high-converting
            sales machines. If you’re tired of websites that don’t bring
            results, we’re here to change that.
          </p>
          <p className="contact-results">
            🚀 No generic templates. No guesswork. Just results.
          </p>
          <div className="contact-image-wrapper">
            <img
              className="contact-image"
              src={trust}
              alt="A confident, friendly team ready to help—think luxury, high-end agency style."
            />
          </div>
        </div>
      </section>
      {/* New Contact Information Section */}
      <section id="contact" className="customUnique-contact-section">
        <div className="customUnique-contact-container">
          <h2 className="customUnique-contact-heading">
            🔥 Ready to Take Your Brand to the Next Level? Let’s Talk!
          </h2>
          <p className="customUnique-contact-subheading">
            We respond fast—usually within a few hours!
          </p>

          <div className="customUnique-contact-direct-container space-y-4">
            <button
              onClick={() =>
                document
                  .getElementById("contact-form")
                  .scrollIntoView({behavior: "smooth"})
              }
              className="customUnique-contact-direct-title w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-lg transition hover:bg-gray-700"
            >
              💬 Speak with Us Directly
            </button>

            <button
              onClick={() => {
                if (typeof fbq !== "undefined") {
                  fbq("track", "Contact", {
                    content_name: "WhatsApp Chat",
                  });
                }
                window.open("https://wa.me/2347083652671", "_blank");
              }}
              className="customUnique-contact-direct-whatsapp w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg transition hover:bg-green-500"
            >
              📱 WhatsApp: Click Here to Chat
            </button>

            <button
              onClick={() => {
                if (typeof fbq !== "undefined") {
                  fbq("track", "Contact", {
                    content_name: "Email",
                  });
                }
                window.location.href = "mailto:alameenwebdesign01@gmail.com";
              }}
              className="customUnique-contact-direct-email w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition hover:bg-blue-500"
            >
              📧 Email: Click Here to Send
            </button>
          </div>

          <ul className="customUnique-contact-bullet-list">
            <li className="customUnique-contact-bullet-item-one">
              🔹 Prefer a quick chat? Message us on WhatsApp—we’re always
              online.
            </li>
            <li className="customUnique-contact-bullet-item-two">
              🔹 Want expert advice? Shoot us an email, and we’ll craft a custom
              plan for your business.
            </li>
          </ul>

          <div className="customUnique-contact-image-container">
            <img
              src={chat}
              alt="A friendly chat between a client and designer on a laptop—shows approachability."
              className="customUnique-contact-image"
            />
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section id="contact-form" className="customUnique-contact-form-section">
        <div className="customUnique-contact-form-container">
          <h1 className="customUnique-contact-form-heading">Contact Us</h1>
          <form onSubmit={handleSubmit} className="customUnique-contact-form">
            <div className="customUnique-form-group customUnique-form-group-name">
              <label className="customUnique-form-label customUnique-form-label-name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="customUnique-form-input customUnique-form-input-name"
              />
            </div>
            <div className="customUnique-form-group customUnique-form-group-email">
              <label className="customUnique-form-label customUnique-form-label-email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="customUnique-form-input customUnique-form-input-email"
              />
            </div>
            <div className="customUnique-form-group customUnique-form-group-message">
              <label className="customUnique-form-label customUnique-form-label-message">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="customUnique-form-input customUnique-form-input-message"
              />
            </div>
            <button
              type="submit"
              className="offer-button"
              onClick={() => {
                if (typeof fbq !== "undefined") {
                  fbq("track", "Contact", {content_name: "Direct Contact"});
                }
              }}
            >
              Claim Our Free Audit
            </button>

            {status && (
              <p className="customUnique-form-status-message">{status}</p>
            )}
          </form>
        </div>
      </section>

      {/* Why Clients Love Alameen Web Design */}
      <section className="why-clients-love-section">
        <div className="why-clients-love-container">
          <h2 className="why-clients-love-title" data-aos="fade-up">
            💡 Why Clients Love{" "}
            <span className="why-clients-love-highlight">
              Alameen Web Agency
            </span>
          </h2>
          <p
            className="why-clients-love-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            You’re not just getting a website—you’re getting a powerful business
            tool that works 24/7 to make you money.
          </p>

          <div className="why-clients-love-grid">
            {[
              "50+ high-converting websites designed",
              "Over $100M+ in revenue generated for clients",
              "Blazing-fast, SEO-optimized, and designed for sales",
              "Marketing-powered design that turns visitors into customers",
            ].map((text, index) => (
              <div
                key={index}
                className="why-clients-love-item"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <span className="why-clients-love-icon">✔</span>
                <p className="why-clients-love-text">{text}</p>
              </div>
            ))}
          </div>

          <div
            className="why-clients-love-image-container"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src={result}
              alt="Client Results"
              className="why-clients-love-image"
            />
          </div>
        </div>
      </section>
      {/* -- Contact Impact Section --> */}
      <section id="contact-impact" class="contact-impact-section">
        <div class="contact-impact-container">
          <div class="contact-impact-content">
            <h2 class="contact-impact-heading">
              🎯 We Treat Your Business Like It’s Our Own
            </h2>
            <p class="contact-impact-paragraph">
              Here’s the truth: We don’t work with just anyone.
            </p>
            <p class="contact-impact-paragraph">
              We only take on projects where we can make real, game-changing
              impact. When we work with you, we’re all in. Your success is our
              success.
            </p>
            <ul class="contact-impact-list">
              <li class="contact-impact-list-item">
                <span class="contact-impact-icon">✅</span> No empty promises.
              </li>
              <li class="contact-impact-list-item">
                <span class="contact-impact-icon">✅</span> No cheap,
                cookie-cutter designs.
              </li>
              <li class="contact-impact-list-item">
                <span class="contact-impact-icon">✅</span> Just stunning,
                high-performance websites that drive revenue.
              </li>
            </ul>
          </div>
          <div class="contact-impact-image-placeholder">
            {/* -- PLACE IMAGE HERE: A designer deep in work, crafting a stunning website—shows dedication.  */}
            <img
              class="contact-impact-image"
              src={work}
              alt="Designer deep in work, crafting a stunning website"
            />
          </div>
        </div>
      </section>
      {/* -- Follow Us Section --> */}
      <section className="social-section bg-white shadow-2xl rounded-2xl p-8 max-w-2xl mx-auto my-12">
        <header className="social-header mb-6 text-center">
          <h3 className="social-title text-3xl font-bold text-gray-800 mb-2">
            📌 Follow Us for Web Design & Marketing Secrets
          </h3>
          <p className="social-subtext text-gray-600 text-lg">
            Stay ahead of the competition with our expert tips & strategies.
          </p>
        </header>
        {/* Icons container */}
        <div className="social-icons-container text-center mt-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/alameenwebdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon social-instagram inline-block mx-4 text-pink-600 hover:text-pink-700 transition transform hover:scale-110"
          >
            <FaInstagram size={36} />
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@AlameenWebDesign"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon social-youtube inline-block mx-4 text-red-600 hover:text-red-700 transition transform hover:scale-110"
          >
            <FaYoutube size={36} />
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@alameen.web.design"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon social-tiktok inline-block mx-4 text-black hover:text-gray-700 transition transform hover:scale-110"
          >
            <FaTiktok size={36} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
