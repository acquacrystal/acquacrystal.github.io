// Import necessary hooks & dependencies
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import testimonials from "../data/testimonials.js";
import SocialProof from "../components/SocialProof.js";
import ValueShowcase2 from "../components/ValueShowcase2.js";
import WorkProcess from "../components/WorkProcess.js";
import result from "../assets/images/result.png";
import FAQ from "../components/FAQ.js";
import FinalCta from "../components/FinalCta.js";
import "../styles/home.css";
import "../styles/sml-services.css";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import SweetPopup from "../components/sweetpopup.js"; // ✅ Import SweetPopup

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ Popup state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dynamic Hero Text Animation
  const words = ["Comfort", "Beauty", "Luxury", "Peace"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const trackProjectClick = (projectName) => {
    if (typeof fbq !== "undefined") {
      fbq("track", "ViewContent", { content_name: projectName });
    }
  };

  // Testimonial Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-play every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Form State & Submission
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   "https://leadform-backend-production.up.railway.app/submit", // ✅ UPDATED to public URL
      //   formData
      // );
      // // FIRE Facebook Pixel event
      // if (typeof fbq !== "undefined") {
      //   fbq("track", "Lead", {
      //     content_name: "Free Audit Form Submission",
      //   });
      // }
      setMessage(response.data.message);
      setFormData({ name: "", email: "" }); // Reset form
    } catch (error) {
      console.error(error); // ✅ Still good for debugging
      setMessage("Complete payment to activate the form.");
    }
  };

  const navigate = useNavigate();

  // Services Data
  const services = [
    {
      title: "Bathroom Setup",
      description: "Modern designs with clean, lasting fittings.",
      icon: "🚿",
    },
    {
      title: "Kitchen Upgrade",
      description: "Stylish sinks, taps, and smart plumbing solutions.",
      icon: "🍽️",
    },
    {
      title: "Sanitary Ware Supply",
      description: "Top-quality products delivered on time.",
      icon: "🚚",
    },
    {
      title: "Plumbing Installation",
      description: "Trusted hands for neat, leak-free work.",
      icon: "🛠️",
    },
    {
      title: "Repair & Maintenance",
      description: "Quick fixes that last — no stress.",
      icon: "🔧",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          We Make Bathrooms Feel Like{" "}
          <span className={`dynamic-word ${fade ? "fade-in" : "fade-out"}`}>
            {words[currentWordIndex]}
          </span>
        </h1>
        <p className="hero-text">
          Modern, clean, and beautiful spaces for your home.{" "}
          <strong>Trusted quality. Affordable luxury.</strong>
        </p>

        <Link
          to="#"
          className="hero-button"
          onClick={(e) => {
            e.preventDefault();
            setIsPopupOpen(true);
          }}
        >
          See Our Work
        </Link>
      </div>

      {/* Trust & Authority Section */}
      <div className="trust-section">
        <h2 className="trust-title">
          💧 Trusted by Builders, Loved by Homeowners
        </h2>

        {/* Brand Logos */}
        <div className="brand-logos">
          <img src={brand1} alt="Brand 1" />
          <img src={brand2} alt="Brand 2" />
          <img src={brand3} alt="Brand 3" />
        </div>

        {/* Quick Stats */}
        <p className="quick-stats">
          🏡 500+ Homes Styled | 🚿 300+ Bathrooms Upgraded | ✅ 100% Happy
          Clients
        </p>
      </div>

      {/* Why Clients Love Acqua Crystal */}
      <section className="why-clients-love-section">
        <div className="why-clients-love-container">
          <h2 className="why-clients-love-title" data-aos="fade-up">
            💡 Why Clients Love{" "}
            <span className="why-clients-love-highlight">Acqua Crystal</span>
          </h2>
          <p
            className="why-clients-love-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We don’t just fix spaces—we make bathrooms and kitchens feel brand
            new.
          </p>

          <div className="why-clients-love-grid">
            {[
              "500+ bathrooms and kitchens transformed",
              "Reliable delivery, every single time",
              "Modern style that fits every home",
              "We supply, install, and beautify with care",
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
        {/* Why Choose Us Button */}
        <div
          className="why-choose-us-container"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link
            to="#"
            className="why-choose-us-button"
            onClick={(e) => {
              e.preventDefault();
              setIsPopupOpen(true);
            }}
          >
            💧 Why Homeowners Choose Us
          </Link>
        </div>
      </section>

      {/* Testimonial Slider */}
      <div className="testimonial-slider">
        <button
          className="slider-btn slider-btn-left"
          onClick={prevTestimonial}
        >
          ‹
        </button>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "{testimonials[currentIndex].feedback}"
          </p>
          <h3 className="client-name">
            {testimonials[currentIndex].name} -{" "}
            {testimonials[currentIndex].role}
          </h3>
        </div>
        <button
          className="slider-btn slider-btn-right"
          onClick={nextTestimonial}
        >
          ›
        </button>
      </div>

      {/* Irresistible Offer Section */}
      <div className="offer-section">
        <h2 className="offer-title">
          🚿 Get a FREE Bathroom or Kitchen Style Check – Limited Slots!
        </h2>
        <p className="offer-text">
          We’ll review your space and show you how to make it cleaner, finer,
          and more modern — all in 24 hours.
        </p>

        {/* Offer Form */}
        <form className="offer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="offer-button">
            Get My Free Style Check
          </button>
        </form>

        {/* Form Submission Message */}
        {message && <p className="form-message">{message}</p>}
      </div>

      {/* SHOWCASE SECTION */}

      <div className="showcase-work">
        <h2 className="showcase-title">See the Spaces We've Transformed</h2>
        <p className="showcase-subtitle">
          Bathrooms and kitchens made to look modern, clean, and comfortable.
        </p>

        <div className="projects-container">
          <div className="project-card">
            <h3>Modern Bathroom Upgrade 🚿</h3>
            <p>
              <strong>Client:</strong> Tolu & Grace
            </p>
            <p>
              <strong>What We Did:</strong> Installed luxury sanitary ware and
              sleek fittings for a fresh, modern feel.
            </p>
            <p>
              <strong>Result:</strong> A clean, beautiful space they enjoy every
              day.
            </p>

            <img
              src={project1}
              alt="Bathroom Upgrade Preview"
              className="project-image"
            />
            <Link
              to="#"
              className="project-button"
              onClick={(e) => {
                e.preventDefault();
                setIsPopupOpen(true);
              }}
            >
              View Project
            </Link>
          </div>

          <div className="project-card">
            <h3>Kitchen Makeover 🔧</h3>
            <p>
              <strong>Client:</strong> Chioma A.
            </p>
            <p>
              <strong>What We Did:</strong> Upgraded her kitchen with new taps,
              sink, and cabinet fittings.
            </p>
            <p>
              <strong>Result:</strong> A cleaner, brighter kitchen she proudly
              shows off.
            </p>
            <img
              src={project2}
              alt="Kitchen Upgrade Preview"
              className="project-image"
            />
            <Link
              to="#"
              className="project-button"
              onClick={(e) => {
                e.preventDefault();
                setIsPopupOpen(true);
              }}
            >
              View Project
            </Link>
          </div>

          <div className="project-card">
            <h3>Luxury Bathroom Setup 💎</h3>
            <p>
              <strong>Client:</strong> Kemi & Josh
            </p>
            <p>
              <strong>What We Did:</strong> Designed and installed a full
              bathroom with top-grade sanitary ware and fittings.
            </p>
            <p>
              <strong>Result:</strong> A stylish space they enjoy every morning
              and night.
            </p>
            <img
              src={project3}
              alt="Bathroom Design Preview"
              className="project-image"
            />
            <Link
              to="#"
              className="project-button"
              onClick={(e) => {
                e.preventDefault();
                setIsPopupOpen(true);
              }}
            >
              View Project
            </Link>
          </div>
        </div>
      </div>

      {/* ========== SERVICES SECTION ========== */}
      <section className="trust-services-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="trust-services-title text-3xl font-bold text-center mb-8"
        >
          Our Services
        </motion.h2>
        <div className="trust-services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="trust-service-card shadow-lg rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="trust-service-icon text-4xl">
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>{" "}
              {/* Removed text-gray-600 */}
            </motion.div>
          ))}
        </div>
        <motion.button
          className="trust-services-cta-button py-3 px-6 text-lg mt-8 block mx-auto rounded-lg shadow-md"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            setIsPopupOpen(true);
          }}
        >
          Learn More →
        </motion.button>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <SocialProof />

      <div className="final-cta-section">
        <h2 className="cta-title">Let’s Transform Your Space Beautifully</h2>
        <p className="cta-subtext">
          Don’t wait to upgrade your bathroom or kitchen. Let’s make it clean,
          modern, and stylish.
        </p>

        <div className="cta-buttons">
          {/* 📞 Call Us Now */}
          <a
            className="cta-button primary"
            href="tel:+2349023703643"
            onClick={(e) => {
              if (window.innerWidth >= 768) {
                e.preventDefault();
                setIsPopupOpen(true); // 👉 show SweetPopup on desktop
              }
              // ✅ mobile users can proceed with the call
            }}
          >
            📞 Call Us Now
          </a>

          {/* ✨ Book Your Upgrade */}
          <Link
            to="#"
            className="cta-button secondary"
            onClick={(e) => {
              e.preventDefault();
              setIsPopupOpen(true);
            }}
          >
            ✨ Book Your Upgrade
          </Link>

          {/* 💬 Chat on WhatsApp */}
          <a
            href="https://wa.me/2349023703643"
            className="cta-button whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* VALUE SHOWCASE SECTION */}
      <ValueShowcase2 />

      {/* WORKPROCESS SECTION */}
      <WorkProcess />
      {/* FAQ SECTION */}
      <FAQ />
      {/* FINAL CTA SECTION */}
      <FinalCta />
      {/* 🔥 IMPORTANT: RENDER THE POPUP */}
      <SweetPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

export default Home;
