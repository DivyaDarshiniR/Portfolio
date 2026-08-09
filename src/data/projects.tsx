import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ReactNode } from "react";

export type Skill = { title: string; bg: string; fg: string; icon: ReactNode };

const chip = (title: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[10px] font-semibold">{title.slice(0, 2)}</span>,
});

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  background?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "ragshield",
    category: "AI security",
    title: "RAGShield",
    src: "/assets/projects-screenshots/ragshield/landing.png",
    screenshots: ["landing.png"],
    skills: { frontend: [chip("Python")], backend: [chip("RAG"), chip("Security"), chip("Telemetry")] },
    github: "https://github.com/DivyaDarshiniR/RAGShield",
    live: "#",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">A retrieval-augmented generation system designed with security guardrails.</TypographyP>
        <TypographyP className="font-mono">RAGShield introduces input and output guardrails plus query isolation to help protect a RAG pipeline from prompt-injection attacks. It reduced successful prompt-injection attempts by 79% during evaluation.</TypographyP>
        <TypographyH3 className="my-4 mt-8">Security evaluation</TypographyH3>
        <p className="font-mono mb-2">The system was stress-tested with 500 adversarial prompts. Integrated telemetry monitored pipeline performance and flagged anomalies, making security behaviour visible throughout evaluation.</p>
      </div>
    ),
  },
  {
    id: "maasc",
    category: "Multi-agent AI",
    title: "M.A.A.S.C.",
    src: "/assets/projects-screenshots/maasc/landing.png",
    screenshots: ["landing.png"],
    skills: { frontend: [chip("Conversational AI")], backend: [chip("OpenAI"), chip("ElevenLabs"), chip("Secure protocol")] },
    live: "#",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">Multi-Agent Automatic Secured Communication.</TypographyP>
        <TypographyP className="font-mono">M.A.A.S.C. is a conversational multi-agent system where two AI agents begin in English and, after confirming that both participants are AI agents, transition to a sound-level communication protocol.</TypographyP>
        <TypographyH3 className="my-4 mt-8">Agent-to-agent protocol switching</TypographyH3>
        <p className="font-mono mb-2">The project combines OpenAI for agent reasoning and ElevenLabs for voice generation, exploring a secure and adaptive communication flow between autonomous conversational agents.</p>
      </div>
    ),
  },
  {
    id: "scholarscout",
    category: "Research discovery",
    title: "ScholarScout AI",
    src: "/assets/projects-screenshots/scholarscout/landing.png",
    screenshots: ["landing.png"],
    skills: { frontend: [chip("HTML"), chip("CSS")], backend: [chip("Flask"), chip("Python"), chip("arXiv API")] },
    github: "https://github.com/DivyaDarshiniR/ScholarScout",
    live: "#",
    content: (
      <div>
        <TypographyP className="font-mono text-2xl text-center">An academic-paper discovery tool built to make research exploration more direct.</TypographyP>
        <TypographyP className="font-mono">ScholarScout AI is a Flask web application integrated with the arXiv API. It supports keyword- and author-based paper discovery, automated metadata extraction, and researcher contact discovery.</TypographyP>
        <TypographyH3 className="my-4 mt-8">Built for focused research</TypographyH3>
        <p className="font-mono mb-2">The application brings paper search and useful publication metadata into one simple workflow, using REST APIs and a lightweight Python backend.</p>
      </div>
    ),
  },
];

export default projects;
