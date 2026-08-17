import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full max-w-5xl mx-auto px-6 py-20 md:py-28 md:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

        {/* Left Side: Portrait Card Placeholder */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative w-full max-w-[340px] aspect-square rounded-[32px] border border-zinc-100 bg-zinc-50/50 p-5 shadow-sm">
            <div className="w-full h-full rounded-2xl border border-zinc-200/80 bg-zinc-100 flex items-center justify-center">
              <span className="font-serif text-3xl font-semibold tracking-widest text-zinc-400/80 uppercase select-none">
                Portrait
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Skill Cards */}
        <div className="md:col-span-7 flex flex-col justify-center">
          {/* Tagline Accent Line */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-emerald-500 rounded" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600">
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mt-4 leading-tight">
            Engineering with Passion and Precision
          </h2>

          {/* Description */}
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mt-4">
            Hi, I'm Nethma Kannangara - a full-stack developer and B.Sc. (Hons) IT(UG) at the University of Kelaniya. I love turning ideas into real, working things that fit the modern world, using technology as my toolkit. For me, great development isn't just about code; it's about closing the gap between what's imagined and what's actually shipped, pixel by pixel.
          </p>



        </div>

      </div>
    </section>
  );
}
