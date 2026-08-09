export enum SkillNames {
  PYTHON = "python",
  JAVA = "java",
  CPP = "cpp",
  JAVASCRIPT = "javascript",
  REACT = "react",
  HTML = "html",
  CSS = "css",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  FASTAPI = "fastapi",
  FLASK = "flask",
  DJANGO = "django",
  MONGODB = "mongodb",
  SQL = "sql",
  GIT = "git",
  AWS = "aws",
  SOCKETIO = "socketio",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const icon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: { id: 1, name: "python", label: "Python", shortDescription: "Building reliable APIs, automation, and data tools.", color: "#3776ab", icon: icon("python") },
  [SkillNames.JAVA]: { id: 2, name: "java", label: "Java", shortDescription: "Object-oriented programming and problem solving.", color: "#f89820", icon: icon("java") },
  [SkillNames.CPP]: { id: 3, name: "cpp", label: "C++", shortDescription: "Data structures, algorithms, and systems fundamentals.", color: "#00599c", icon: icon("cplusplus") },
  [SkillNames.JAVASCRIPT]: { id: 4, name: "javascript", label: "JavaScript", shortDescription: "Interactive, responsive web experiences.", color: "#f7df1e", icon: icon("javascript") },
  [SkillNames.REACT]: { id: 5, name: "react", label: "React.js", shortDescription: "Component-driven interfaces for the web.", color: "#61dafb", icon: icon("react") },
  [SkillNames.HTML]: { id: 6, name: "html", label: "HTML5", shortDescription: "Semantic and accessible page structure.", color: "#e34f26", icon: icon("html5") },
  [SkillNames.CSS]: { id: 7, name: "css", label: "CSS3", shortDescription: "Polished, responsive visual systems.", color: "#1572b6", icon: icon("css3") },
  [SkillNames.TAILWIND]: { id: 8, name: "tailwind", label: "Tailwind CSS", shortDescription: "Fast, consistent responsive styling.", color: "#38bdf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  [SkillNames.NODEJS]: { id: 9, name: "nodejs", label: "Node.js", shortDescription: "Scalable JavaScript backends.", color: "#5fa04e", icon: icon("nodejs") },
  [SkillNames.EXPRESS]: { id: 10, name: "express", label: "Express.js", shortDescription: "REST APIs and backend services.", color: "#ffffff", icon: icon("express") },
  [SkillNames.FASTAPI]: { id: 11, name: "fastapi", label: "FastAPI", shortDescription: "Typed Python APIs with validation.", color: "#009688", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  [SkillNames.FLASK]: { id: 12, name: "flask", label: "Flask", shortDescription: "Lightweight Python web applications.", color: "#ffffff", icon: icon("flask") },
  [SkillNames.DJANGO]: { id: 13, name: "django", label: "Django", shortDescription: "Full-featured Python web development.", color: "#092e20", icon: icon("django") },
  [SkillNames.MONGODB]: { id: 14, name: "mongodb", label: "MongoDB", shortDescription: "Flexible application data storage.", color: "#47a248", icon: icon("mongodb") },
  [SkillNames.SQL]: { id: 15, name: "sql", label: "SQLAlchemy", shortDescription: "Relational data modeling and ORM workflows.", color: "#d71f00", icon: icon("sqlalchemy") },
  [SkillNames.GIT]: { id: 16, name: "git", label: "Git", shortDescription: "Collaborative version control.", color: "#f05032", icon: icon("git") },
  [SkillNames.AWS]: { id: 17, name: "aws", label: "AWS", shortDescription: "Certified in Generative AI and Machine Learning.", color: "#ff9900", icon: icon("amazonwebservices") },
  [SkillNames.SOCKETIO]: { id: 18, name: "socketio", label: "Socket.IO", shortDescription: "Real-time application updates.", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Apr 2026",
    endDate: "Jun 2026",
    title: "Python Full-Stack Developer Intern",
    company: "AICTE - EduSkills Virtual Internship",
    description: [
      "Built a Log Statistics Analyzer with Python and FastAPI that parses, filters, and aggregates server logs into structured JSON reports, reducing manual log-review effort by 72%.",
      "Modeled and validated request and response data with Pydantic, and integrated relational data storage with SQLAlchemy ORM.",
      "Improved backend reliability by writing and running Pytest coverage across core API and data-processing modules.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.FASTAPI, SkillNames.REACT, SkillNames.SQL],
  },
  {
    id: 2,
    startDate: "May 2025",
    endDate: "Jun 2025",
    title: "Product Developer Intern",
    company: "CITBIF Pvt. Ltd.",
    description: [
      "Built a full-stack Competition and Event Management Platform for 2,000+ users as one of four engineers working in Agile sprints.",
      "Implemented Socket.IO-powered real-time updates across user and admin dashboards, cutting manual refresh delay by 70%.",
      "Designed an automated web-scraping pipeline that populated the REST API and MongoDB with 500+ live event records.",
    ],
    skills: [SkillNames.REACT, SkillNames.TAILWIND, SkillNames.NODEJS, SkillNames.EXPRESS, SkillNames.MONGODB, SkillNames.SOCKETIO],
  },
];

export const themeDisclaimers = {
  light: ["Light mode enabled."],
  dark: ["Dark mode enabled."],
};
