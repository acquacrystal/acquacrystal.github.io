import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import Button from "../components/valueButton.js";
import "../styles/valueShowcase.css";

const ValueShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;

      const animateCounter = (endValue, key) => {
        let stepValue = endValue / steps;
        let currentValue = 0;

        const counter = setInterval(() => {
          currentValue += stepValue;
          if (currentValue >= endValue) {
            clearInterval(counter);
            setCounts((prev) => ({ ...prev, [key]: endValue }));
          } else {
            setCounts((prev) => ({ ...prev, [key]: Math.floor(currentValue) }));
          }
        }, interval);
      };

      animateCounter(500, "clients");
      animateCounter(1200, "projects");
      animateCounter(99, "satisfaction");
    }
  }, [isInView]);

  return (
    <section ref={ref} className="value-showcase-container">
      <motion.div
        className="value-content-wrapper"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="value-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          97% of Businesses Fail Online—Yours Won’t! 🚀
        </motion.h2>

        <motion.p
          className="value-description"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Every second your website isn’t converting, you’re losing money.
          Studies show that <strong>88% of visitors never return</strong> after
          a poor experience. We make sure that NEVER happens to you.
        </motion.p>

        <div className="value-grid">
          <motion.div
            className="value-card failure-card"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="value-card-header">
              <XCircle className="value-icon text-danger" />
              <h3>Why Most Websites Fail ❌</h3>
            </div>
            <ul>
              <li>94% of users judge a business by its website.</li>
              <li>47% of visitors expect sites to load in under 2 seconds.</li>
              <li>Weak messaging = lost sales & missed opportunities.</li>
              <li>Unoptimized websites rank lower on Google.</li>
            </ul>
          </motion.div>

          <motion.div
            className="value-card success-card"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="value-card-header">
              <CheckCircle className="value-icon text-success" />
              <h3>How We Make You Win 🏆</h3>
            </div>
            <ul>
              <li>Visually stunning, conversion-driven design.</li>
              <li>99.9% uptime with ultra-fast performance.</li>
              <li>High-impact copywriting that turns visitors into buyers.</li>
              <li>SEO-powered content to dominate search rankings.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Button className="cta-button">
            🔥 Build Your Dream Website Today!
          </Button>
        </motion.div>

        <div className="stats-container">
          <motion.div
            className="stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1 }}
          >
            <span className="stats-number text-primary">{counts.clients}</span>+
            Thrilled Clients
          </motion.div>
          <motion.div
            className="stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1.2 }}
          >
            <span className="stats-number text-accent">{counts.projects}</span>+
            Revenue-Boosting Projects
          </motion.div>
          <motion.div
            className="stat-item"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1.4 }}
          >
            <span className="stats-number text-danger">
              {counts.satisfaction}
            </span>
            % Client Satisfaction Rate
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValueShowcase;
