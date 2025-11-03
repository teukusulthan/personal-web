import Image from "next/image";
import sulthan from "../public/sulthan.jpg";
import { Button } from "./ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[calc(100vh-65px)] px-5 md:px-10 pt-20 sm:pt-0 md:pt-20">
      <div className="mx-auto flex h-full max-w-7xl items-start md:items-center pt-12 sm:pt-16 md:pt-0 px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="order-1 md:order-2 md:col-span-5">
            <div className="mx-auto w-48 sm:w-56 md:w-64 lg:w-80">
              <div className="relative aspect-4/5 overflow-hidden rounded-md ring-1 ring-border/60">
                <Image
                  src={sulthan}
                  alt="Teuku Sulthan"
                  fill
                  sizes="(max-width: 768px) 60vw, (max-width: 1024px) 35vw, 420px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1 md:col-span-7 text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Hi, I’m Teuku Sulthan.
            </h1>
            <h2 className="mt-2 text-md text-foreground/80 sm:text-2xl">
              Full Stack Software Engineer
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/80 sm:text-md mx-auto md:mx-0">
              I design, build, and operate digital products end-to-end
              clarifying the problem, shaping the solution, and ensuring it
              performs in the real world. I focus on clear user journeys,
              reliable execution.
            </p>

            <Button
              asChild
              className="mt-6 w-35 sm:w-40 mr-4 gap-2 rounded-lg font-medium"
            >
              <Link
                href="mailto:teukusultanul@gmail.com"
                aria-label="Email Teuku Sulthan"
              >
                <Mail />
                Contact Me
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="mt-6 rounded-lg border border-primary w-35 sm:w-40 gap-2"
            >
              <Link
                href="https://github.com/teukusulthan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
              >
                <Github />
                Github
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
