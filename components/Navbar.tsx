"use client";

import * as React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

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

  return (
    <nav className="h-20 px-6 md:px-8 lg:px-16 flex justify-between relative">
      <div className="h-full flex items-center">
        <p className="cursor-pointer hover:text-white tracking-widest text-sm">
          TEUKU SULTHAN.
        </p>
      </div>

      <div className="hidden md:flex gap-2 justify-center items-center">
        <Button>
          <Link
            className="text-md text-neutral-300 transition-all duration-300 hover:text-white"
            href={"#skills"}
          >
            Skills
          </Link>
        </Button>
        <Button>
          <Link
            className="text-md text-neutral-300 transition-all duration-300 hover:text-white"
            href={"#projects"}
          >
            Projects
          </Link>
        </Button>
        <Button>
          <Link
            className="text-md text-neutral-300 transition-all duration-300 hover:text-white"
            href={"#experiences"}
          >
            Experiences
          </Link>
        </Button>
      </div>

      <div className="hidden md:flex h-full items-center">
        <Button
          variant="ghost"
          className="text-neutral-200 hover:text-white cursor-pointer text-sm"
        >
          Contact
        </Button>
      </div>

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

      <div
        onClick={() => setOpen(false)}
        className={[
          "md:hidden fixed inset-0 z-40 transition",
          open
            ? "backdrop-blur-sm bg-black/40 opacity-100"
            : "pointer-events-none bg-transparent backdrop-blur-0 opacity-0",
        ].join(" ")}
      />

      <aside
        className={[
          "md:hidden fixed top-0 right-0 z-50 h-screen",
          "w-48 sm:w-56",
          "bg-background shadow-xl",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
          "backdrop-blur",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-end h-20 px-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="px-3 py-2 flex flex-col gap-1">
          <Button
            variant="ghost"
            className="justify-start"
            onClick={closeAfter}
          >
            <Link
              className="w-full text-md text-neutral-300 transition-all duration-300 hover:text-white"
              href={"#experiences"}
            >
              Experiences
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={closeAfter}
          >
            <Link
              className="w-full text-md text-neutral-300 transition-all duration-300 hover:text-white"
              href={"#skills"}
            >
              Skills
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={closeAfter}
          >
            <Link
              className="w-full text-md text-neutral-300 transition-all duration-300 hover:text-white"
              href={"#projects"}
            >
              Projects
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-sm"
            onClick={closeAfter}
          >
            <Link href={"#contact"}>Contact</Link>
          </Button>
        </div>
      </aside>
    </nav>
  );
}
