import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import React from "react";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme-provider";
import { gyms } from "../lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | JY Gymnasium",
    default: "JY Gymnasium — Transform Your Body. Transform Your Life.",
  },
  description: "Push your limits and become the strongest version of yourself. Gwalior's premier fitness destination — certified coaches, world-class equipment, proven results.",
  keywords: ["Gym", "Fitness", "Gwalior", "Personal Training", "Yoga", "CrossFit", "Weight Loss", "Muscle Gain", "Transformation"],
  openGraph: {
    title: "JY Gymnasium — Transform Your Body. Transform Your Life.",
    description: "Push your limits and become the strongest version of yourself in 90 days.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = gyms.map((gym) => ({
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": `https://jygym.com/#${gym.id}`,
    name: gym.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: gym.address,
      addressLocality: "Gwalior",
      addressRegion: "MP",
      postalCode: gym.city.split(" ").pop(),
      addressCountry: "IN",
    },
    telephone: gym.phone,
    url: "https://jygym.com",
    openingHours: `Mo-Sa ${gym.hours.weekday}, Su ${gym.hours.weekend}`,
  }));

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
