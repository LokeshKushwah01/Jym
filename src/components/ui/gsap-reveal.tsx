"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "fade";
  delay?: number;
  duration?: number;
  stagger?: number;
  staggerSelector?: string;
}

export function GsapReveal({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  stagger = 0,
  staggerSelector,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const targets = staggerSelector
      ? ref.current.querySelectorAll(staggerSelector)
      : ref.current;

    const animations: Record<string, gsap.TweenVars> = {
      fadeUp: { y: 50, opacity: 0 },
      fadeLeft: { x: -50, opacity: 0 },
      fadeRight: { x: 50, opacity: 0 },
      scale: { scale: 0.9, opacity: 0 },
      fade: { opacity: 0 },
    };

    const tween = gsap.from(targets, {
      ...animations[animation],
      duration,
      delay,
      stagger: stagger || 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill();
      });
    };
  }, [animation, delay, duration, stagger, staggerSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* Parallax section utility */
interface GsapParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function GsapParallax({ children, speed = 0.3, className = "" }: GsapParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const tween = gsap.to(ref.current, {
      yPercent: -speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
