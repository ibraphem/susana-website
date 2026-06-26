export function Footer() {
  return (
    <footer className="border-t border-navy/5 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-navy">
            Susana O. Otokpa, FIMC
          </p>
          <p className="mt-1 text-sm text-muted">
            Executive LinkedIn Strategist · Talent &amp; Growth Consultant
          </p>
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Susana O. Otokpa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
