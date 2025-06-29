import { HashRouter as Router, Routes, Route } from "react-router-dom";

import MyNavbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Services from "./pages/Services.js";
import Contact from "./pages/Contact.js";
import Project1 from "./pages/portfolio/Project1.js";
import Project2 from "./pages/portfolio/Project2.js";
import Project3 from "./pages/portfolio/Project3.js";
import PrivacyPolicy from "./pages/legal/Privacy-Policy.js";
import Terms_and_conditons from "./pages/legal/Terms & Conditions.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import AOS from "aos";

import React, { useEffect } from "react";

AOS.init();

function App() {
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.documentElement.style.width = "100%";
    document.body.style.overflowX = "hidden";
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflowX = "";
      document.documentElement.style.width = "";
      document.body.style.overflowX = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <MyNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/project1" element={<Project1 />} />
            <Route path="/portfolio/project2" element={<Project2 />} />
            <Route path="/portfolio/project3" element={<Project3 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<Terms_and_conditons />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
