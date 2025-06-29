import React, {useEffect} from "react";
import "../../styles/Terms_and_conditons.css"; // Import your CSS file for styling

const Terms_and_conditons = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1 className="terms-title">Terms and Conditions</h1>
        <p className="terms-date">
          <strong className="terms-date-updated">Last Updated:</strong> March
          2025
        </p>
        <p className="terms-intro">
          Welcome to{" "}
          <strong className="terms-company">Alameen Web Agency</strong>. By
          accessing or using our website and services, you agree to be bound by
          the following terms and conditions. If you do not agree with any part
          of these terms, please do not use our services.
        </p>

        {/* Section 1: Definitions */}
        <section className="terms-section terms-section-1">
          <h2 className="terms-section-1-heading">1. Definitions</h2>
          <ul className="terms-section-1-list">
            <li className="terms-section-1-item">
              <strong>"Company," "we," "our," "us"</strong> refers to Alameen
              Web Agency.
            </li>
            <li className="terms-section-1-item">
              <strong>"Client," "you," "your"</strong> refers to any person or
              entity using our services.
            </li>
            <li className="terms-section-1-item">
              <strong>"Services"</strong> refers to the design, development, and
              optimization of websites provided by Alameen Web Agency.
            </li>
            <li className="terms-section-1-item">
              <strong>"Website"</strong> refers to{" "}
              <a
                href="https://alameenwebdesign.github.io/"
                className="terms-link"
              >
                https://alameenwebdesign.github.io/
              </a>{" "}
              and any subdomains.
            </li>
          </ul>
        </section>

        {/* Section 2: Services Offered */}
        <section className="terms-section terms-section-2">
          <h2 className="terms-section-2-heading">2. Services Offered</h2>
          <p className="terms-section-2-paragraph">
            We specialize in designing high-performance, luxury-grade websites
            for businesses seeking to dominate their industry online. Our
            services include but are not limited to:
          </p>
          <ul className="terms-section-2-list">
            <li className="terms-section-2-item">Custom Website Design</li>
            <li className="terms-section-2-item">E-Commerce Development</li>
            <li className="terms-section-2-item">
              SEO &amp; Speed Optimization
            </li>
            <li className="terms-section-2-item">
              Website Redesign &amp; Optimization
            </li>
            <li className="terms-section-2-item">
              Landing Pages &amp; Funnels
            </li>
          </ul>
        </section>

        {/* Section 3: Payment Terms */}
        <section className="terms-section terms-section-3">
          <h2 className="terms-section-3-heading">3. Payment Terms</h2>
          <ul className="terms-section-3-list">
            <li className="terms-section-3-item">
              All payments must be made in full before the commencement of the
              project unless otherwise agreed upon.
            </li>
            <li className="terms-section-3-item">
              We accept payments via bank transfer, PayPal, or other approved
              payment methods.
            </li>
            <li className="terms-section-3-item">
              Custom quotes and payment plans may be available upon request.
            </li>
            <li className="terms-section-3-item">
              Any additional features or revisions beyond the agreed scope will
              be subject to additional charges.
            </li>
          </ul>
        </section>

        {/* Section 4: Project Timelines */}
        <section className="terms-section terms-section-4">
          <h2 className="terms-section-4-heading">4. Project Timelines</h2>
          <ul className="terms-section-4-list">
            <li className="terms-section-4-item">
              Estimated delivery timelines will be discussed during the initial
              consultation.
            </li>
            <li className="terms-section-4-item">
              Timelines are dependent on client responsiveness and provision of
              required materials.
            </li>
            <li className="terms-section-4-item">
              Delays caused by the client may result in adjusted delivery
              schedules and possible additional fees.
            </li>
          </ul>
        </section>

        {/* Section 5: Revisions and Approval */}
        <section className="terms-section terms-section-5">
          <h2 className="terms-section-5-heading">5. Revisions and Approval</h2>
          <ul className="terms-section-5-list">
            <li className="terms-section-5-item">
              Clients are entitled to a specific number of revisions as outlined
              in their package.
            </li>
            <li className="terms-section-5-item">
              Additional revisions beyond the agreed scope will be billed
              separately.
            </li>
            <li className="terms-section-5-item">
              Once a project is approved and finalized, further modifications
              will be considered as a new project.
            </li>
          </ul>
        </section>

        {/* Section 6: Client Responsibilities */}
        <section className="terms-section terms-section-6">
          <h2 className="terms-section-6-heading">
            6. Client Responsibilities
          </h2>
          <ul className="terms-section-6-list">
            <li className="terms-section-6-item">
              Clients must provide all necessary content, images, branding
              materials, and any other required information in a timely manner.
            </li>
            <li className="terms-section-6-item">
              Failure to provide requested information may result in project
              delays.
            </li>
            <li className="terms-section-6-item">
              Clients are responsible for reviewing and approving final work
              before launch.
            </li>
          </ul>
        </section>

        {/* Section 7: Intellectual Property & Copyright */}
        <section className="terms-section terms-section-7">
          <h2 className="terms-section-7-heading">
            7. Intellectual Property &amp; Copyright
          </h2>
          <ul className="terms-section-7-list">
            <li className="terms-section-7-item">
              Upon full payment, the client will receive full ownership rights
              to the completed website design and content.
            </li>
            <li className="terms-section-7-item">
              We reserve the right to showcase completed projects in our
              portfolio unless otherwise agreed.
            </li>
            <li className="terms-section-7-item">
              Any third-party assets used in the project (such as stock images,
              plugins, or licensed fonts) remain subject to their respective
              licensing terms.
            </li>
          </ul>
        </section>

        {/* Section 8: Refund Policy */}
        <section className="terms-section terms-section-8">
          <h2 className="terms-section-8-heading">8. Refund Policy</h2>
          <ul className="terms-section-8-list">
            <li className="terms-section-8-item">
              Due to the custom nature of our work, refunds are generally not
              provided.
            </li>
            <li className="terms-section-8-item">
              If a project is canceled before work has begun, a partial refund
              may be considered at our discretion.
            </li>
            <li className="terms-section-8-item">
              No refunds will be issued once design or development work has
              commenced.
            </li>
          </ul>
        </section>

        {/* Section 9: Limitation of Liability */}
        <section className="terms-section terms-section-9">
          <h2 className="terms-section-9-heading">
            9. Limitation of Liability
          </h2>
          <ul className="terms-section-9-list">
            <li className="terms-section-9-item">
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of our services.
            </li>
            <li className="terms-section-9-item">
              We do not guarantee specific business results from website usage.
            </li>
            <li className="terms-section-9-item">
              Any issues arising from third-party services or software are
              beyond our control and responsibility.
            </li>
          </ul>
        </section>

        {/* Section 10: Termination of Services */}
        <section className="terms-section terms-section-10">
          <h2 className="terms-section-10-heading">
            10. Termination of Services
          </h2>
          <ul className="terms-section-10-list">
            <li className="terms-section-10-item">
              We reserve the right to terminate a project or service if a client
              violates these terms, engages in unethical behavior, or fails to
              provide required materials within a reasonable timeframe.
            </li>
            <li className="terms-section-10-item">
              Any termination initiated by the client will not entitle them to a
              refund.
            </li>
          </ul>
        </section>

        {/* Section 11: Confidentiality */}
        <section className="terms-section terms-section-11">
          <h2 className="terms-section-11-heading">11. Confidentiality</h2>
          <ul className="terms-section-11-list">
            <li className="terms-section-11-item">
              All client information provided to us will be kept confidential
              and used solely for the purpose of completing the project.
            </li>
            <li className="terms-section-11-item">
              We will not share, sell, or disclose client information to third
              parties without consent, except where required by law.
            </li>
          </ul>
        </section>

        {/* Section 12: Dispute Resolution */}
        <section className="terms-section terms-section-12">
          <h2 className="terms-section-12-heading">12. Dispute Resolution</h2>
          <ul className="terms-section-12-list">
            <li className="terms-section-12-item">
              Any disputes arising from these terms shall first be attempted to
              be resolved through mutual negotiation.
            </li>
            <li className="terms-section-12-item">
              If an agreement cannot be reached, disputes shall be settled under
              the laws of Nigeria.
            </li>
          </ul>
        </section>

        {/* Section 13: Changes to Terms & Conditions */}
        <section className="terms-section terms-section-13">
          <h2 className="terms-section-13-heading">
            13. Changes to Terms &amp; Conditions
          </h2>
          <p className="terms-section-13-paragraph">
            We reserve the right to update or modify these terms at any time
            without prior notice. Continued use of our services after changes
            indicates acceptance of the revised terms.
          </p>
        </section>

        {/* Section 14: Contact Information */}
        <section className="terms-section terms-section-14">
          <h2 className="terms-section-14-heading">14. Contact Information</h2>
          <p className="terms-section-14-paragraph">
            For any questions regarding these Terms and Conditions, please
            contact us at:
          </p>
          <p className="terms-section-14-paragraph">
            <strong className="terms-contact-company">
              Alameen Web Agency
            </strong>
            <br />
            📍 Badagry, Nigeria
            <br />
            📧 Email:{" "}
            <a
              href="mailto:alameenwebdesign01@gmail.com"
              className="terms-contact-email"
            >
              alameenwebdesign01@gmail.com
            </a>
            <br />
            📞 Phone: +234 811 789 6398
          </p>
        </section>

        <footer className="terms-footer">
          <p className="terms-footer-text">
            © 2025 Alameen Web Agency. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Terms_and_conditons;
