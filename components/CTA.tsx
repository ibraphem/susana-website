export function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light px-8 py-14 text-center lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream lg:text-4xl">
              Ready to build your authority?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/70 lg:text-lg">
              Let&apos;s transform your LinkedIn presence into a strategic engine
              for influence, growth, and opportunity.
            </p>
            <a
              href="https://www.linkedin.com/in/susana100/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Connect on LinkedIn
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
