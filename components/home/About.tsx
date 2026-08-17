import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full max-w-5xl mx-auto px-6 py-20 md:py-28 md:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

        {/* Left Side: Portrait Card Image */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative w-full max-w-[400px] aspect-square rounded-[32px] border border-zinc-100 bg-zinc-50/50 p-5 shadow-sm">
            <div className="w-full h-full rounded-2xl border border-zinc-200/80 overflow-hidden bg-zinc-100 relative">
              <img
                src="/NK_image.jpg"
                alt="Nethma Kannangara"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 select-none pointer-events-none"
              />
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
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/nethmakannangara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-150 rounded-xl bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 shadow-sm transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nethma-chathuranga/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-150 rounded-xl bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 shadow-sm transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">LinkedIn</span>
            </a>
          </div>



        </div>

      </div>
    </section>
  );
}
