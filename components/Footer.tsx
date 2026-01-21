"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/50">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm tracking-widest text-foreground">
              TEUKU SULTHAN.
            </p>
            <p className="text-xs text-muted-foreground">
              Build. Ship. Iterate.
            </p>
          </div>

          <p className="text-xs md:text-sm tracking-widest text-muted-foreground">
            BUILT WITH LOVE BY TEUKU SULTHAN.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="mailto:teukusulthanul@gmail.com"
              className="text-sidebar-ring hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/teukusulthan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sidebar-ring hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/teuku-sulthan-4171a32a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sidebar-ring hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
