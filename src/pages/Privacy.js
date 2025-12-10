import React from "react";
import "./Legal.css";

function Privacy() {
  return (
    <main className="legal-container">
      <h1 className="legal-title">Privacy Policy</h1>
      <p className="legal-meta">Effective date: 2025-01-01</p>

      <section className="legal-section">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how we collect, use, and handle user data when
          using our AI-powered text summarization service.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Information We Collect</h2>
        <p>
          We do not store any user-submitted text. The text provided for summarization
          is processed temporarily to generate output and is not saved on our servers.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. TikTok Login Information</h2>
        <p>
          When users sign in with TikTok, we may receive basic profile details such as
          <strong> open_id</strong>. This information is used only to identify the user
          within the website and is not stored or shared beyond what is required for
          functionality.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Data Storage &amp; Retention</h2>
        <p>
          We do not retain personal data or user text. No user-generated content is
          stored after processing.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Third-Party Sharing</h2>
        <p>
          We do not sell, share, or disclose personal information to third parties.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Security</h2>
        <p>
          We take reasonable measures to protect information during transmission, but
          no system is completely secure.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. User Rights</h2>
        <p>
          Users may contact us to request clarification or deletion of any information
          associated with their account.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Updates to This Policy</h2>
        <p>
          We may modify this Privacy Policy from time to time. Changes will be posted
          on this page.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Contact Information</h2>
        <p>
          For privacy-related questions, please contact:{" "}
          <a href="mailto:jxeong@gmail.com">jxeong@gmail.com</a>
        </p>
      </section>
    </main>
  );
}

export default Privacy;
