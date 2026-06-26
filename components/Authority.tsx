const pillars = [
  {
    title: "Proven Track Record",
    tagline: "Measurable ROI",
    description:
      "From 241 to 698 followers in 7 days. 1M+ views generated. 383 attendees converted into 150 paid certifications.",
    metric: "+189%",
    metricLabel: "growth, repeatedly",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13l4-4 4 4 7-7m0 0v5m0-5h-5"
      />
    ),
  },
  {
    title: "Elite Credentials",
    tagline: "Top 1% Globally",
    description:
      "FIMC Fellow of the Institute of Management Consultants. 70+ professional endorsements. Global recognition across 50+ countries.",
    tags: ["FIMC", "Top 1%", "70+ Endorsements"],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0V3m9 9H3"
      />
    ),
  },
  {
    title: "Executive Network",
    tagline: "Boardroom Connections",
    description:
      "Direct access to senior leaders, bank executives, and Fortune 500 decision-makers across 50+ countries.",
    metric: "50+",
    metricLabel: "countries reached",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 4.5V3m6 1.5V3M4.5 9H3m18 0h-1.5M7.5 7.5h9v9h-9zM9 16.5V21m6-4.5V21"
      />
    ),
  },
];

export function Authority() {
  return (
    <section id="authority" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Authority Positioning
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
            Why C-suite executives choose Susana
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
            Not coaching. Not theory. Authority systems engineered for measurable
            business outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-xl border-t-2 border-gold bg-background p-7 shadow-sm lg:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-gold">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {pillar.icon}
                </svg>
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                {pillar.tagline}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>

              {pillar.metric && (
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-semibold text-navy">
                    {pillar.metric}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted">
                    {pillar.metricLabel}
                  </span>
                </div>
              )}

              {pillar.tags && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-navy px-3 py-1 text-xs font-medium text-cream"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
