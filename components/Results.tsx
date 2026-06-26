const headlineStats = [
  { value: "1,000,000+", label: "Total Reach", sub: "Across platforms" },
  { value: "200%", label: "Average Growth", sub: "90-day client increase" },
  { value: "70+", label: "Expert Endorsements", sub: "Industry leaders" },
];

const timelines = [
  {
    title: "Growth Timeline",
    period: "6 Months",
    before: { label: "Before", value: "Top 14% (1K)" },
    after: { label: "After", value: "Top 1% (8.5K+)" },
    result: { label: "Total Growth", value: "+750%" },
  },
  {
    title: "Talent Acquisition",
    period: "Ongoing",
    before: { label: "Placement Rate", value: "95%" },
    after: { label: "Executive Hires", value: "100+" },
    result: { label: "Faster Placement", value: "60%" },
  },
  {
    title: "Community Growth",
    period: "14 Days",
    before: { label: "Before", value: "241" },
    after: { label: "After", value: "742" },
    result: { label: "Followers", value: "+208%" },
  },
];

export function Results() {
  return (
    <section id="results" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-light">
            Performance Metrics
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream lg:text-4xl">
            Results that speak volumes
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {headlineStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-cream/10 bg-cream/5 p-7 text-center"
            >
              <p className="font-display text-4xl font-semibold text-gold-light lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-cream">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-cream/50">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {timelines.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-cream/10 bg-cream/5 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-cream">
                  {item.title}
                </h3>
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                  {item.period}
                </span>
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between text-cream/70">
                  <dt>{item.before.label}</dt>
                  <dd className="font-medium">{item.before.value}</dd>
                </div>
                <div className="flex justify-between text-cream/70">
                  <dt>{item.after.label}</dt>
                  <dd className="font-medium">{item.after.value}</dd>
                </div>
                <div className="flex justify-between border-t border-cream/10 pt-3 text-cream">
                  <dt className="font-medium">{item.result.label}</dt>
                  <dd className="font-display text-lg font-semibold text-gold-light">
                    {item.result.value}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
