import { Button } from "../../components/ui/button.js";
import { Card, CardContent } from "../../components/ui/card.js";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom";
import websiteImage from "../../assets/images/project2.png";
import result from "../../assets/images/result2.png";
import "../../styles/project1.css";

export default function Project2() {
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
            Elite Fashion House Website
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 tracking-wide"
            id="project1-subtitle"
          >
            +250% More Engagement with a Gorgeous Look
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
            alt="Luxury Brand Website Preview"
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
                id="project1-highlight-visuals"
              >
                🎨 <span>Stunning Design</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-animation"
              >
                ✨ <span>Smooth Animations</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-engagement"
              >
                🚀 <span>Boosted Engagement by 250%</span>
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
            className="px-8 py-4 text-lg font-bold !text-white bg-gradient-to-r from-purple-500 to-pink-700 hover:from-purple-600 hover:to-pink-800 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            id="project1-cta-button"
          >
            Ready to Stand Out? Let’s Chat!
          </button>
        </motion.div>

        <p
          className="mt-6 text-sm text-gray-400 tracking-wide"
          id="project1-trust-badge"
        >
          Trusted by Luxury Brands | ⭐⭐⭐⭐⭐
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
            Elite Fashion House - Luxury Website
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-overview-subtitle"
          >
            Bold looks. Smooth moves. Pure luxury.
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
              Elite Fashion House makes high-end clothes that look and feel
              amazing. They needed a website that shows off their style — clean,
              classy, and top-quality.
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
              We created a beautiful website that looks rich, feels smooth, and
              is super easy for anyone to use.
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
              Key Objectives
            </h2>
            <ul
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-semibold text-gray-300"
              id="project1-key-objectives-list"
            >
              <li id="project1-key-objective-1">
                🎨 Make the site look rich and stylish
              </li>
              <li id="project1-key-objective-2">
                💎 Add smooth and classy animations
              </li>
              <li id="project1-key-objective-3">
                📈 Boost engagement by 250%+
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
            className="px-8 py-4 text-lg font-bold !text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            id="project1-cta-button"
          >
            Make Your Brand Stand Out Today!
          </button>
        </motion.div>
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
            The Challenge
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-challenge-subtitle"
          >
            Create a website that looks and feels as high-end as Elite Fashion
            House.
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
              Problems We Solved
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-pain-points-list"
            >
              <li id="project1-pain-point-1">
                💎 The site didn’t look or feel super high-end.
              </li>
              <li id="project1-pain-point-2">
                🚀 Pages were slow and didn’t load fast.
              </li>
              <li id="project1-pain-point-3">
                ⚠️ Visitors didn’t stay long or connect with the brand.
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
              Why It Was a Problem
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-impact-list"
            >
              <li id="project1-impact-1">
                📉 People didn’t see the brand as high-end
              </li>
              <li id="project1-impact-2">😞 Customers didn’t stick around</li>
              <li id="project1-impact-3">💸 Lost chances to make more sales</li>
            </ul>
            <p className="text-gray-300 mt-4" id="project1-impact-summary">
              Elite Fashion House needed a website that looked rich and worked
              perfectly.
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
            What We Did
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-strategy-subtitle"
          >
            We built a website that looks amazing and leaves a lasting
            impression.
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
                Trendy designs that customers can’t resist
              </li>
              <li id="project1-analysis-item2">
                Simple, clear info on what your customers really want
              </li>
              <li id="project1-analysis-item3">
                Quick, easy-to-use checks that make browsing a breeze
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
              Gorgeous Design & Seamless Experience
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-design-development-list"
            >
              <li id="project1-design-item1">
                Stunning visuals that grab attention and flow smoothly
              </li>
              <li id="project1-design-item2">
                Simple, classy design that’s easy to use
              </li>
              <li id="project1-design-item3">
                Perfect on any device, mobile or desktop
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
              Speed & Performance Boost
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-performance-optimization-list"
            >
              <li id="project1-performance-item1">
                Blazing-fast image load times
              </li>
              <li id="project1-performance-item2">
                Smart caching for super speed
              </li>
              <li id="project1-performance-item3">
                Clean, fast code that runs smoothly
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
              Getting More Attention & Sales
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-conversion-optimization-list"
            >
              <li id="project1-conversion-item1">
                Showcasing the brand with eye-catching visuals
              </li>
              <li id="project1-conversion-item2">
                Simple checkout that builds trust
              </li>
              <li id="project1-conversion-item3">
                Clear actions that get people to take the next step
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
            The Big Change
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-results-subtitle"
          >
            How we helped Elite Fashion House shine online.
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
              Performance Highlights
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-sales-growth">250% more brand engagement</li>
              <li id="project1-page-load">Smooth, eye-catching animations</li>
              <li id="project1-checkout-rate">
                A stylish look that grabs attention
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
              Visual Impact
            </h2>
            <img
              src={result}
              alt="Elite Fashion House Website Preview"
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
              What We Achieved
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-user-feedback">
                Clients are loving the high-end look!
              </li>
              <li id="project1-support-tickets">
                The brand feels trusted and top-notch.
              </li>
              <li id="project1-brand-perception">
                More customers are coming back for more!
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
            What Our Client Says
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-testimonial-subtitle"
          >
            Check out how we helped Elite Fashion House shine online.
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
              "Our new website feels amazing! The smooth design, cool
              animations, and easy navigation have helped our brand shine and
              get more attention."
            </p>

            <div
              className="text-gray-400 text-lg font-semibold"
              id="project1-testimonial-client"
            >
              <p id="project1-testimonial-name">Sophia Laurent</p>
              <p id="project1-testimonial-title">
                Creative Director, Elite Fashion House
              </p>
            </div>
          </CardContent>
        </Card>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          id="project1-testimonial-button"
        >
          Boost Your Brand Today →
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
            Take Your Brand to the Next Level
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 project1-summary-description"
            id="project1-summary-description"
          >
            Elite Fashion House revamped their website and saw a huge 250% boost
            in engagement.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6 project1-reassurance"
          id="project1-reassurance"
        >
          <CardContent className="project1-reassurance-content">
            <h2 className="text-2xl font-semibold mb-3 project1-reassurance-title">
              Your Brand Deserves the Best
            </h2>
            <p className="text-lg text-gray-300 project1-reassurance-description">
              We've helped top brands grow big. Now, imagine what we can do for
              you!
            </p>
          </CardContent>
        </Card>

        <button
          onClick={() => navigate("/contact")}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 project1-cta-button"
          id="project1-cta-button"
        >
          Create Your Dream Website Now →
        </button>
      </section>
    </>
  );
}
