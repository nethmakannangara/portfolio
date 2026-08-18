"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectItem } from "@/data/projects";

export interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
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
        <div className="bg-white border border-zinc-150 rounded-2xl flex items-center justify-center relative overflow-hidden aspect-video group/slider select-none">
          {images.length > 0 ? (
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Active Slide Image */}
              <img
                src={images[currentIndex]}
                alt={`${project.title} screenshot ${currentIndex + 1}`}
                className="w-full h-full object-contain transition-all duration-300 select-none pointer-events-none"
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
        <p className="text-xs text-zinc-500 mt-3 leading-relaxed h-15 overflow-hidden line-clamp-4 text-ellipsis">
          {project.description}
        </p>

      </div>

      {/* Tech Tags & Links Footer */}
      <div className="flex flex-col gap-4 mt-4">
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-50/80 border border-zinc-100 text-zinc-600 px-2.5 py-0.5 rounded-md font-mono text-[9px] font-semibold tracking-tight"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        {(project.github || project.deploy) && (
          <div className="flex items-center gap-4 pt-3 border-t border-zinc-100">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-emerald-600 transition-colors duration-200 group/link"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>Code</span>
              </a>
            )}
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-emerald-600 transition-colors duration-200 group/link"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
