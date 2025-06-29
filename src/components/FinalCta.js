import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SweetPopup from "../components/sweetpopup.js"; // ✅ Imported SweetPopup
import "../styles/finalCta.css";

const FinalCta = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ SweetPopup state

  return (
    <motion.div
      className="final-cta-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="cta-title">
        Your Space Deserves to Shine. Let’s Upgrade It. 🚿
      </h2>
      <p className="cta-description">
        We don’t just install fittings — we create clean, beautiful spaces that
        feel like home.
      </p>
      <ul className="cta-benefits">
        <li>🔥 Modern bathrooms and kitchens that wow you every day.</li>
        <li>🔥 Smooth plumbing, perfect finishing, and luxury fittings.</li>
        <li>🔥 Trusted work that lasts — no leaks, no stress.</li>
      </ul>
      <p className="cta-action">Let’s make your space feel brand new.</p>

      <div className="cta-buttons">
        <Link
          className="cta-button primary"
          onClick={() => setIsPopupOpen(true)} // ✅ Opens SweetPopup
        >
          🚀 Start Your Upgrade Now
        </Link>

        <a
          href="https://wa.me/2349023703643"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button secondary"
        >
          💬 Chat with Our Team
        </a>
      </div>

      {/* ✅ SweetPopup rendered */}
      <SweetPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </motion.div>
  );
};

export default FinalCta;
