"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavbarProps {
  logoText?: string;
  logoSrc?: string;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ logoText = "Nethma Kannangara", logoSrc = "/portfolio_page_logo.jpg" }: NavbarProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Monitor scroll for styling updates
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Monitor scroll to active section (Scrollspy)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for navbar height

      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    return activeSection === href.replace("#", "");
  };

  // Close mobile menu on navigate
  const handleNavLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href.replace("#", ""));
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-b px-6 transition-all duration-300 md:px-10",
          isScrolled
            ? "border-zinc-200/80 bg-white/90 backdrop-blur-md shadow-sm"
            : "border-transparent bg-white/50 backdrop-blur-sm"
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={logoText}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <span className="font-space-grotesk text-2xl font-extrabold tracking-tighter text-zinc-900 transition-colors duration-300 group-hover:text-emerald-600">
              {logoText}
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <li
                  key={link.href}
                  className="relative py-2"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.href)}
                    className={cn(
                      "font-mono text-xs font-semibold tracking-widest uppercase transition-colors duration-300",
                      active ? "text-emerald-600" : "text-zinc-600 hover:text-black"
                    )}
                  >
                    {link.label}
                  </Link>

                  {/* Active Link Underline */}
                  {active && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover Highlight Underline */}
                  {!active && hoveredIndex === index && (
                    <motion.div
                      layoutId="hoverUnderline"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.2)]"
                      transition={{ type: "spring", stiffness: 350, damping: 35 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden items-center md:flex">
          <Link href="#contact">
            <Button
              className="relative overflow-hidden rounded-full bg-zinc-900 px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] border-transparent"
            >
              Start a Project
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 transition-colors duration-200 hover:bg-zinc-100 md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-white/98 px-6 pt-28 pb-10 backdrop-blur-xl border-t border-zinc-100 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleNavLinkClick(link.href)}
                        className={cn(
                          "block font-space-grotesk text-3xl font-bold tracking-tight transition-colors duration-200",
                          active ? "text-emerald-600" : "text-zinc-700 hover:text-black"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="flex flex-col gap-4"
            >
              <div className="h-[1px] w-full bg-zinc-200" />
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full rounded-full bg-zinc-900 py-6 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-zinc-800">
                  Start a Project
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
