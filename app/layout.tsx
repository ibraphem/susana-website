import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Susana O. Otokpa, FIMC | Executive LinkedIn Strategist",
  description:
    "Executive LinkedIn Strategist, Personal Brand Architect, and Talent & Growth Consultant. Helping CEOs, founders, and executives transform LinkedIn into an engine for authority, influence, and growth.",
  openGraph: {
    title: "Susana O. Otokpa, FIMC | Executive LinkedIn Strategist",
    description:
      "LinkedIn Queen of Strategy — helping leaders build authority systems that drive measurable business outcomes.",
    images: [{ url: "/susana.jpg", width: 380, height: 480 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
