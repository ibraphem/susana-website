const topics = [
  "Executive Authority & Strategic Positioning",
  "LinkedIn Monetization Masterclasses",
  "Transformational Leadership in Digital Markets",
  "Talent Acquisition Systems for Scale",
];

const speakingStats = [
  { value: "12+", label: "Events" },
  { value: "5,000+", label: "Leaders Impacted" },
  { value: "50+", label: "Countries" },
];

export function Speaking() {
  return (
    <section id="speaking" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Global Influence
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
              Sought-after speaker &amp; industry authority
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted lg:text-lg">
              Delivering transformative insights at international conferences,
              corporate retreats, and executive summits across continents.
            </p>

            <ul className="mt-8 space-y-4">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-3 text-base text-navy"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {topic}
                </li>
              ))}
            </ul>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-navy/10 pt-8">
              {speakingStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-3xl font-semibold text-gold">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="https://www.linkedin.com/in/susana100/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
            >
              Book Susana for Your Event
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

          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex aspect-square items-center justify-center rounded-xl border border-navy/10 bg-navy"
              >
                <svg
                  className="h-10 w-10 text-gold/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
