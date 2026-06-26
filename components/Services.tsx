const services = [
  {
    title: "LinkedIn Authority Building",
    tagline: "Position yourself as the definitive industry voice",
    points: [
      "Profile optimization & positioning",
      "Thought leadership content strategy",
      "C-suite networking protocols",
      "Content-to-conversion systems",
    ],
  },
  {
    title: "Executive Talent Acquisition",
    tagline: "Build high-performing teams 60% faster",
    points: [
      "Full-cycle executive recruitment",
      "High-volume talent pipelines",
      "95% placement success rate",
      "Role architecture & benchmarking",
    ],
  },
  {
    title: "Revenue-Driven Social Strategy",
    tagline: "Transform digital visibility into measurable revenue",
    points: [
      "Multi-platform management",
      "200%+ visibility amplification",
      "Conversion funnel systems",
      "ROI tracking & reporting",
    ],
  },
  {
    title: "Team Training & Enablement",
    tagline: "Empower your organization with LinkedIn mastery",
    points: [
      "Custom executive workshops",
      "Positioning frameworks",
      "Implementation playbooks",
      "Ongoing optimization support",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Strategic Solutions
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
            Strategic services for visionary leaders
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
            Authority systems, not just profiles — practical strategies backed by
            proven execution for executives, founders, and organizations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-xl border border-navy/5 bg-cream p-7 transition-shadow hover:shadow-md hover:shadow-navy/5 lg:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{service.tagline}</p>
                </div>
                <span className="font-display text-3xl font-light text-gold/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
