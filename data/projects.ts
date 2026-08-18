export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  images?: string[];
  link?: string;
  github?: string;
  deploy?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "1",
    title: "EduSys System",
    description: "A web-based Learning Management System that lets institutions manage students, and deliver assignments and exams online, while tracking each student's readiness for industry.",
    tags: ["React", "Tailwind", "Shadcn UI", "SpringBoot", "MySQL"],
    images: ["/edusys_01.png", "/edusys_02.png", "/edusys_03.png"],
  },
  {
    id: "2",
    title: "CareerScale Application",
    description: "An application that tracks student progress over time and evaluates their readiness to enter the industry, helping students and institutions identify skill gaps before graduation.",
    tags: ["Python", "Django", "React"],
    images: ["/careerscale_01.png"],
    deploy: "https://careerscale.icet.lk/login"
  },
  {
    id: "3",
    title: "Weather Application",
    description: "A web application that shows real-time weather information for any location, giving users up-to-date conditions and forecasts.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    images: ["/weather_01.png", "/weather_02.png"],
    github: "https://github.com/nethmakannangara/Weather",
    deploy: "https://nethmakannangara.github.io/Weather/"
  },
  {
    id: "4",
    title: "Clothify Store",
    description: "A standalone desktop application built as a Point of Sale (POS) system for a clothing store, handling sales, inventory, and store operations.",
    tags: ["JavaFX (with JFoenix)", "Hibernate", "MySQL", "Maven"],
    images: ["/clothify_store_01.jpg", "/clothify_store_02.jpg", "/clothify_store_03.jpg", "/clothify_store_04.jpg"],
    github: "https://github.com/nethmakannangara/ClothifyStore_javaFX"
  },
  {
    id: "5",
    title: "Calculator",
    description: "A calculator that can perform basic arithmetic operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    images: ["/calculator_01.png"],
    github: "https://github.com/nethmakannangara/Calculator",
  },
  {
    id: "6",
    title: "MOS Burger - Web Base POS System",
    description: "A web-based Point of Sale (POS) system built for a burger shop, streamlining order taking, billing, and daily operations.",
    tags: ["HTML", "CSS", "JavaScript"],
    images: ["/mos_01.png", "/mos_02.png", "/mos_03.png"],
    github: "https://github.com/nethmakannangara/MosBurgers"
  }
];
