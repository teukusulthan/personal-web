import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiTypescript,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

const ShadcnFallback = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M6 3h12l-3 6 3 6H6l3-6-3-6z" />
  </svg>
);

export default function Stack() {
  const topLogos = [
    {
      node: <SiReact className="text-[#61DAFB]" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiNextdotjs className="text-black dark:text-white" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTailwindcss className="text-[#38BDF8]" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: SiShadcnui ? (
        <SiShadcnui className="text-black dark:text-white" />
      ) : (
        <ShadcnFallback className="w-[1em] h-[1em] fill-black dark:fill-white" />
      ),
      title: "shadcn/ui",
      href: "https://ui.shadcn.com",
    },
    {
      node: <SiTypescript className="text-[#3178C6]" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiMui className="text-[#007FFF]" />,
      title: "MUI",
      href: "https://mui.com",
    },
  ];

  const bottomLogos = [
    {
      node: <SiNodedotjs className="text-[#339933]" />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiExpress className="text-black dark:text-white" />,
      title: "Express",
      href: "https://expressjs.com",
    },
    {
      node: <SiPrisma className="text-[#2D3748]" />,
      title: "Prisma",
      href: "https://www.prisma.io",
    },
    {
      node: <SiPostgresql className="text-[#4169E1]" />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      node: <SiSupabase className="text-[#3ECF8E]" />,
      title: "Supabase",
      href: "https://supabase.com",
    },
  ];

  return (
    <section id="stacks" className="h-screen px-15 flex items-center">
      <div className="w-full mx-auto min-w-0">
        <h1 className="text-3xl font-bold mb-2 tracking-tight text-center">
          TECH STACKS.
        </h1>
        <h2 className="text-center text-sidebar-ring text-md mb-15 tracking-wider">
          These are all the tech stacks that I have used in my software
          engineering journey.
        </h2>

        <div className="relative h-24 sm:h-28 md:h-32 w-full mb-12 overflow-hidden">
          <LogoLoop
            logos={topLogos}
            speed={30}
            direction="left"
            logoHeight={88}
            gap={40}
            pauseOnHover
            scaleOnHover
            ariaLabel="Top technologies"
            className="w-full"
            style={{ width: "100%" }}
          />
          <div className="pointer-events-none absolute inset-0 flex justify-between">
            <div className="w-16 md:w-36 bg-linear-to-r from-background to-transparent" />
            <div className="w-16 md:w-36 bg-linear-to-l from-background to-transparent" />
          </div>
        </div>

        <div className="relative h-24 sm:h-28 md:h-32 w-full overflow-hidden">
          <LogoLoop
            logos={bottomLogos}
            speed={30}
            direction="right"
            logoHeight={88}
            gap={40}
            pauseOnHover
            scaleOnHover
            ariaLabel="Backend & data stack"
            className="w-full"
            style={{ width: "100%" }}
          />
          <div className="pointer-events-none absolute inset-0 flex justify-between">
            <div className="w-16 md:w-36 bg-linear-to-r from-background to-transparent" />
            <div className="w-16  md:w-36 bg-linear-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
