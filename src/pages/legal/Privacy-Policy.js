import {useEffect} from "react";
import "../../styles/PrivacyPolicy.css"; // Import a CSS file for styling

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-date">
          <strong className="privacy-date-effective">Effective Date:</strong>{" "}
          March 2025 &nbsp;|&nbsp;
          <strong className="privacy-date-updated">Last Updated:</strong> March
          2025
        </p>

        {/* Section 1: Introduction */}
        <section className="privacy-section privacy-section-1">
          <h2 className="privacy-section-1-heading">1. Introduction</h2>
          <p className="privacy-section-1-paragraph-1">
            Welcome to{" "}
            <strong className="privacy-section-1-strong">
              Alameen Web Agency
            </strong>
            . We are committed to protecting your personal data and respecting
            your privacy. This Privacy Policy explains how we collect, use, and
            protect your information when you visit our website{" "}
            <a
              href="https://alameenwebdesign.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="privacy-link"
            >
              https://alameenwebdesign.github.io/
            </a>
            .
          </p>
          <p className="privacy-section-1-paragraph-2">
            By using our Website, you agree to the terms of this Privacy Policy.
            If you do not agree, please do not use our Website.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="privacy-section privacy-section-2">
          <h2 className="privacy-section-2-heading">
            2. Information We Collect
          </h2>
          <h3 className="privacy-section-2-subheading-1">
            2.1 Personal Information Provided by You
          </h3>
          <ul className="privacy-section-2-list-1">
            <li className="privacy-section-2-list-1-item-1">Name</li>
            <li className="privacy-section-2-list-1-item-2">Email address</li>
            <li className="privacy-section-2-list-1-item-3">
              Any information you submit via forms, emails, or other direct
              communications
            </li>
          </ul>
          <h3 className="privacy-section-2-subheading-2">
            2.2 Automatically Collected Information
          </h3>
          <ul className="privacy-section-2-list-2">
            <li className="privacy-section-2-list-2-item-1">IP address</li>
            <li className="privacy-section-2-list-2-item-2">
              Browser type and version
            </li>
            <li className="privacy-section-2-list-2-item-3">
              Device information
            </li>
            <li className="privacy-section-2-list-2-item-4">
              Pages visited and time spent on our Website
            </li>
            <li className="privacy-section-2-list-2-item-5">
              Cookies and tracking technologies
            </li>
          </ul>
        </section>

        {/* Section 3: How We Use Your Information */}
        <section className="privacy-section privacy-section-3">
          <h2 className="privacy-section-3-heading">
            3. How We Use Your Information
          </h2>
          <ul className="privacy-section-3-list">
            <li className="privacy-section-3-list-item-1">
              To provide and manage our web design services
            </li>
            <li className="privacy-section-3-list-item-2">
              To respond to inquiries and customer support requests
            </li>
            <li className="privacy-section-3-list-item-3">
              To personalize and improve user experience
            </li>
            <li className="privacy-section-3-list-item-4">
              To send marketing communications (only with your consent)
            </li>
            <li className="privacy-section-3-list-item-5">
              To comply with legal and regulatory requirements
            </li>
          </ul>
        </section>

        {/* Section 4: Legal Basis for Processing */}
        <section className="privacy-section privacy-section-4">
          <h2 className="privacy-section-4-heading">
            4. Legal Basis for Processing
          </h2>
          <ul className="privacy-section-4-list">
            <li className="privacy-section-4-list-item-1">
              <strong className="privacy-section-4-strong-1">
                Contractual necessity:
              </strong>{" "}
              To provide services you request
            </li>
            <li className="privacy-section-4-list-item-2">
              <strong className="privacy-section-4-strong-2">
                Legitimate interest:
              </strong>{" "}
              To improve our services and Website
            </li>
            <li className="privacy-section-4-list-item-3">
              <strong className="privacy-section-4-strong-3">Consent:</strong>{" "}
              For marketing communications and cookies
            </li>
            <li className="privacy-section-4-list-item-4">
              <strong className="privacy-section-4-strong-4">
                Legal obligation:
              </strong>{" "}
              To comply with laws and regulations
            </li>
          </ul>
        </section>

        {/* Section 5: How We Share Your Information */}
        <section className="privacy-section privacy-section-5">
          <h2 className="privacy-section-5-heading">
            5. How We Share Your Information
          </h2>
          <p className="privacy-section-5-paragraph">
            We do not sell your personal data. However, we may share your
            information with:
          </p>
          <ul className="privacy-section-5-list">
            <li className="privacy-section-5-list-item-1">
              <strong className="privacy-section-5-strong-1">
                Service providers:
              </strong>{" "}
              Payment processors, hosting providers
            </li>
            <li className="privacy-section-5-list-item-2">
              <strong className="privacy-section-5-strong-2">
                Legal authorities:
              </strong>{" "}
              If required by law
            </li>
            <li className="privacy-section-5-list-item-3">
              <strong className="privacy-section-5-strong-3">
                Business transfers:
              </strong>{" "}
              In case of mergers, acquisitions, or asset sales
            </li>
          </ul>
        </section>

        {/* Section 6: International Data Transfers */}
        <section className="privacy-section privacy-section-6">
          <h2 className="privacy-section-6-heading">
            6. International Data Transfers
          </h2>
          <p className="privacy-section-6-paragraph">
            As we are based in{" "}
            <strong className="privacy-section-6-strong">
              Badagry, Nigeria
            </strong>
            , your information may be transferred to and processed in other
            countries, including those outside the European Economic Area (EEA).
            We ensure appropriate safeguards for such transfers.
          </p>
        </section>

        {/* Section 7: Data Retention */}
        <section className="privacy-section privacy-section-7">
          <h2 className="privacy-section-7-heading">7. Data Retention</h2>
          <p className="privacy-section-7-paragraph">
            We retain your data only as long as necessary for the purposes
            outlined in this Privacy Policy or as required by law.
          </p>
        </section>

        {/* Section 8: Your Rights Under GDPR */}
        <section className="privacy-section privacy-section-8">
          <h2 className="privacy-section-8-heading">
            8. Your Rights Under GDPR
          </h2>
          <ul className="privacy-section-8-list">
            <li className="privacy-section-8-list-item-1">
              <strong className="privacy-section-8-strong-1">
                Right to access:
              </strong>{" "}
              Request a copy of your data.
            </li>
            <li className="privacy-section-8-list-item-2">
              <strong className="privacy-section-8-strong-2">
                Right to rectification:
              </strong>{" "}
              Correct inaccurate data.
            </li>
            <li className="privacy-section-8-list-item-3">
              <strong className="privacy-section-8-strong-3">
                Right to erasure:
              </strong>{" "}
              Request deletion of your data.
            </li>
            <li className="privacy-section-8-list-item-4">
              <strong className="privacy-section-8-strong-4">
                Right to restrict processing:
              </strong>{" "}
              Limit how we use your data.
            </li>
            <li className="privacy-section-8-list-item-5">
              <strong className="privacy-section-8-strong-5">
                Right to data portability:
              </strong>{" "}
              Receive your data in a structured format.
            </li>
            <li className="privacy-section-8-list-item-6">
              <strong className="privacy-section-8-strong-6">
                Right to object:
              </strong>{" "}
              Object to processing based on legitimate interest.
            </li>
            <li className="privacy-section-8-list-item-7">
              <strong className="privacy-section-8-strong-7">
                Right to withdraw consent:
              </strong>{" "}
              Opt out of marketing at any time.
            </li>
          </ul>
          <p className="privacy-section-8-paragraph">
            To exercise your rights, contact us at{" "}
            <a
              href="mailto:alameenwebdesign01@gmail.com"
              className="privacy-section-8-link"
            >
              alameenwebdesign01@gmail.com
            </a>
            .
          </p>
        </section>

        {/* Section 9: Cookies and Tracking Technologies */}
        <section className="privacy-section privacy-section-9">
          <h2 className="privacy-section-9-heading">
            9. Cookies and Tracking Technologies
          </h2>
          <p className="privacy-section-9-paragraph">
            We use cookies to improve your browsing experience. By using our
            Website, you consent to the use of cookies. You can manage cookie
            preferences via your browser settings.
          </p>
        </section>

        {/* Section 10: Security Measures */}
        <section className="privacy-section privacy-section-10">
          <h2 className="privacy-section-10-heading">10. Security Measures</h2>
          <p className="privacy-section-10-paragraph">
            We implement technical and organizational security measures to
            protect your data. However, no system is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        {/* Section 11: Third-Party Links */}
        <section className="privacy-section privacy-section-11">
          <h2 className="privacy-section-11-heading">11. Third-Party Links</h2>
          <p className="privacy-section-11-paragraph">
            Our Website may contain links to third-party sites. We are not
            responsible for their privacy practices. Please review their
            policies before providing personal data.
          </p>
        </section>

        {/* Section 12: Changes to This Privacy Policy */}
        <section className="privacy-section privacy-section-12">
          <h2 className="privacy-section-12-heading">
            12. Changes to This Privacy Policy
          </h2>
          <p className="privacy-section-12-paragraph">
            We may update this Privacy Policy from time to time. The latest
            version will always be available on our Website with the "Last
            Updated" date.
          </p>
        </section>

        {/* Section 13: Contact Us */}
        <section className="privacy-section privacy-section-13">
          <h2 className="privacy-section-13-heading">13. Contact Us</h2>
          <p className="privacy-section-13-paragraph-1">
            📧{" "}
            <strong className="privacy-section-13-strong-email">Email:</strong>{" "}
            <a
              href="mailto:alameenwebdesign01@gmail.com"
              className="privacy-section-13-link-email"
            >
              alameenwebdesign01@gmail.com
            </a>
          </p>
          <p className="privacy-section-13-paragraph-2">
            📍{" "}
            <strong className="privacy-section-13-strong-address">
              Address:
            </strong>{" "}
            Badagry, Nigeria
          </p>
        </section>

        <footer className="privacy-footer">
          <p className="privacy-footer-text">
            © 2025 Alameen Web Agency. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
