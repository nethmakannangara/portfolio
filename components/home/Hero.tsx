import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
    id="home" 
    className="relative flex min-h-[85vh] w-full flex-col items-center justify-center bg-white px-6 font-sans text-zinc-800 md:px-10">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-50/20 via-white to-white" />

      <div className="flex max-w-3xl flex-col items-center gap-6 text-center mt-12">
        
        {/* Availability Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-150 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-700 uppercase shadow-sm">
          <span>Available for Freelance</span>
        </div>

        {/* Hero Headline (Scaled down for visual balance) */}
        <h1 className="font-space-grotesk text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl leading-tight">
          Turning Problems into
          <span className="block text-emerald-700 mt-1">
            Powerful IT Solutions
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base md:text-lg font-normal">
          Hi, I'm a full-stack developer specializing in modern technologies, delivering reliable solutions that combine clean code, smart architecture, and thoughtful design.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-row items-center gap-4 mt-2">
          <a href="#contact">
            <Button className="rounded-full bg-zinc-950 px-6 py-5 min-w-[160px] font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-zinc-800">
              Explore More
            </Button>
          </a>
          <a href="#projects">
            <Button variant="outline" className="rounded-full border border-zinc-200 bg-white px-6 py-5 min-w-[160px] font-mono text-xs font-bold uppercase tracking-widest text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-50">
              View Projects
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
