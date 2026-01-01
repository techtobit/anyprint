export const metadata = {
  title: "Privacy Policy | Prime Print UAE",
  description:
    "Privacy Policy of Prime Print UAE. We do not collect payments, cookies, location data, or tracking information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> 01 January 2026
      </p>

      <p className="mb-6">
        Prime Print UAE (“we”, “our”, “us”) operates the website{" "}
        <a
          href="https://primeprint.ae"
          className="text-blue-600 underline"
        >
          https://primeprint.ae/
        </a>
        . We respect your privacy and are committed to protecting any
        information you choose to share with us.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p>
          We collect only the information you voluntarily provide, such as:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Message details or print requirements</li>
        </ul>
        <p className="mt-2">
          We do not collect payment information, location data, or sensitive
          personal data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p>Your information is used only to:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Respond to inquiries and quotation requests</li>
          <li>Communicate regarding printing services</li>
          <li>Provide customer support</li>
        </ul>
        <p className="mt-2">
          We do not use your information for advertising, profiling, or
          automated decision-making.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Payments</h2>
        <p>
          Prime Print UAE does not process online payments through this website.
          Any payments, if applicable, are handled offline or through direct
          communication with customers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Cookies & Tracking
        </h2>
        <p>Our website:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Does not use cookies</li>
          <li>Does not use analytics or tracking tools</li>
          <li>Does not collect IP addresses or location data</li>
        </ul>
        <p className="mt-2">
          You can browse our website without providing any personal
          information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
        <p>
          We do not sell, rent, or share your personal information with third
          parties, except when required by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
        <p>
          We take reasonable measures to protect your information. However, no
          method of online communication is completely secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Third-Party Links
        </h2>
        <p>
          Our website may contain links to external websites. We are not
          responsible for the privacy practices of those websites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
        <p>You may request to:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Access your personal information</li>
          <li>Correct or delete your information</li>
        </ul>
        <p className="mt-2">
          Please contact us at{" "}
          <a
            href="mailto:admin@primeprint.ae"
            className="text-blue-600 underline"
          >
            admin@primeprint.ae
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>Email: info@primeprint.ae</p>
        <p>Website: https://primeprint.ae</p>
      </section>
    </main>
  );
}
