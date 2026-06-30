"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#authority", label: "Authority" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#speaking", label: "Speaking" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#mentorship", label: "Mentorship" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-navy/5 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-navy"
        >
          Susana O. Otokpa
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/susana100/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-navy-light"
          >
            Connect
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/5 bg-cream px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-muted transition-colors hover:text-navy"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/susana100/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-navy px-5 py-2.5 text-center text-sm font-medium text-cream"
              onClick={() => setOpen(false)}
            >
              Connect on LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
