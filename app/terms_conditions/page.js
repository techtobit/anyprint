export const metadata = {
  title: "Terms & Conditions | Prime Print UAE",
  description:
    "Terms and Conditions for using Prime Print UAE website and printing services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> 01 January 2026
      </p>

      <p className="mb-6">
        These Terms & Conditions govern your use of the website{" "}
        <a
          href="https://primeprint.ae"
          className="text-blue-600 underline"
        >
          https://primeprint.ae
        </a>{" "}
        operated by Prime Print UAE. By accessing this website or contacting
        us for services, you agree to these terms.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Services</h2>
        <p>
          Prime Print UAE provides professional printing and branding services,
          including but not limited to business cards, stickers, banners,
          signboards, brochures, t-shirts, and custom print materials.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Quotes & Orders
        </h2>
        <ul className="list-disc ml-6">
          <li>All quotations are provided upon request.</li>
          <li>Orders are confirmed only after customer approval.</li>
          <li>
            Prices and turnaround times may vary depending on requirements.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Payments
        </h2>
        <p>
          Prime Print UAE does not accept payments through this website. Any
          payment arrangements are handled offline or through direct
          communication with the customer.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Artwork & Content Responsibility
        </h2>
        <ul className="list-disc ml-6">
          <li>
            Customers are responsible for providing accurate artwork and
            content.
          </li>
          <li>
            Prime Print UAE is not responsible for errors approved by the
            customer.
          </li>
          <li>
            Customers confirm they have the legal rights to use submitted
            designs and content.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Intellectual Property
        </h2>
        <p>
          All customer-provided designs remain the property of the customer.
          Prime Print UAE will not reuse or distribute customer artwork without
          permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Limitation of Liability
        </h2>
        <p>
          Prime Print UAE shall not be liable for any indirect, incidental, or
          consequential damages. Our liability is limited to the value of the
          services provided.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          7. Third-Party Links
        </h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content or practices of those websites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Changes to These Terms
        </h2>
        <p>
          Prime Print UAE reserves the right to update these Terms &
          Conditions at any time. Updates will be posted on this page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          9. Governing Law
        </h2>
        <p>
          These Terms & Conditions are governed by the laws of the United Arab
          Emirates.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          10. Contact Information
        </h2>
        <p>Email: info@primeprint.ae</p>
        <p>Website: https://primeprint.ae</p>
      </section>
    </main>
  );
}
