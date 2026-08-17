export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  images?: string[];
  link?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "1",
    title: "EduSys System",
    description: "Full-featured ecommerce dashboard using Next.js, Shadcn Charts, and Tailwind v4. Builds real-time user insights.",
    tags: ["React", "Tailwind", "Shadcn UI", "MySQL"],
    image: "/project_placeholder.png",
    images: ["/globe.svg", "/window.svg", "/file.svg"]
  },
  {
    id: "2",
    title: "CareerScale Application",
    description: "A creative studio agency portfolio built with high performance Framer Motion canvas layout transitions.",
    tags: ["Phython", "Django", "React"],
    image: "/project_placeholder.png",
    images: ["/window.svg", "/file.svg", "/globe.svg"]
  },
  {
    id: "3",
    title: "Weather Application",
    description: "An automated workflow builder integrating multiple Large Language Model endpoints for customized agent pipelines.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    image: "/project_placeholder.png",
    images: ["/file.svg", "/globe.svg", "/window.svg"]
  },
  {
    id: "4",
    title: "Calculator",
    description: "A calculator that can perform basic arithmetic operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project_placeholder.png",
    images: ["/globe.svg", "/window.svg"]
  },
  {
    id: "5",
    title: "Clothify Store",
    description: "A clean landing page for a web design agency showcasing modern layouts, responsive styling, and fast performance.",
    tags: ["Java FX", "MySQL"],
    image: "/project_placeholder.png",
    images: ["/window.svg", "/file.svg"]
  },
  {
    id: "6",
    title: "MOS Burger - Web Base POS System",
    description: "A clean landing page for a web design agency showcasing modern layouts, responsive styling, and fast performance.",
    tags: ["Java FX", "MySQL"],
    image: "/project_placeholder.png",
    images: ["/window.svg", "/file.svg"]
  }
];
