export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "RAG",
      "Pinecone",
      "Neural Networks",
    ],
  },
  {
    title: "Tools & Infrastructure",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Render",
      "Vercel",
      "Wireshark",
      "Nmap",
      "Mininet",
    ],
  },
];