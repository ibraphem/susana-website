import Image from "next/image";

const heroStats = [
  { value: "95%", label: "Placement Rate" },
  { value: "200%+", label: "Revenue Growth" },
  { value: "10x", label: "ROI Delivered" },
  { value: "$25K+", label: "Client Savings" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-16">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold-light">
              LinkedIn Queen of Strategy
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Susana O. Otokpa,{" "}
              <span className="text-gold-light">FIMC</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75 lg:text-xl">
              Executive LinkedIn Strategist · Personal Brand Architect ·
              Talent &amp; Growth Consultant
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/60">
              Helping CEOs, founders, executives, and business leaders transform
              LinkedIn into a powerful engine for authority, influence, revenue,
              and strategic opportunities.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/susana100/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
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
              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-cream/20 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/40 hover:bg-cream/5"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/5" />
              <div className="relative overflow-hidden rounded-2xl border border-cream/10 shadow-2xl shadow-black/30">
                <Image
                  src="/susana.jpg"
                  alt="Susana O. Otokpa, FIMC — Executive LinkedIn Strategist"
                  width={380}
                  height={480}
                  priority
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-lg bg-cream px-4 py-3 shadow-lg">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Fellow, IMC
                </p>
                <p className="font-display text-lg font-semibold text-navy">
                  FIMC
                </p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 lg:mt-20 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-navy px-5 py-7 text-center lg:px-6 lg:py-8"
            >
              <dt className="font-display text-3xl font-semibold text-gold-light lg:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-cream/60 lg:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
