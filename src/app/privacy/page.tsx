export default function PrivacyPolicy() {
  return (
    <article className="bg-white min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[800px] mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-border-custom pb-8">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            Legal
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text uppercase leading-none">
            Privacy Policy
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-secondary-text">
            Last Updated: July 2026
          </p>
        </div>

        {/* Legal copy */}
        <div className="space-y-8 text-xs tracking-wider text-secondary-text leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-heading text-sm font-bold text-primary-text uppercase">
              1. Information Collection
            </h2>
            <p>
              We collect information directly when you fill out our project brief forms or subscribe to our newsletter. This includes your name, email address, phone number, and architectural specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-sm font-bold text-primary-text uppercase">
              2. Use of Information
            </h2>
            <p>
              All customer details are kept confidential. We use this data only to process your project briefs, schedule consultations in Lalitpur, and optimize website speed and styling using cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-sm font-bold text-primary-text uppercase">
              3. Data Retention
            </h2>
            <p>
              We retain contact information only as long as necessary for administrative and legal requirements relating to our design and building project contracts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-sm font-bold text-primary-text uppercase">
              4. Contact Coordinates
            </h2>
            <p>
              If you have any questions or request deletion of data, please contact the studio at info@archiodesigns.com or visit our office at Chakupat-11, Lalitpur, Nepal.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
