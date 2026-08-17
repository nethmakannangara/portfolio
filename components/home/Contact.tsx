import { Button } from "@/components/ui/button";

export default function Contact() {
  const emailAddress = "nethmakannangara.contact@gmail.com";

  return (
    <section
      id="contact"
      className="relative w-full max-w-4xl mx-auto px-6 py-20 md:py-28 md:px-10 text-center flex flex-col items-center"
    >
      
      {/* Accent Tag Line */}
      <div className="flex items-center gap-3 justify-center">
        <span className="h-[2px] w-8 bg-emerald-500 rounded" />
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600">
          Get In Touch
        </span>
      </div>

      {/* Heading */}
      <h2 className="font-space-grotesk text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl max-w-2xl mt-6 leading-tight">
        Let's create something legendary together.
      </h2>

      {/* Subheading */}
      <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-xl mt-6 font-normal">
        Whether you have a project idea, want to talk design, or just say hello - my inbox is always open.
      </p>

      {/* Email Card Box */}
      <div className="mt-12 bg-zinc-50/40 border border-zinc-150 rounded-[24px] px-8 py-8 max-w-lg w-full shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-shadow duration-300 flex flex-col items-center">
        <span className="font-mono text-[10px] font-bold text-zinc-450 uppercase tracking-widest">
          Email Me Directly
        </span>
        <a
          href={`mailto:${emailAddress}`}
          className="font-serif text-base sm:text-lg md:text-xl font-bold text-zinc-950 mt-2.5 hover:text-emerald-600 transition-colors duration-200 select-all break-all text-center"
        >
          {emailAddress}
        </a>
      </div>

      {/* CTA Send Button */}
      <a href={`mailto:${emailAddress}`} className="mt-6">
        <Button className="rounded-full bg-zinc-950 px-8 py-5 min-w-[220px] font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-zinc-800 shadow-sm">
          Send A Message
        </Button>
      </a>

    </section>
  );
}
