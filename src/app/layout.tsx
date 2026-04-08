import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import React from "react";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme-provider";
import { gyms } from "../lib/data";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | JY Gymnasium",
    default: "JY Gymnasium",
  },
  description: "Gwalior's premium fitness destination. Experience world-class equipment, certified trainers, and a community that pushes you to be your best.",
  keywords: ["Gym", "Fitness", "Gwalior", "Personal Training", "Yoga", "CrossFit"],
  openGraph: {
    title: "JY Gymnasium",
    description: "Premium fitness in Gwalior.",
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
    "name": gym.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": gym.address,
      "addressLocality": "Gwalior",
      "addressRegion": "MP",
      "postalCode": gym.city.split(" ").pop(),
      "addressCountry": "IN"
    },
    "telephone": gym.phone,
    "url": "https://jygym.com",
    "openingHours": `Mo-Sa ${gym.hours.weekday}, Su ${gym.hours.weekend}`
  }));

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
