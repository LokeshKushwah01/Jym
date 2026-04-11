"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/trainers", label: "Trainers" },
    { href: "/gallery", label: "Gallery" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-[100] transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(11, 11, 11, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        height: 80,
        display: "flex",
        alignItems: "center",
      }}
    >
      <nav className="container-custom flex items-center justify-between w-full">
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "var(--accent)",
            textDecoration: "none",
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          JY GYM
        </Link>

        {/* Desktop links */}
        <div className="desktop-nav items-center gap-x-8 lg:flex hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                color: pathname === l.href ? "var(--accent)" : "rgba(255,255,255,0.6)",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/pricing"
            className="btn-primary"
            style={{
              padding: "10px 24px",
              fontSize: 13,
              borderRadius: 6,
              background: "var(--accent)",
              color: "#000",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Join Now
          </Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "var(--text)",
          }}
          className="hamburger-btn"
        >
          {/* 3-line icon */}
          <div style={{ width: 30, height: 24, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ width: "100%", height: 3, background: "currentColor", borderRadius: 3 }}></span>
            <span style={{ width: "100%", height: 3, background: "currentColor", borderRadius: 3 }}></span>
            <span style={{ width: "100%", height: 3, background: "currentColor", borderRadius: 3 }}></span>
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className="mobile-drawer"
        style={{
          position: "fixed",
          top: 80,
          left: 0,
          width: "100%",
          height: "calc(100vh - 80px)",
          background: "#0B0B0B",
          padding: "20px 24px",
          display: open ? "flex" : "none",
          flexDirection: "column",
          zIndex: 99,
          overflowY: "auto",
        }}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              padding: "12px 0",
              borderBottom: "1px solid var(--border)",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              color: pathname === l.href ? "var(--accent)" : "var(--text)",
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/pricing"
          onClick={() => setOpen(false)}
          style={{
            marginTop: 12,
            background: "var(--accent)",
            color: "var(--accent-foreground)",
            padding: "14px",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 14,
            textDecoration: "none",
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Join Now
        </Link>
      </div>
    </header>
  );
}
