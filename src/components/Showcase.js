import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/showcase.css";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project1.png";
import project1 from "../assets/images/project3.png";

export default function Showcase() {
  const projects = [
    {
      title: "Fast and Powerful Online Store 🛍️",
      client: "TechGear Hub",
      features:
        "Made the store super fast, super simple, and checkout crazy easy.",
      result: "Boosted sales by +320% in 3 months!",
      image: project1,
      link: "/portfolio/project1",
    },
    {
      title: "Luxury Brand Website 🎨",
      client: "Elite Fashion House",
      features:
        "Built a rich, clean, and smooth website that shows true luxury.",
      result: "Brand looked more premium. Engagement jumped by 250%.",
      image: project2,
      link: "/portfolio/project2",
    },
    {
      title: "High-Converting SaaS Website 🚀",
      client: "InnovateX Software",
      features:
        "We created a sleek, easy-to-use site with smart buttons that keep visitors engaged.",
      result: "400% more sign-ups after launch!",
      image: project3,
      link: "/portfolio/project3",
    },
  ];

  return (
    <div className="sh-showcase-work">
      <motion.h2
        className="sh-showcase-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transforming Ideas into Reality
      </motion.h2>
      <motion.p
        className="sh-showcase-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        See how we help businesses get more customers with great websites.
      </motion.p>

      <div className="sh-projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="sh-project-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              {project.title}
            </motion.h3>
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>What We Did:</strong> {project.features}
            </p>
            <p>
              <strong>Result:</strong> {project.result}
            </p>
            <motion.img
              src={project.image}
              alt={`${project.title} Preview`}
              className="sh-project-image"
              whileHover={{ scale: 1.02 }}
            />
            <Link to={project.link} className="sh-project-button">
              View Project
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.span
        whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/contact" className="sh-cta-button">
          🔹 Get a Custom Website
        </Link>
      </motion.span>
    </div>
  );
}
