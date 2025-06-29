import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import Button from "../components/valueButton.js";
import SweetPopup from "./sweetpopup.js"; // ✅ Import SweetPopup
import "../styles/valueshowcase2.css";

const ValueShowcase2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ Popup state

  useEffect(() => {
    if (isInView) {
      const animateCounter = (endValue, key) => {
        let currentValue = 0;
        const increment = endValue / 40;

        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= endValue) {
            clearInterval(counter);
            setCounts((prev) => ({ ...prev, [key]: endValue }));
          } else {
            setCounts((prev) => ({ ...prev, [key]: Math.floor(currentValue) }));
          }
        }, 50);
      };

      animateCounter(500, "clients");
      animateCounter(1200, "projects");
      animateCounter(99, "satisfaction");
    }
  }, [isInView]);

  return (
    <section ref={ref} className="v2-showcase-container">
      <motion.div
        className="v2-content-wrapper"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.h2
          className="v2-heading"
          initial={{ opacity: 0, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Beauty Fades. <br /> We Help You Build It to Last. 💧
        </motion.h2>

        <motion.p
          className="v2-description"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          A beautiful space brings peace — but only if it’s done right.
          <br />
          <span className="v2-text-highlight">
            9 out of 10 homeowners wish they upgraded sooner.
          </span>{" "}
          Don’t settle for average.
          <br />
          Let’s give your bathroom or kitchen the finish it truly deserves.
        </motion.p>

        <div className="v2-grid">
          <motion.div
            className="v2-card"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="v2-card-header">
              <XCircle className="v2-icon v2-text-danger" />
              <h3>Why Spaces Stay Ugly 🚨</h3>
            </div>
            <ul>
              <li>🚨 Poor fittings that leak or rust fast</li>
              <li>⚡ Bad layout that makes cleaning hard</li>
              <li>💰 Cheap products that wear out in months</li>
              <li>🔎 No expert touch — just trial and error</li>
            </ul>
          </motion.div>

          <motion.div
            className="v2-card"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="v2-card-header">
              <CheckCircle className="v2-icon v2-text-success" />
              <h3>What We Do Right 🏆</h3>
            </div>
            <ul>
              <li>🛁 Install clean, stylish sanitary ware</li>
              <li>🎯 Smart layout that’s easy to maintain</li>
              <li>💎 Quality products that last long and shine</li>
              <li>✅ Trusted experts who get it right the first time</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="v2-cta-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Button
            className="v2-cta-button"
            onClick={() => setIsPopupOpen(true)} // ✅ Trigger SweetPopup
          >
            🚿 Book Your Bathroom or Kitchen Upgrade
          </Button>
        </motion.div>

        <div className="v2-stats-container">
          <motion.div
            className="v2-stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="v2-stats-number v2-text-primary">
              {counts.clients}
            </span>
            + Homes Transformed
          </motion.div>

          <motion.div
            className="v2-stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="v2-stats-number v2-text-accent">
              {counts.projects}
            </span>
            + Bathrooms & Kitchens Done
          </motion.div>

          <motion.div
            className="v2-stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="v2-stats-number v2-text-danger">
              {counts.satisfaction}
            </span>
            % Clients Fully Satisfied
          </motion.div>
        </div>
      </motion.div>

      {/* ✅ Render SweetPopup */}
      <SweetPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default ValueShowcase2;
