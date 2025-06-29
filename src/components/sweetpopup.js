import React from "react";
import "../styles/SweetPopup.css";

const SweetPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePaymentClick = () => {
    // ✅ Compose the GOD DAMN GOD message
    const message = encodeURIComponent(
      `Hi, I just saw the website preview — I’m ready to unlock the full version. What’s next?`
    );

    const whatsappUrl = `https://wa.me/2347083652671?text=${message}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="sweet-popup-overlay">
      <div className="sweet-popup-content">
        <button className="sweet-popup-close" onClick={onClose}>
          ✖
        </button>
        <h2>🔒 Preview Mode – Full Website Locked</h2>
        <p>
          You’re only seeing a small part of this website. Pay now to get full
          access and enjoy everything.
        </p>
        <button className="sweet-popup-pay-button" onClick={handlePaymentClick}>
          💳 Unlock Full Website
        </button>
      </div>
    </div>
  );
};

export default SweetPopup;
