import { Button } from "../../components/ui/button.js";
import { Card, CardContent } from "../../components/ui/card.js";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import websiteImage from "../../assets/images/project1.png";
import result from "../../assets/images/result.png";
import "../../styles/project1.css";
import { useNavigate } from "react-router-dom";

export default function Project1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  // Form State & Submission
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://leadform-backend-production.up.railway.app/submit", // ✅ UPDATED to public URL
        formData
      );
      setMessage(response.data.message);
      setFormData({ name: "", email: "" }); // Reset form
    } catch (error) {
      console.error(error); // ✅ Still good for debugging
      setMessage("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <section
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6 flex flex-col items-center text-center shadow-xl rounded-3xl"
        id="project1-hero-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
          id="project1-header-container"
        >
          <h1
            className="text-5xl font-extrabold text-white drop-shadow-xl"
            id="project1-title"
          >
            Super Fast Online Store for TechGear Hub
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 tracking-wide"
            id="project1-subtitle"
          >
            Sales Jumped +320% in Just 3 Months!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden"
          id="project1-image-container"
        >
          <img
            src={websiteImage}
            alt="Project Preview"
            width={800}
            height={450}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            id="project1-image"
          />
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-2xl rounded-xl max-w-3xl border border-gray-700"
          id="project1-card"
        >
          <CardContent className="p-8" id="project1-card-content">
            <ul
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-semibold text-gray-300"
              id="project1-key-highlights"
            >
              <li
                className="flex items-center gap-2"
                id="project1-highlight-sales"
              >
                🚀 <span>Sales Up 320%</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-ui"
              >
                ⚡ <span>Super Fast, Smooth Website</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-checkout"
              >
                🛒 <span>Easy, Quick Checkout</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
          id="project1-cta-container"
        >
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 text-lg font-bold !text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            id="project1-cta-button"
          >
            Want Bigger Sales? Let’s Chat!
          </button>
        </motion.div>

        <p
          className="mt-6 text-sm text-gray-400 tracking-wide"
          id="project1-trust-badge"
        >
          Trusted by 100+ Brands | ⭐⭐⭐⭐⭐
        </p>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-overview-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
          id="project1-overview-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-overview-title">
            TechGear Hub - Boosting Sales & User Experience
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-overview-subtitle"
          >
            Making the site faster, boosting sales, and giving customers an
            awesome experience.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-client-background"
        >
          <CardContent id="project1-client-background-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-client-background-title"
            >
              About the Client
            </h2>
            <p
              className="text-gray-300 text-lg"
              id="project1-client-background-text"
            >
              TechGear Hub is the go-to place for awesome tech gadgets. Before
              we helped them, their website was slow, checkout was tricky, and
              many customers gave up before buying.
            </p>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-project-scope"
        >
          <CardContent id="project1-project-scope-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-project-scope-title"
            >
              What We Did
            </h2>
            <p
              className="text-gray-300 text-lg"
              id="project1-project-scope-text"
            >
              <p className="project-description">
                TechGear Hub wanted to make shopping online super fast and easy.
                We made it happen with a smooth, high-converting website that
                gets results.
              </p>
            </p>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-key-objectives"
        >
          <CardContent id="project1-key-objectives-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-key-objectives-title"
            >
              Our Goals
            </h2>
            <ul
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-semibold text-gray-300"
              id="project1-key-objectives-list"
            >
              <li id="project1-key-objective-1">🚀 Boost Online Sales</li>
              <li id="project1-key-objective-2">⚡ Make Browsing Super Easy</li>
              <li id="project1-key-objective-3">🔒 Fast & Safe Checkout</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-challenge-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
          id="project1-challenge-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-challenge-title">
            The Challenge - TechGear Hub's Struggles
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-challenge-subtitle"
          >
            We dug deep to find what was holding them back and how to fix it.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-pain-points"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-pain-points-title"
            >
              What's Holding Them Back
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-pain-points-list"
            >
              <li id="project1-pain-point-1">🐢 Slow website load times</li>
              <li id="project1-pain-point-2">
                🛒 Customers leaving their cart behind
              </li>
              <li id="project1-pain-point-3">
                ⚠️ Lack of trust and brand appeal
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-impact"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-impact-title"
            >
              What Went Wrong
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-impact-list"
            >
              <li id="project1-impact-1">💸 Missing out on sales</li>
              <li id="project1-impact-2">😞 Unhappy customers</li>
              <li id="project1-impact-3">
                📉 Falling behind in a tough market
              </li>
            </ul>
            <p className="text-gray-300 mt-4" id="project1-impact-summary">
              "TechGear Hub was losing sales every day because their website was
              too slow."
            </p>
          </CardContent>
        </Card>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-strategy-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
          id="project1-strategy-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-strategy-title">
            Our Game Plan
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-strategy-subtitle"
          >
            We made TechGear Hub’s website super fast, super easy to use, and
            fun to shop — so more visitors turn into real customers.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-analysis"
        >
          <CardContent id="project1-analysis-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-analysis-title"
            >
              Boosting Sales & Beating the Competition
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-analysis-list"
            >
              <li id="project1-analysis-item1">
                Knowing exactly what customers want
              </li>
              <li id="project1-analysis-item2">
                Staying ahead of the competition
              </li>
              <li id="project1-analysis-item3">
                Keeping everything running perfectly
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-design-development"
        >
          <CardContent id="project1-design-development-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-design-development-title"
            >
              Beautiful Design & Simple Experience
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-design-development-list"
            >
              <li id="project1-design-item1">Looks perfect on any device</li>
              <li id="project1-design-item2">Super easy to use</li>
              <li id="project1-design-item3">
                Fast checkout with trusted payment options
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-performance-optimization"
        >
          <CardContent id="project1-performance-optimization-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-performance-optimization-title"
            >
              Faster & Smoother
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-performance-optimization-list"
            >
              <li id="project1-performance-item1">
                Faster load times with optimized images and smaller scripts
              </li>
              <li id="project1-performance-item2">
                Speedy access with smart caching
              </li>
              <li id="project1-performance-item3">
                Quicker server responses for a seamless experience
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-conversion-optimization"
        >
          <CardContent id="project1-conversion-optimization-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-conversion-optimization-title"
            >
              Boosting Sales & Trust
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-conversion-optimization-list"
            >
              <li id="project1-conversion-item1">Big, easy buttons to buy</li>
              <li id="project1-conversion-item2">
                Trust signals like reviews and real stories
              </li>
              <li id="project1-conversion-item3">
                Making checkout super fast and simple
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-results-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
          id="project1-results-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-results-title">
            The Results
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-results-subtitle"
          >
            Check out the awesome results we delivered for TechGear Hub!
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-key-metrics"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-metrics-title"
            >
              Big Wins
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-sales-growth">
                Sales up by 320% in just 3 months!
              </li>
              <li id="project1-page-load">
                Page load time went from 6 sec to 1.2 sec!
              </li>
              <li id="project1-checkout-rate">
                45% more people are finishing their checkout!
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-visual-data"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-visual-title"
            >
              Visual Data Representation
            </h2>
            <img
              src={result}
              alt="Performance Metrics"
              className="w-full rounded-lg shadow-md"
              id="project1-results-image"
            />
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-beyond-numbers"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-beyond-title"
            >
              The Results
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-user-feedback">
                Happy customers, glowing reviews
              </li>
              <li id="project1-support-tickets">Fewer problems for support</li>
              <li id="project1-brand-perception">
                A stronger, more trusted brand
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-testimonial-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
          id="project1-testimonial-header"
        >
          <h1
            className="text-4xl font-extrabold"
            id="project1-testimonial-title"
          >
            What Our Clients Say
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-testimonial-subtitle"
          >
            See why our clients love working with us!
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-testimonial-card"
        >
          <CardContent>
            <p
              className="text-xl italic text-gray-300 mb-4"
              id="project1-testimonial-quote"
            >
              "Our sales went through the roof after the new website! It's
              faster, easier to use, and our customers love it!"
            </p>
            <div
              className="text-gray-400 text-lg font-semibold"
              id="project1-testimonial-client"
            >
              <p id="project1-testimonial-name">Nathan Cole</p>
              <p id="project1-testimonial-title">CEO of TechGear Hub</p>
            </div>
          </CardContent>
        </Card>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          id="project1-testimonial-button"
        >
          Get Your Dream Website Today! →
        </button>
      </section>

      {/* Irresistible Offer Section */}
      <div className="offer-section">
        <h2 className="offer-title">
          🚀 Claim Your FREE Website Checkup (Worth $200) – Only a Few Spots
          Left!
        </h2>
        <p className="offer-text">
          Discover what's holding your website back from turning visitors into
          paying customers in just 24 hours!
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
            Claim Our Free Audit
          </button>
        </form>

        {/* Form Submission Message */}
        {message && <p className="form-message">{message}</p>}
      </div>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center project1-next-steps"
        id="project1-next-steps"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl project1-summary"
          id="project1-summary"
        >
          <h1
            className="text-4xl font-extrabold project1-summary-title"
            id="project1-summary-title"
          >
            Boost Your Sales—Next Up Is You!
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 project1-summary-description"
            id="project1-summary-description"
          >
            TechGear Hub went from slow load times to seeing a massive 320% jump
            in sales.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6 project1-reassurance"
          id="project1-reassurance"
        >
          <CardContent className="project1-reassurance-content">
            <h2 className="text-2xl font-semibold mb-3 project1-reassurance-title">
              Let's Get Started!
            </h2>
            <p className="text-lg text-gray-300 project1-reassurance-description">
              Stop letting low sales hold you back. Let’s team up and boost your
              online store’s success.
            </p>
          </CardContent>
        </Card>

        <button
          onClick={() => navigate("/contact")}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 project1-cta-button"
          id="project1-cta-button"
        >
          Want More Sales? Let’s Talk!
        </button>
      </section>
    </>
  );
}
