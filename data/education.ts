export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
  isActive?: boolean;
  image?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "1",
    period: "2008 - 2023",
    degree: "G.C.E. Advanced Level (Physical Science Stream)",
    institution: "C.W.W. Kannangara Central College",
    description: "Completed primary and secondary education, majoring in Combined Mathematics, Physics, and Chemistry for the G.C.E. Advanced Level examination.",
    isActive: false,
    image: "/globe.svg",
  },
  {
    id: "2",
    period: "2023 — 2024",
    degree: "Diploma in Software Engineering",
    institution: "Institute of Computer Engineering Technology",
    description: "Built a foundation in programming, data structures, and databases, with hands-on coursework in web development and software design principles.",
    isActive: false,
    image: "/window.svg",
  },
  {
    id: "3",
    period: "2025 — present",
    degree: "B.Sc. (Hons) IT",
    institution: "University of Kelaniya",
    description: "Studying Software Architecture, Algorithms, Databases, UI Engineering, Embedded Systems, and Artificial Intelligence. Participating in local hackathons and leading the open-source developer club.",
    isActive: true,
    image: "/window.svg",
  }
];
