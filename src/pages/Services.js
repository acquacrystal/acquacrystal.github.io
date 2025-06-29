import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
  FaGlobe,
  FaShoppingCart,
  FaTachometerAlt,
  FaRedo,
  FaFunnelDollar,
} from "react-icons/fa";
import {Button} from "../components/ui/button.js";
import "../styles/services.css";

const services = [
  {
    icon: <FaGlobe className="service-icon" />,
    title: "Custom Website Design",
    description: "Stunning websites that turn visitors into loyal customers.",
    features: ["Eye-catching designs", "Built to convert", "Future-ready"],
    cta: "Get My Website",
  },
  {
    icon: <FaShoppingCart className="service-icon" />,
    title: "E-Commerce Development",
    description: "Online stores that make shopping easy and profitable.",
    features: [
      "Fast and user-friendly",
      "Optimized product pages",
      "Simple checkout",
    ],
    cta: "Start Selling",
  },
  {
    icon: <FaTachometerAlt className="service-icon" />,
    title: "SEO & Speed Optimization",
    description: "Speed up your site and rank higher on Google.",
    features: ["Super fast", "Rank higher", "More sales"],
    cta: "Boost My Site",
  },
  {
    icon: <FaRedo className="service-icon" />,
    title: "Website Redesign & Optimization",
    description: "Modern, high-converting websites that boost sales.",
    features: ["Sleek design", "Smooth experience", "More sales"],
    cta: "Upgrade My Site",
  },
  {
    icon: <FaFunnelDollar className="service-icon" />,
    title: "Landing Pages & Sales Funnels",
    description: "Landing pages that capture leads and turn them into sales.",
    features: ["High-converting", "Tested for results", "Lead optimized"],
    cta: "Build My Funnel",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <div className="container mx-auto text-center">
        <h2 className="services-title">
          Alameen Web Agency – Websites That Sell
        </h2>
        <p className="services-description">
          We build websites that grab attention and boost sales.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Button
              className="service-button"
              onClick={() => navigate("/contact")}
            >
              {service.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
