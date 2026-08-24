"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { projectsData, ProjectItem } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Listen to vertical scroll progression and update the pagination index
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) {
        setActivePage(0);
      } else if (latest < 0.66) {
        setActivePage(1);
      } else {
        setActivePage(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Chunk projects into pages of 2 items
  const projectChunks: ProjectItem[][] = [];
  for (let i = 0; i < projectsData.length; i += 2) {
    projectChunks.push(projectsData.slice(i, i + 2));
  }

  // Translate horizontal tracks using percentage-based steps (0% to -200%)
  // Since we have 3 pages, translation is exactly 0%, -100%, and -200% of the viewport width.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <div id="projects" className="relative w-full">
      
      {/* Desktop Sticky Scroll Section (md and up) */}
      <section ref={targetRef} className="relative h-[300vh] w-full md:block hidden">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-white dark:bg-zinc-950 py-16 transition-colors duration-300">
          
          <div className="w-full max-w-5xl mx-auto px-10 flex flex-col h-[80vh] justify-between">
            
            {/* Header Title */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-emerald-500 rounded" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
                  Portfolio
                </span>
              </div>
              <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl mt-4">
                Recent Projects
              </h2>
            </div>

            {/* Horizontal Track Wrapper */}
            <div className="w-full flex-1 flex items-center relative overflow-hidden mt-1">
              <motion.div
                style={{ x }}
                className="flex w-full select-none"
              >
                {projectChunks.map((chunk, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex gap-8 px-1"
                  >
                    {chunk.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        className="w-[calc((100%-32px)/2)]"
                      />
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Downward indicator info & Pagination dots */}
            <div className="flex flex-row justify-between items-center w-full mt-3 pr-4 select-none">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-350 ease-out",
                      i === activePage ? "bg-emerald-500 w-7" : "bg-zinc-200 dark:bg-zinc-800 w-2.5"
                    )}
                  />
                ))}
              </div>

              {/* Scroll status call-to-action */}
              <div className="flex text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest gap-2.5 items-center">
                <span>Scroll down to reveal projects</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* Mobile Vertical Grid (md hidden) */}
      <section className="relative w-full py-16 px-6 md:hidden block">
        <div className="w-full max-w-5xl mx-auto flex flex-col">
          
          {/* Header Title */}
          <div className="flex flex-col mb-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-emerald-500 rounded" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
                Portfolio
              </span>
            </div>
            <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-4">
              Recent Projects
            </h2>
          </div>

          {/* Vertical Stack */}
          <div className="flex flex-col gap-6">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="w-full"
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}


