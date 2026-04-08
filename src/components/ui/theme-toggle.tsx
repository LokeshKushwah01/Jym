"use client";

import * as React from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
        <div className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-full w-10 h-10 hover:bg-accent/10 group transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun 
        size={20} 
        weight="bold"
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-accent" 
      />
      <Moon 
        size={20} 
        weight="bold"
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-accent" 
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
