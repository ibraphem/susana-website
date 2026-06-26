"use client";

import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Susana's strategic framework transformed our executive team's LinkedIn presence from passive profiles into a consistent lead generation engine. The ROI was measurable within 60 days.",
    name: "Adebayo K.",
    role: "Managing Director, West Africa Operations",
  },
  {
    quote:
      "We engaged Susana to restructure our talent acquisition pipeline. She delivered a 95% placement rate and cut our time-to-hire by 60%. That is institutional-grade consulting.",
    name: "Rachel M.",
    role: "Chief People Officer, FinTech Division",
  },
  {
    quote:
      "Her authority positioning methodology is unlike anything I have encountered in 20 years of executive coaching. She understands the intersection of credibility and revenue at a systems level.",
    name: "Dr. Emmanuel O.",
    role: "Board Advisor, Pan-African Leadership Council",
  },
  {
    quote:
      "Within 90 days, our C-suite visibility increased by 200%. Susana does not just consult — she architects outcomes. Her FIMC distinction is well-earned.",
    name: "Priya S.",
    role: "VP Strategy, APAC Markets",
  },
];

const AUTOPLAY_MS = 6000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const goTo = useCallback((index: number) => {
    setActive((index + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [active, count]);

  return (
    <section id="testimonials" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Client Endorsements
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy lg:text-4xl">
            Executive testimonials
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="w-full shrink-0 px-1"
                  aria-hidden={
                    testimonial !== testimonials[active] ? "true" : undefined
                  }
                >
                  <div className="mx-auto flex flex-col items-center rounded-2xl border-t-2 border-gold bg-background px-8 py-12 text-center shadow-sm lg:px-16 lg:py-14">
                    <svg
                      className="h-10 w-10 text-gold/40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                    <blockquote className="mt-6 font-display text-xl italic leading-relaxed text-navy lg:text-2xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8">
                      <p className="font-display text-lg font-semibold text-navy">
                        {testimonial.name}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">
                        {testimonial.role}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-cream text-navy shadow-sm transition-colors hover:bg-navy hover:text-cream lg:-left-5"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-cream text-navy shadow-sm transition-colors hover:bg-navy hover:text-cream lg:-right-5"
          >
            <svg
              className="h-5 w-5"
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
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2.5">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === active}
              className={`h-2 rounded-full transition-all ${
                index === active
                  ? "w-8 bg-gold"
                  : "w-2 bg-navy/20 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
