// src/pages/Terms.js
import React from "react";
import "./Legal.css";

function Terms() {
  return (
    <main className="legal-container">
      <h1 className="legal-title">Terms of Service</h1>
      <p className="legal-meta">Effective date: 2025-01-01</p>

      <section className="legal-section">
        <h2>1. Overview</h2>
        <p>
          This website provides an AI-powered text summarization service. By
          accessing or using this website, you agree to these Terms of Service.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Use of Service</h2>
        <p>
          Users may submit their own text to generate a summary. The service is
          provided for informational purposes only, and we do not guarantee the
          accuracy, completeness, or reliability of any generated summaries.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. User Responsibilities</h2>
        <p>
          Users must not submit unlawful, harmful, or infringing content and
          agree to use the service in compliance with applicable laws and
          regulations.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Account &amp; Authentication</h2>
        <p>
          TikTok Login is used only for identity verification. We do not access
          or request unnecessary TikTok data. Authentication information is used
          solely to identify the user within this website.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Prohibited Activities</h2>
        <p>
          Users may not misuse the service, attempt to interfere with system
          operations, or use the summaries for harmful or illegal purposes.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Limitation of Liability</h2>
        <p>
          This website is provided &quot;as is&quot; without warranties of any
          kind. We are not liable for any damages arising from the use of the
          website or generated summaries.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the
          service after changes are posted constitutes acceptance of the updated
          terms.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Contact</h2>
        <p>
          For inquiries, please contact: <a href="mailto:jxeong@gmail.com">jxeong@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}

export default Terms;
