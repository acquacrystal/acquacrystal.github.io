import React from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {Card, CardContent} from "../components/ui/card.js";
import {Button} from "../components/ui/button.js";
import "../styles/trust.css";
import "../styles/sml-services.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const services = [
  {
    title: "Custom Website Design",
    description: "We build websites that look amazing and sell for you.",
    icon: "🌐",
  },
  {
    title: "E-Commerce Development",
    description: "We build online stores that make you more money.",
    icon: "🛒",
  },
  {
    title: "SEO & Speed Boost",
    description: "Faster site. Higher rank. More visitors. More sales.",
    icon: "⚡",
  },
  {
    title: "Website Redesign & Optimization",
    description: "We upgrade your site to get you more sales.",
    icon: "🎯",
  },
  {
    title: "Landing Pages & Funnels",
    description: "Our pages turn visitors into buyers — guaranteed.",
    icon: "🚀",
  },
];

export default function Trust() {
  const navigate = useNavigate();
  return (
    <>
      <section className="trust-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <Card className="trust-card shadow-lg rounded-lg overflow-hidden">
          <CardContent className="trust-card-content p-8">
            <motion.h2
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="trust-heading text-3xl font-bold text-center mb-4"
            >
              Why Choose Alameen Web Agency?
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="trust-subheading text-lg text-center mb-8"
            >
              We create websites that turn visitors into customers.
            </motion.p>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4, duration: 0.6}}
              className="trust-description text-base text-center mb-8"
            >
              Fast, effective, and built to grow your business.
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              className="trust-list-container max-w-2xl mx-auto"
            >
              <ul className="trust-list list-none space-y-4">
                <li className="trust-list-item flex items-start">
                  <span className="trust-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-list-text text-lg">
                    Your Website Sells for You
                  </span>
                </li>
                <li className="trust-list-item flex items-start">
                  <span className="trust-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-list-text text-lg">
                    Marketing & Web Design Combined
                  </span>
                </li>
                <li className="trust-list-item flex items-start">
                  <span className="trust-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-list-text text-lg">
                    Fast, Smooth, Google-Friendly
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.8, duration: 0.6}}
              className="trust-cta text-center mt-8"
            >
              <p className="trust-cta-heading text-xl font-semibold mb-4">
                Get a Website That Brings in Sales.
              </p>
              <p className="trust-cta-heading text-xl font-semibold mb-8">
                Let’s build it now.
              </p>
              <Button
                className="trust-cta-button cta-button py-3 px-6 text-lg md:text-xl"
                onClick={() => navigate("/contact")}
              >
                📩 Get Your Website Now!
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      <section className="trust-alpha-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <Card className="trust-alpha-card shadow-lg rounded-lg overflow-hidden">
          <CardContent className="trust-alpha-card-content p-8">
            <motion.h2
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="trust-alpha-heading text-3xl font-bold text-center mb-4"
            >
              Your Website Should Make You Money
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="trust-alpha-subheading text-lg text-center mb-8"
            >
              Most websites don’t do much. Ours work 24/7 to get you leads and
              sales.
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.4, duration: 0.6}}
              className="trust-alpha-list-container max-w-2xl mx-auto"
            >
              <ul className="trust-alpha-list list-none space-y-4">
                <li className="trust-alpha-list-item flex items-start">
                  <span className="trust-alpha-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-alpha-list-text text-lg">
                    <strong>Results-Driven</strong> – More clicks, calls, and
                    customers.
                  </span>
                </li>
                <li className="trust-alpha-list-item flex items-start">
                  <span className="trust-alpha-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-alpha-list-text text-lg">
                    <strong>Made for You</strong> – No generic designs. Just
                    what fits your business.
                  </span>
                </li>
                <li className="trust-alpha-list-item flex items-start">
                  <span className="trust-alpha-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-alpha-list-text text-lg">
                    <strong>Fast & SEO-Ready</strong> – Speed and SEO that
                    outshine competitors.
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              className="trust-alpha-cta text-center mt-8"
            >
              <p className="trust-alpha-cta-heading text-xl font-semibold mb-4">
                Your Website Should Sell for You.
              </p>
              <p className="trust-alpha-cta-heading text-xl font-semibold mb-8">
                Let’s build one that works.
              </p>
              <Button
                className="trust-alpha-cta-button py-3 px-6 text-lg md:text-xl"
                onClick={() => navigate("/contact")}
              >
                🚀 Get Started Now
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </section>
      <section className="trust-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <Card className="trust-card shadow-lg rounded-lg overflow-hidden">
          <CardContent className="trust-card-content p-8">
            <motion.h2
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="trust-heading text-3xl font-bold text-center mb-4"
            >
              Built for Trust. Designed for Success.
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="trust-subheading text-lg text-center mb-8"
            >
              More sales. More growth. Our websites make you money.
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.4, duration: 0.6}}
              className="trust-list-container max-w-2xl mx-auto"
            >
              <ul className="trust-list list-none space-y-4 flex flex-col items-center">
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    💎
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Real Results</strong> – Websites that convert.
                  </span>
                </li>
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    🚀
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Fast</strong> – Websites that load instantly.
                  </span>
                </li>
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    🔒
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Secure</strong> – 99.9% uptime.
                  </span>
                </li>
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    🎯
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>SEO</strong> – Rank higher, attract more customers.
                  </span>
                </li>
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    🤝
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Long-Term Growth</strong> – We help you scale.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              className="trust-cta text-center mt-8"
            >
              <p className="trust-cta-heading text-xl font-semibold mb-4">
                Stop settling for average.
              </p>
              <p className="trust-cta-heading text-xl font-semibold mb-8">
                Get a website that works.
              </p>
              <Button
                className="trust-cta-button cta-button py-3 px-6 text-lg md:text-xl"
                onClick={() => navigate("/contact")}
              >
                📩 Let’s get started today.
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="trust-services-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <motion.h2
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="trust-services-title text-3xl font-bold text-center mb-8"
        >
          Our Services
        </motion.h2>
        <div className="trust-services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="trust-service-card shadow-lg rounded-lg p-6 text-center"
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, delay: index * 0.2}}
              whileHover={{scale: 1.05}}
            >
              <span className="trust-service-icon text-4xl">
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>{" "}
              {/* Removed text-gray-600 */}
            </motion.div>
          ))}
        </div>
        <motion.button
          className="trust-services-cta-button py-3 px-6 text-lg mt-8 block mx-auto rounded-lg shadow-md"
          whileHover={{scale: 1.1}}
          onClick={() => navigate("/services")}
        >
          Learn More →
        </motion.button>
      </section>
      <section className="alameen-trust-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <Card className="alameen-trust-card shadow-lg rounded-lg overflow-hidden">
          <CardContent className="alameen-trust-card-content p-8">
            <motion.h2
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="alameen-trust-heading text-3xl font-bold text-center mb-4"
            >
              🚀 Your Success Starts Here
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="text-lg text-center mb-8"
            >
              We create websites that make you money.
            </motion.p>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4, duration: 0.6}}
              className="text-base text-center mb-8"
            >
              Don’t let your competition outshine you. Get ahead now!
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              className="max-w-2xl mx-auto"
            >
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <i className="mr-3 fa-solid fa-check-circle text-2xl"></i>
                  <span className="text-lg">Fast, professional websites</span>
                </li>
                <li className="flex items-center">
                  <i className="mr-3 fa-solid fa-check-circle text-2xl"></i>
                  <span className="text-lg">
                    Designed to bring in customers
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="mr-3 fa-solid fa-check-circle text-2xl"></i>
                  <span className="text-lg">Built for long-term profits</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.8, duration: 0.6}}
              className="text-center mt-8"
            >
              <p className="text-xl font-semibold mb-4">
                🔹 Ready to get started?
              </p>
              <Button
                className="py-3 px-6 text-lg md:text-xl"
                onClick={() => navigate("/contact")}
              >
                🔥 Start now with Alameen Web Agency
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
