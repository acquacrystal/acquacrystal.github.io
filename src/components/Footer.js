import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

function Footer() {
  return (
    <footer className="py-5 bg-dark text-light">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-6 col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="" className="nav-link p-0 text-light">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="" className="nav-link p-0 text-light">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="" className="nav-link p-0 text-light">
                  Services
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="" className="nav-link p-0 text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-6 col-md-3 mb-3">
            <h5>Contact Info</h5>
            <p>
              Email:{" "}
              <a
                href="mailto:acquacrystalmultidynamicltd@gmail.com"
                className="text-light"
              >
                acquacrystalmultidynamicltd@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+2349023703643" className="text-light">
                +234 902 370 3643
              </a>
            </p>
            <div className="d-flex">
              <a href="#" className="text-light me-3">
                <i className="fab fa-tiktok fa-2x"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="col-md-5 offset-md-1 mb-3">
            <h5>Legal</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="" className="nav-link p-0 text-light">
                  Terms & Conditions
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="" className="nav-link p-0 text-light">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="m-0">
            © 2025 Acqua Crystal. Built with care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
