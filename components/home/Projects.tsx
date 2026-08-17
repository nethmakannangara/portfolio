"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { projectsData, ProjectItem } from "@/data/projects";

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
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-white py-16">
          
          <div className="w-full max-w-5xl mx-auto px-10 flex flex-col h-[80vh] justify-between">
            
            {/* Header Title */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-emerald-500 rounded" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Portfolio
                </span>
              </div>
              <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mt-4">
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
            <div className="flex flex-row justify-between items-center w-full mt-6 pr-4 select-none">
              
              {/* Pagination Dots (matching active page scroll state) */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-350 ease-out",
                      i === activePage ? "bg-emerald-500 w-7" : "bg-zinc-200 w-2.5"
                    )}
                  />
                ))}
              </div>

              {/* Scroll status call-to-action */}
              <div className="flex text-[10px] font-mono text-zinc-400 uppercase tracking-widest gap-2.5 items-center">
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
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600">
                Portfolio
              </span>
            </div>
            <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-zinc-900 mt-4">
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

/* Sub-Component: ProjectCard with internal image carousel controls */
interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

function ProjectCard({ project, className }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images || [];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className={cn(
        "bg-white border border-zinc-150 rounded-[24px] p-5 shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-300 group flex flex-col justify-between",
        className
      )}
    >
      <div>
        
        {/* Image Slider Wrapper */}
        <div className="bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center relative overflow-hidden aspect-[16/10] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-100/50 via-zinc-50 to-zinc-50 group/slider select-none">
          {images.length > 0 ? (
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Active Slide Image */}
              <img
                src={images[currentIndex]}
                alt={`${project.title} screenshot ${currentIndex + 1}`}
                className="w-16 h-16 object-contain p-2 transition-all duration-300 select-none pointer-events-none"
              />

              {/* Slide Navigation Overlay (visible on hover) */}
              {images.length > 1 && (
                <>
                  {/* Previous Chevron */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 border border-zinc-200/80 flex items-center justify-center shadow-sm opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white hover:scale-105 duration-200 active:scale-95 cursor-pointer z-10"
                    aria-label="Previous image"
                  >
                    <svg className="w-4 h-4 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next Chevron */}
                  <button
                    onClick={handleNext}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 border border-zinc-200/80 flex items-center justify-center shadow-sm opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white hover:scale-105 duration-200 active:scale-95 cursor-pointer z-10"
                    aria-label="Next image"
                  >
                    <svg className="w-4 h-4 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Slider Pagination Dots */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setCurrentIndex(i);
                        }}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                          i === currentIndex ? "bg-emerald-500 w-3.5" : "bg-zinc-300"
                        )}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:scale-105 transition-transform duration-300">
              [ Project Thumbnail ]
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="font-space-grotesk text-lg font-bold text-zinc-950 mt-4 leading-snug">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-xs text-zinc-500 mt-2 leading-relaxed h-12 overflow-hidden text-ellipsis">
          {project.description}
        </p>

      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-zinc-50/80 border border-zinc-100 text-zinc-600 px-2.5 py-0.5 rounded-md font-mono text-[9px] font-semibold tracking-tight"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}
