import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import FadeContent from "@/components/FadeContent";

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
      </FadeContent>
    </main>
  );
}
