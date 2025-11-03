"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const resolved = theme === "system" ? systemTheme : theme;
  const isDark = mounted ? resolved === "dark" : false;

  const smoothToggleTheme = React.useCallback(
    (next: "light" | "dark") => {
      const root = document.documentElement;
      root.classList.add("theme-transition");

      void root.offsetWidth;
      requestAnimationFrame(() => {
        setTheme(next);
        window.setTimeout(() => {
          root.classList.remove("theme-transition");
        }, 550);
      });
    },
    [setTheme]
  );

  const onToggleTheme = () => smoothToggleTheme(isDark ? "light" : "dark");

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const closeAfter = () => setOpen(false);

  const ariaLabel = mounted
    ? isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
    : "Toggle color theme";
  const titleLabel = mounted
    ? isDark
      ? "Light mode"
      : "Dark mode"
    : "Toggle theme";

  return (
    <nav className="fixed top-0 left-0 right-0 flex h-16 justify-between px-6 md:px-8 lg:px-16 bg-background text-foreground">
      <div className="flex h-full items-center">
        <p className="cursor-pointer tracking-widest text-sm hover:opacity-90">
          TEUKU SULTHAN.
        </p>
      </div>

      <div className="hidden md:flex items-center justify-center gap-2">
        <Button variant="ghost" asChild className="font-medium">
          <Link
            href="#stack"
            className="text-md text-foreground/90 hover:text-foreground transition-all"
          >
            Stacks
          </Link>
        </Button>
        <Button variant="ghost" asChild className="font-medium">
          <Link
            href="#projects"
            className="text-md text-foreground/90 hover:text-foreground transition-all"
          >
            Projects
          </Link>
        </Button>
        <Button variant="ghost" asChild className="font-medium">
          <Link
            href="#experiences"
            className="text-md text-foreground/90 hover:text-foreground transition-all"
          >
            Experiences
          </Link>
        </Button>
      </div>

      <div className="flex h-full items-center gap-1">
        <div className="hidden md:flex">
          <Button
            variant="ghost"
            asChild
            className="text-sm font-medium text-foreground/90 hover:text-foreground"
          >
            <Link
              href="mailto:teukusultanul@gmail.com"
              aria-label="Email Teuku Sulthan"
            >
              Contact
            </Link>
          </Button>
        </div>

        <Button
          className="cursor-pointer"
          variant="ghost"
          size="icon"
          aria-label={ariaLabel}
          title={titleLabel}
          onClick={onToggleTheme}
        >
          <span suppressHydrationWarning>
            {mounted ? (
              isDark ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </span>
        </Button>

        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={[
          "md:hidden fixed inset-0 z-40 transition",
          open
            ? "backdrop-blur-sm bg-foreground/10 opacity-100"
            : "pointer-events-none bg-transparent backdrop-blur-0 opacity-0",
        ].join(" ")}
      />

      <aside
        className={[
          "md:hidden fixed top-0 right-0 z-50 h-screen w-48 sm:w-56",
          "bg-background shadow-xl border-l border-border",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex h-20 items-center justify-between px-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label={ariaLabel}
            title={titleLabel}
            onClick={onToggleTheme}
          >
            <span suppressHydrationWarning>
              {mounted ? (
                isDark ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col gap-1 px-3 py-2">
          <Button
            variant="ghost"
            className="justify-start"
            onClick={closeAfter}
            asChild
          >
            <Link
              className="w-full text-md text-foreground/90 hover:text-foreground"
              href="#experiences"
            >
              Experiences
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={closeAfter}
            asChild
          >
            <Link
              className="w-full text-md text-foreground/90 hover:text-foreground"
              href="#skills"
            >
              Skills
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={closeAfter}
            asChild
          >
            <Link
              className="w-full text-md text-foreground/90 hover:text-foreground"
              href="#projects"
            >
              Projects
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="justify-center text-sm"
            onClick={closeAfter}
            asChild
          >
            <Link
              className="text-foreground/90 hover:text-foreground"
              href="#contact"
            >
              Contact
            </Link>
          </Button>
        </div>
      </aside>
    </nav>
  );
}
