"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply saved theme without React state
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const dark = !html.classList.contains("dark");

    html.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 transition-all duration-500 ${
          isScrolled ? "top-3" : "top-5"
        }`}
      >
        <nav
          className={`flex items-center justify-between px-4 py-3 transition-all duration-500 sm:px-5 ${
            isScrolled
              ? "rounded-2xl border border-foreground/15 bg-background/75 shadow-lg backdrop-blur-xl"
              : "rounded-full border border-foreground/10 bg-background/60 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm font-semibold tracking-tight transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            SI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Availability */}
            <div className="mr-1 hidden items-center gap-2 text-xs text-muted-foreground lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              Available
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:bg-muted"
            >
              <Moon className="h-4 w-4 dark:hidden" />
              <Sun className="hidden h-4 w-4 dark:block" />
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:bg-muted md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Navigation
          </p>

          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center gap-5 border-b border-border/60 py-5"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>

                <span className="text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for opportunities
          </div>
        </div>
      </div>
    </>
  );
}
