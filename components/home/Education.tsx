import { cn } from "@/lib/utils";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full max-w-5xl mx-auto px-6 py-20 md:py-28 md:px-10 overflow-hidden"
    >
      {/* Header Tagline & Heading */}
      <div className="flex flex-col mb-5">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-emerald-500 rounded" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600">
            My Journey
          </span>
        </div>
        
        <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mt-4">
          Education & Background
        </h2>
      </div>

      {/* Horizontal Scroll Timeline Wrapper */}
      <div className="hidden md:block w-full overflow-x-auto py-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing">
        <div className="min-w-[1000px] md:min-w-0 md:w-full relative h-[500px] flex items-center">
          
          {/* Main Horizontal Connector Line */}
          <div className="absolute left-0 right-0 h-[3px] bg-emerald-400/70 -translate-y-1/2 top-1/2" />
          
          {/* Timeline Nodes & Stems Container */}
          <div className="absolute left-0 right-0 flex justify-around items-center top-1/2 -translate-y-1/2 px-40 md:px-12">
            {educationData.map((item, index) => {
              // Alternating layout: index % 2 === 1 goes UP, index % 2 === 0 goes DOWN
              const isUp = index % 2 === 1;

              return (
                <div key={item.id} className="relative flex flex-col items-center w-64">
                  
                  {/* Circle Connection Node */}
                  <div
                    className={cn(
                      "w-5.5 h-5.5 rounded-full border-[3.5px] border-white z-20 shadow-sm transition-colors duration-300",
                      item.isActive ? "bg-emerald-500" : "bg-zinc-300"
                    )}
                  />
                  
                  {/* Alternating Vertical Stem Line */}
                  <div
                    className={cn(
                      "absolute w-[1.5px] h-10 bg-zinc-300 z-10",
                      isUp ? "bottom-1/2" : "top-1/2"
                    )}
                  />
                  
                  {/* Floating Content Card */}
                  <div
                    className={cn(
                      "absolute w-[320px] min-h-[210px] bg-white border border-zinc-150 rounded-2xl p-4.5 shadow-[0_6px_24px_rgba(0,0,0,0.05)] text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] z-30",
                      isUp ? "bottom-[calc(50%+40px)]" : "top-[calc(50%+40px)]"
                    )}
                  >
                    {/* Card Header: Logo, Year & Institution */}
                    <div className="flex items-center gap-3 mb-3 text-left">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.institution}
                          className="w-11 h-11 rounded-full border border-zinc-200/60 object-contain p-1.5 bg-zinc-50 shrink-0"
                        />
                      )}
                      <div>
                        {/* Year Tag */}
                        <span
                          className={cn(
                            "font-mono text-xs font-bold uppercase tracking-wider block",
                            item.isActive ? "text-emerald-700" : "text-zinc-600"
                          )}
                        >
                          {item.period}
                        </span>
                        {/* School/College */}
                        <p className="text-xs font-semibold text-zinc-700 italic mt-0.5 leading-tight">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    {/* Degree */}
                    <h4 className="font-space-grotesk text-sm font-bold text-zinc-950 text-left leading-snug">
                      {item.degree}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-zinc-650 mt-2 text-left leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="relative md:hidden flex flex-col gap-8 pl-8 mt-10">
        {/* Main Vertical Connector Line */}
        <div className="absolute left-[13px] top-2 bottom-2 w-[3px] bg-emerald-400/70" />

        {educationData.map((item) => (
          <div key={item.id} className="relative w-full">
            {/* Circle Connection Node */}
            <div
              className={cn(
                "absolute left-[-28px] top-2 w-5.5 h-5.5 rounded-full border-[3.5px] border-white z-20 shadow-sm transition-colors duration-300",
                item.isActive ? "bg-emerald-500" : "bg-zinc-300"
              )}
            />

            {/* Content Card */}
            <div
              className="w-full bg-white border border-zinc-150 rounded-2xl p-4.5 shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] hover:scale-[1.02] z-30"
            >
              {/* Card Header: Logo, Year & Institution */}
              <div className="flex items-center gap-3 mb-3 text-left">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.institution}
                    className="w-11 h-11 rounded-full border border-zinc-200/60 object-contain p-1.5 bg-zinc-50 shrink-0"
                  />
                )}
                <div>
                  {/* Year Tag */}
                  <span
                    className={cn(
                      "font-mono text-xs font-bold uppercase tracking-wider block",
                      item.isActive ? "text-emerald-700" : "text-zinc-600"
                    )}
                  >
                    {item.period}
                  </span>
                  {/* School/College */}
                  <p className="text-xs font-semibold text-zinc-700 italic mt-0.5 leading-tight">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Degree */}
              <h4 className="font-space-grotesk text-sm font-bold text-zinc-950 text-left leading-snug">
                {item.degree}
              </h4>

              {/* Description */}
              <p className="text-xs text-zinc-650 mt-2 text-left leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
