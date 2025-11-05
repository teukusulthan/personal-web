import { Mail } from "lucide-react";
import Link from "next/link";
import { RiTelegram2Line } from "react-icons/ri";

export default function Cta() {
  return (
    <section id="contact" className="h-[70vh]">
      <div className="mx-auto max-w-3xl px-10 md:px-20 pt-10">
        <h1 className="text-center font-bold text-2xl sm:text-3xl tracking-tight">
          LET'S BUILD SOMETHING TOGETHER.
        </h1>

        <h2 className="mt-3 text-center text-sidebar-ring text-md tracking-wide ">
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row">
          <Link
            href="mailto:teukusultanul@gmail.com"
            className="inline-flex items-center gap-2 text-sm md:text-base text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md px-2 py-1"
          >
            <Mail className="h-4 w-4" />
            <span>teukusultanul@gmail.com</span>
          </Link>

          <span className="hidden md:inline-block select-none text-muted-foreground/60">
            |
          </span>

          <Link
            href="https://t.me/teukusulthan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md px-2 py-1"
            aria-label="Contact via Telegram"
          >
            <RiTelegram2Line className="h-5 w-5" />
            <span>Contact via Telegram</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
