import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaRegLightbulb,
  FaVideo,
  FaCut,
  FaShareAlt,
} from "react-icons/fa";
import SweetPopup from "./sweetpopup.js"; // ✅ Import SweetPopup
import "../styles/workprocess.css";

const steps = [
  {
    icon: <FaHandshake />,
    title: "Let’s Talk",
    description:
      "We listen to what you want — your space, your style, your budget.",
  },
  {
    icon: <FaRegLightbulb />,
    title: "Plan Your Upgrade",
    description:
      "We help you choose the right designs, products, and fittings that fit your home perfectly.",
  },
  {
    icon: <FaVideo />,
    title: "Get to Work",
    description:
      "Our experts install everything with care — clean work, sharp finishing, no shortcuts.",
  },
  {
    icon: <FaCut />,
    title: "Final Touches",
    description:
      "We double-check every detail to make sure your space is neat, smooth, and ready to shine.",
  },
  {
    icon: <FaShareAlt />,
    title: "Enjoy the Result",
    description:
      "You get a bathroom or kitchen that feels fresh, modern, and truly yours — built to last.",
  },
];

const WorkProcess = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ Popup state

  return (
    <div className="work-process-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        How We Transform Your Space
      </motion.h2>

      <div className="process-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="process-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon-container">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="tel:+2349023703643"
        className="cta-button"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        onClick={(e) => {
          if (!/Mobi|Android/i.test(navigator.userAgent)) {
            e.preventDefault();
            setIsPopupOpen(true); // ✅ Open SweetPopup on desktop
          }
        }}
      >
        Call Now to Upgrade Your Bathroom or Kitchen
      </motion.a>

      {/* ✅ Render the SweetPopup component */}
      <SweetPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default WorkProcess;
