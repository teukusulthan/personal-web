"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import dumbways from "@/public/dumbways.png";

type Experience = {
  title: string;
  company?: string;
  companyHref?: string;
  logo?: StaticImageData | string;
  period?: string;
  points?: string[];
  skills?: string[];
};

const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack Web Development Student",
    company: "DumbWays Indonesia",
    companyHref: "https://dumbways.id",
    logo: dumbways,
    period: "March 2025 – Nov 2025",
    points: [
      "Build multiple full-stack project using modern tech stacks.",
      "learn to solve difficult real problems in application developmentl",
      "Learn all the fundamental of web development.",
    ],
    skills: ["React", "Next.js", "Express", "PostgreSQL"],
  },
];

function LogoBox({
  src,
  alt,
  fallback = "•",
}: {
  src?: StaticImageData | string;
  alt: string;
  fallback?: string;
}) {
  if (!src) {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-muted/40 ring-1 ring-border/60 text-sm font-semibold">
        {fallback}
      </div>
    );
  }
  return (
    <div className="relative h-14 w-14 overflow-hidden rounded-lg ring-1 ring-border/60">
      <Image alt={alt} src={src} sizes="56px" className="object-cover" />
    </div>
  );
}

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="mb-6 text-center md:mb-8">
          <h1 className="text-3xl mt-10 font-bold tracking-tight">
            EXPERIENCES.
          </h1>
          <p className="mt-2 tracking-wider text-md text-sidebar-ring">
            The following is my previous experience as a developer.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {EXPERIENCES.map((p, i) => (
            <Card
              key={i}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="mb-4 md:mb-0 md:mt-1 shrink-0">
                  <LogoBox
                    src={p.logo}
                    alt={`${p.company ?? "Company"} logo`}
                    fallback={p.company?.[0] ?? "•"}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                        {p.title}
                      </h3>
                      {p.company ? (
                        <div className="mt-1">
                          {p.companyHref ? (
                            <Link
                              href={p.companyHref}
                              className="text-emerald-400 hover:underline underline-offset-4"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {p.company}
                            </Link>
                          ) : (
                            <span className="text-emerald-400">
                              {p.company}
                            </span>
                          )}
                        </div>
                      ) : null}
                    </div>

                    <div className="text-sidebar-ring whitespace-nowrap text-sm md:text-base md:pl-6 md:self-start">
                      {p.period ?? "—"}
                    </div>
                  </div>

                  {p.points?.length ? (
                    <ul className="mt-4 space-y-2 text-sidebar-ring">
                      {p.points.map((line, idx) => (
                        <li key={idx} className="flex gap-3 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                          <span className="text-[15px] md:text-base">
                            {line}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {p.skills?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.skills.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-muted/60 ring-1 ring-border/50 text-foreground/80 text-xs md:text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
