import { Button } from "../../components/ui/button.js";
import { Card, CardContent } from "../../components/ui/card.js";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom";
import websiteImage from "../../assets/images/project3.png";
import result from "../../assets/images/result3.png";
import "../../styles/project1.css";

export default function Project3() {
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
            Boosting Sales for InnovateX Software 🚀
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 tracking-wide"
            id="project1-subtitle"
          >
            +400% More Sign-Ups in No Time!
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
                id="project1-highlight-conversions"
              >
                🚀 <span>+400% More Sign-Ups!</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-ui"
              >
                🎯 <span>Built to Boost Conversions</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-cta"
              >
                ⚡ <span>Perfectly Placed CTAs</span>
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
            Ready to Grow Fast? Let’s Chat!
          </button>
        </motion.div>

        <p
          className="mt-6 text-sm text-gray-400 tracking-wide"
          id="project1-trust-badge"
        >
          Trusted by Leading SaaS Brands | ⭐⭐⭐⭐⭐
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
            Game-Changing Website for InnovateX Software 🚀
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-overview-subtitle"
          >
            We created a super easy-to-use site with buttons that make people
            sign up fast — boosting sign-ups by over 400%!
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
              About InnovateX
            </h2>
            <p
              className="text-gray-300 text-lg"
              id="project1-client-background-text"
            >
              InnovateX makes awesome tools that help businesses grow fast. They
              wanted a website that turns visitors into customers and keeps them
              coming back for more.
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
              We built a fast, smooth website that’s easy to navigate and helps
              turn visitors into real customers.
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
              Big Wins
            </h2>
            <ul
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-semibold text-gray-300"
              id="project1-key-objectives-list"
            >
              <li id="project1-key-objective-1">🚀 4x More Sign-ups!</li>
              <li id="project1-key-objective-2">
                🎯 Smarter & Smoother User Experience
              </li>
              <li id="project1-key-objective-3">
                📈 More Retention & Engagement
              </li>
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
            The Challenge – InnovateX Software's Growth 🚀
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-challenge-subtitle"
          >
            Figuring out what's stopping growth and how to get more people
            involved.
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
              What’s Been Holding Them Back
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-pain-points-list"
            >
              <li id="project1-pain-point-1">
                📉 Not enough people signing up
              </li>
              <li id="project1-pain-point-2">🤖 Hard to use and navigate</li>
              <li id="project1-pain-point-3">
                ⚠️ Buttons that don’t get clicks
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
              The Problem
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-impact-list"
            >
              <li id="project1-impact-1">📉 Lost sales</li>
              <li id="project1-impact-2">
                😟 Frustrated users & low interaction
              </li>
              <li id="project1-impact-3">
                🚪 High drop-offs & fewer return visits
              </li>
            </ul>
            <p className="text-gray-300 mt-4" id="project1-impact-summary">
              "InnovateX Software was missing out on customers because their
              website was hard to navigate and lacked clear calls to action."
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
            Our Winning Plan
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-strategy-subtitle"
          >
            We created a simple, user-friendly plan that helped InnovateX
            Software become a strong, high-performing platform.
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
              Boosting Sales & Beating Competitors
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-analysis-list"
            >
              <li id="project1-analysis-item1">
                Understanding what makes customers happy
              </li>
              <li id="project1-analysis-item2">
                Leaving competitors in the dust
              </li>
              <li id="project1-analysis-item3">
                Making sure everything runs smooth & fast
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
              Design & Development
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-design-development-list"
            >
              <li id="project1-design-item1">
                Clean, easy-to-use design that drives action
              </li>
              <li id="project1-design-item2">
                Simple and smooth sign-up process
              </li>
              <li id="project1-design-item3">
                Clear buttons that make it easy to get started
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
              Website Speed & Performance
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-performance-optimization-list"
            >
              <li id="project1-performance-item1">
                Faster loading by reducing unnecessary files
              </li>
              <li id="project1-performance-item2">
                Smart caching & better load handling
              </li>
              <li id="project1-performance-item3">
                Fully mobile-friendly & easy to use for everyone
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
              Boosting Conversions
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-conversion-optimization-list"
            >
              <li id="project1-conversion-item1">
                Clear and strong CTAs to grab attention
              </li>
              <li id="project1-conversion-item2">
                Trust builders: real reviews, success stories, and security
                seals
              </li>
              <li id="project1-conversion-item3">
                Ongoing tests to keep people hooked and engaged
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
            Big improvements in getting and keeping users for InnovateX
            Software.
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
              Results That Speak
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-sales-growth">Sign-Ups Up by 400%</li>
              <li id="project1-page-load">Engagement & Retention Doubled</li>
              <li id="project1-checkout-rate">
                Page Loads in Less Than 1 Second
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
              Results That Matter
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-user-feedback">More happy customers</li>
              <li id="project1-support-tickets">60% fewer customer issues</li>
              <li id="project1-brand-perception">Stronger brand trust</li>
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
            What Our Client Says
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-testimonial-subtitle"
          >
            Check out how we turned InnovateX Software’s website into a
            money-making machine!
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
              "After the redesign, our sign-ups shot up by over 400%! The site
              is fast, easy to use, and brings in real results. Best decision we
              made for our platform!"
            </p>
            <div
              className="text-gray-400 text-lg font-semibold"
              id="project1-testimonial-client"
            >
              <p id="project1-testimonial-name">Alex Carter</p>
              <p id="project1-testimonial-title">CEO, InnovateX Software</p>
            </div>
          </CardContent>
        </Card>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          id="project1-testimonial-button"
        >
          Get Your Dream Website Today →
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
            Ready to Boost Your SaaS Business? 🚀
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 project1-summary-description"
            id="project1-summary-description"
          >
            InnovateX Software updated their site and saw **+400% more
            sign-ups** with a fresh, high-conversion design.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6 project1-reassurance"
          id="project1-reassurance"
        >
          <CardContent className="project1-reassurance-content">
            <h2 className="text-2xl font-semibold mb-3 project1-reassurance-title">
              Let’s Make It Happen for You!
            </h2>
            <p className="text-lg text-gray-300 project1-reassurance-description">
              Your SaaS needs a website that works. We’ll create an easy-to-use,
              modern design that gets real results.
            </p>
          </CardContent>
        </Card>

        <button
          onClick={() => navigate("/contact")}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 project1-cta-button"
          id="project1-cta-button"
        >
          Let’s Boost Your Sales! Get in Touch Today!
        </button>
      </section>
    </>
  );
}
