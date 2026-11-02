// Selected projects data.
// URLs marked "verified" come from the project brief. All others are placeholders.

export type Project = {
  number: string;
  title: string;
  shortDescription: string;
  description: string[];
  technologies: string[];
  github: string | null; // null => placeholder, not invented
  live: string | null; // null => placeholder, not invented
  accent: string; // hex for the project card's tinted visual
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Phone Spare Part Detector",
    shortDescription:
      "An intelligent smartphone fault detection system combining machine learning and rule-based logic to identify potential spare-part failures.",
    description: [
      "ML-based fault detection pipeline for identifying likely spare-part failures from device symptoms.",
      "Brand and spare-part price mapping to support repair-cost estimation.",
      "Dataset processing and analysis for model training and evaluation.",
      "Estimated 85% accuracy and 45% reduction in manual inspection time, as previously reported.",
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    github: null,
    live: null,
    accent: "#8FA8B8",
    metrics: [
      { label: "Accuracy", value: "~85%" },
      { label: "Time saved", value: "~45%" },
    ],
  },
  {
    number: "02",
    title: "Merchant Growth AI Assistant",
    shortDescription:
      "An AI-powered decision engine designed to analyze merchant performance and generate actionable business insights.",
    description: [
      "Analyzes merchant performance metrics and surfaces actionable business insights.",
      "Generates recommendations using AI/ML models over REST APIs.",
      "Deployed on Render as a verified past project detail.",
    ],
    technologies: ["Python", "FastAPI", "AI/ML", "REST APIs"],
    github: null,
    live: "https://merchant-growth-ai.onrender.com",
    accent: "#B8A08A",
  },
  {
    number: "03",
    title: "Nova AI",
    shortDescription:
      "A voice-agent and retrieval-augmented generation platform.",
    description: [
      "Voice-agent interface powered by Vapi.ai for natural conversational interaction.",
      "Retrieval-augmented generation pipeline using Pinecone for context-aware responses.",
      "FastAPI backend orchestrating the RAG flow.",
    ],
    technologies: ["Python", "FastAPI", "Vapi.ai", "Pinecone", "RAG"],
    github: null,
    live: null,
    accent: "#A89FB8",
  },
  {
    number: "04",
    title: "Netflix Clone",
    shortDescription:
      "A responsive streaming-platform interface built using the MERN stack.",
    description: [
      "Full MERN-stack recreation of a streaming platform interface.",
      "Responsive UI with Tailwind CSS.",
      "Live demo available on Render.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/konmen420",
    live: "https://netfliclone.onrender.com/",
    accent: "#C8504A",
  },
  {
    number: "05",
    title: "Smart Grid Cybersecurity",
    shortDescription:
      "Research and experimentation focused on cybersecurity threats and mitigation in smart-grid environments.",
    description: [
      "Research into cyber threats and mitigation strategies for smart-grid environments.",
      "IEC 61850 GOOSE protocol analysis.",
      "SDN monitoring with Mininet, Open vSwitch, and Ryu controller.",
      "Python and Scapy-based packet capture and analysis.",
      "CUSUM-based anomaly detection research — performance not verified.",
    ],
    technologies: [
      "Python",
      "Scapy",
      "Mininet",
      "Open vSwitch",
      "Ryu",
      "SDN",
      "IEC 61850",
    ],
    github: null,
    live: null,
    accent: "#6E8A7A",
  },
  {
    number: "06",
    title: "Medical Assistance System",
    shortDescription:
      "A symptom-based disease prediction system designed to help users understand potential health conditions.",
    description: [
      "Symptom-based disease prediction to help users understand potential health conditions.",
      "Editable implementation details — technology stack and notes are placeholders.",
    ],
    technologies: ["Python", "Machine Learning", "Flask", "SQLite"],
    github: null,
    live: null,
    accent: "#B88A8A",
  },
];