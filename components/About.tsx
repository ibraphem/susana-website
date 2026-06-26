export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
              About
            </h2>
            <div className="mt-4 h-1 w-12 bg-gold" />
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted lg:text-lg">
            <p>
              Over the years, I&apos;ve helped professionals and organizations
              strengthen their executive presence, grow engaged audiences,
              attract high-value clients, recruit exceptional talent, and
              position themselves as trusted industry leaders.
            </p>
            <p>
              My approach goes beyond optimizing profiles or writing content. I
              build{" "}
              <span className="font-medium text-navy">authority systems</span>{" "}
              that align your expertise with your business goals, ensuring your
              online presence creates measurable business outcomes.
            </p>
            <p>
              Whether you&apos;re an executive looking to increase influence, a
              founder building credibility for your company, or an organization
              seeking stronger leadership visibility, I provide practical
              strategies backed by proven execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
