import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Education from "@/components/home/Education";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Education />
      <Projects />
    </main>
  );
}
