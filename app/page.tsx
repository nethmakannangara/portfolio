import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Education from "@/components/home/Education";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
