"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const blur = true;
  const duration = 2000;
  const easing = "ease-out";
  const delay = 0;
  const initialOpacity = 0;

  const [mountedFade, setMountedFade] = React.useState(false);
  React.useEffect(() => {
    const t: ReturnType<typeof setTimeout> = setTimeout(
      () => setMountedFade(true),
      delay
    );
    return () => clearTimeout(t);
  }, [delay]);

  const fadeStyle: React.CSSProperties = {
    opacity: mountedFade ? 1 : initialOpacity,
    transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
    filter: blur ? (mountedFade ? "blur(0px)" : "blur(10px)") : "none",
  };

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

  const smoothGo =
    (id: string, after?: () => void) => (e: React.MouseEvent) => {
      e.preventDefault();
      after?.();
      requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", `#${id}`);
      });
    };

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

  const [portalReady, setPortalReady] = React.useState(false);
  React.useEffect(() => setPortalReady(true), []);

  return (
    <>
      <nav
        style={fadeStyle}
        className="fixed top-0 left-0 right-0 z-50 flex h-16 justify-between px-6 md:px-8 lg:px-16 bg-background text-foreground"
      >
        <div className="flex h-full items-center">
          <a
            href="#hero"
            onClick={smoothGo("hero")}
            className="cursor-pointer tracking-widest text-sm hover:opacity-90"
          >
            TEUKU SULTHAN.
          </a>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2">
          <Button variant="ghost" asChild className="font-medium">
            <a
              href="#stacks"
              onClick={smoothGo("stacks")}
              className="text-md text-foreground/90 hover:text-foreground transition-all"
            >
              Tech
            </a>
          </Button>
          <Button variant="ghost" asChild className="font-medium">
            <a
              href="#projects"
              onClick={smoothGo("projects")}
              className="text-md text-foreground/90 hover:text-foreground transition-all"
            >
              Projects
            </a>
          </Button>
          <Button variant="ghost" asChild className="font-medium">
            <a
              href="#experiences"
              onClick={smoothGo("experiences")}
              className="text-md text-foreground/90 hover:text-foreground transition-all"
            >
              Experiences
            </a>
          </Button>
        </div>

        <div className="flex h-full items-center gap-1">
          <div className="hidden md:flex">
            <Button
              variant="ghost"
              asChild
              className="text-sm font-medium text-foreground/90 hover:text-foreground"
            >
              <a href="#contact" aria-label="Email Teuku Sulthan">
                Contact
              </a>
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
      </nav>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-16 h-28 bg-background z-40 mask-[linear-gradient(to_bottom,black,transparent_85%)]"
      />

      {portalReady &&
        createPortal(
          <>
            <div
              onClick={() => setOpen(false)}
              className={[
                "fixed inset-0 z-90 transition",
                open
                  ? "backdrop-blur-sm bg-foreground/10 opacity-100"
                  : "pointer-events-none bg-transparent backdrop-blur-0 opacity-0",
              ].join(" ")}
            />
            <aside
              className={[
                "fixed top-0 right-0 z-100 h-screen w-48 sm:w-56",
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
                <Button variant="ghost" className="justify-start" asChild>
                  <a
                    className="w-full text-md text-foreground/90 hover:text-foreground"
                    href="#stacks"
                    onClick={smoothGo("stacks", () => setOpen(false))}
                  >
                    Tech
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <a
                    className="w-full text-md text-foreground/90 hover:text-foreground"
                    href="#projects"
                    onClick={smoothGo("projects", () => setOpen(false))}
                  >
                    Projects
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <a
                    className="w-full text-md text-foreground/90 hover:text-foreground"
                    href="#experiences"
                    onClick={smoothGo("experiences", () => setOpen(false))}
                  >
                    Experiences
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-sm"
                  asChild
                >
                  <a
                    className="text-foreground/90 hover:text-foreground"
                    href="#contact"
                    onClick={smoothGo("contact", () => setOpen(false))}
                  >
                    Contact
                  </a>
                </Button>
              </div>
            </aside>
          </>,
          document.body
        )}
    </>
  );
}
