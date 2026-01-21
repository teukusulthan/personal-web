"use client";

import Image from "next/image";
import Link from "next/link";
import kasmini from "@/public/kasmini.jpg";
import circle from "@/public/circle.jpg";
import instacard from "@/public/instacard.jpg";
import creaflo from "@/public/creaflo.jpg";
import taksim from "@/public/taksim.png";
import nyatet from "@/public/nyatet.jpg";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiNestjs,
} from "react-icons/si";
import { Github, ExternalLink } from "lucide-react";
import { JSX } from "react";

type Tech =
  | "react"
  | "next"
  | "tailwind"
  | "ts"
  | "shadcn"
  | "node"
  | "express"
  | "prisma"
  | "postgres"
  | "supabase"
  | "redis"
  | "nest";

const techIcon: Record<Tech, JSX.Element> = {
  react: <SiReact className="size-5" title="React" />,
  next: <SiNextdotjs className="size-5" title="Next.js" />,
  tailwind: <SiTailwindcss className="size-5" title="Tailwind CSS" />,
  ts: <SiTypescript className="size-5" title="TypeScript" />,
  shadcn: <SiShadcnui className="size-5" title="shadcn/ui" />,
  node: <SiNodedotjs className="size-5" title="Node.js" />,
  express: <SiExpress className="size-5" title="Express" />,
  prisma: <SiPrisma className="size-5" title="Prisma" />,
  postgres: <SiPostgresql className="size-5" title="PostgreSQL" />,
  supabase: <SiSupabase className="size-5" title="Supabase" />,
  redis: <SiRedis className="size-5" title="Redis" />,
  nest: <SiNestjs className="size-5" title="NestJS" />,
};

type Project = {
  title: string;
  href?: string;
  img: any;
  desc: string;
  techs: Tech[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Instacard",
    href: "#",
    img: instacard,
    desc: "A link in bio with public link customization, social link manager, and public profile page.  Created with Next.js and Express.js",
    techs: [
      "next",
      "tailwind",
      "ts",
      "shadcn",
      "express",
      "prisma",
      "postgres",
    ],
    github: "https://github.com/teukusulthan/instacard-fe",
    live: "https://try-instacard.vercel.app",
  },
  {
    title: "Creaflo",
    href: "#",
    img: creaflo,
    desc: "An AI-powered content platform that generates on-brand ideas, hooks, captions, and hashtags—faster, more consistent, and ready to publish.",
    techs: ["next", "tailwind", "ts", "express", "prisma", "node", "postgres"],
    github: "https://github.com/teukusulthan/creaflo-fe",
    live: "",
  },
  {
    title: "Taksim Medika",
    href: "https://kliniktaksimmedika.com",
    img: taksim,
    desc: "A modern medical portal for Klinik Utama Taksim Medika, featuring real-time doctor scheduling and online booking to enhance digital patient engagement and accessibility.",
    techs: ["next", "tailwind", "ts", "express", "prisma", "node", "postgres"],
    github: "",
    live: "https://edu-client-production.up.railway.app",
  },
  {
    title: "Circle",
    href: "#",
    img: circle,
    desc: "A full-stack social platform built with React and Express, featuring real-time communication powered by WebSockets and high-performance caching with Redis.",
    techs: [
      "react",
      "tailwind",
      "ts",
      "express",
      "prisma",
      "postgres",
      "redis",
    ],
    github: "https://github.com/teukusulthan/circle-fe",
    live: "",
  },
  {
    title: "Nyatet",
    href: "https://edu-client-production.up.railway.app/",
    img: nyatet,
    desc: "A student-centric platform enabling the sale of academic materials, featuring an built-in AI summarizer that automatically condenses notes into sellable summaries for faster, more efficient learning.",
    techs: ["next", "tailwind", "ts", "nest", "prisma", "node", "postgres"],
    github: "",
    live: "https://edu-client-production.up.railway.app",
  },
  {
    title: "Kasmini",
    href: "https://kasmini.teukusulthan.xyz",
    img: kasmini,
    desc: "A Telegram-based sales tracker for small businesses, featuring product CRUD, sales logging, and daily recap. Created with N8N, Neon Postgres, and Next.js",
    techs: ["next", "tailwind", "ts", "postgres", "shadcn"],
    github: "https://github.com/teukusulthan/kasmini-app",
    live: "https://kasmini.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start px-6 md:px-10 pt-30 pb-12 md:pb-16"
    >
      <div className="max-w-7xl w-full">
        <header className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center leading-[1.1]">
            RECENT PROJECTS.
          </h1>
          <p className="mt-2 text-md text-sidebar-ring tracking-wider text-center leading-tight">
            The following are projects that I have worked on during my software
            engineering journey.
          </p>
        </header>

        <div className="grid px-4 sm:px-8 lg:px-0 lg:mx-20 grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <Card
              key={i}
              className="group overflow-hidden rounded-xl border border-border/60 bg-card/60 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video w-full rounded-t-xl overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="block object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                  />
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-2">
                <h3 className="text-lg md:text-xl font-semibold leading-tight">
                  {p.href ? (
                    <Link
                      href={p.href}
                      className="hover:underline underline-offset-4"
                    >
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] text-sidebar-ring/60 leading-relaxed line-clamp-3">
                  {p.desc}
                </p>

                <div className="mt-4 flex items-center gap-4 flex-wrap text-sidebar-ring/60">
                  {p.techs.map((t, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center opacity-90 group-hover:opacity-100 transition-opacity"
                      title={t}
                    >
                      {techIcon[t]}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-2">
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  {p.github ? (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="sm:flex-1"
                    >
                      <Link
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  ) : null}
                  {p.live ? (
                    <Button
                      asChild
                      size="sm"
                      className="sm:flex-1 bg-primary/90 hover:bg-primary transition-all duration-300"
                    >
                      <Link
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Preview
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
