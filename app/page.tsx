import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import FadeContent from "@/components/FadeContent";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <FadeContent
        blur={true}
        duration={2000}
        easing="ease-out"
        initialOpacity={0}
      >
        <Hero />
        <Stack />
        <Projects />
        <Experiences />
        <Contact />
      </FadeContent>
    </main>
  );
}
