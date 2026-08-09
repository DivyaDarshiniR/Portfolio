"use client";

import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import SectionWrapper from "../ui/section-wrapper";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { ScrollArea } from "../ui/scroll-area";
import { motion } from "motion/react";

const ExperienceSection = () => (
  <SectionWrapper id="experience" className="max-w-7xl mx-auto min-h-[100vh] px-4 py-20">
    <SectionHeader id="experience" title="Experience" desc="My professional journey." className="mb-12 md:mb-20" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {EXPERIENCE.map((experience, index) => (
        <ExperienceCard key={experience.id} experience={experience} index={index} />
      ))}
    </div>
  </SectionWrapper>
);

const ExperienceCard = ({ experience, index }: { experience: (typeof EXPERIENCE)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    className="flex"
  >
    <ResponsiveDialog>
      <ResponsiveDialogTrigger className="w-full text-left">
        <article className="group relative flex min-h-[250px] w-full flex-col justify-end overflow-hidden rounded-lg border border-border bg-card p-6 text-card-foreground transition hover:border-primary/30 hover:shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.18),transparent_50%)]" />
          <div className="relative">
            <Badge variant="secondary" className="mb-5 font-mono text-xs font-normal">{experience.startDate} - {experience.endDate}</Badge>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{experience.company}</p>
            <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">{experience.title}</h3>
            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{experience.description[0]}</p>
            <p className="mt-5 text-xs font-medium text-primary">Open experience details</p>
          </div>
        </article>
      </ResponsiveDialogTrigger>

      <ResponsiveDialogContent className="md:max-w-3xl md:h-[72vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
        <div className="shrink-0 border-b border-border bg-background/80 px-8 py-5 backdrop-blur-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="font-display text-xl font-bold tracking-tight md:text-2xl">{experience.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{experience.company}</p>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">{experience.startDate} - {experience.endDate}</Badge>
          </div>
        </div>
        <ScrollArea className="flex-1" type="always" data-lenis-prevent>
          <div className="px-8 py-8">
            <ul className="ml-4 list-disc space-y-3 text-base leading-relaxed text-muted-foreground">
              {experience.description.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Tools and technologies</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skillName) => {
                const skill = SKILLS[skillName as SkillNames];
                return <Badge key={skillName} variant="outline" className="gap-2 border-transparent bg-secondary/30 text-xs font-normal"><img src={skill.icon} alt="" className="h-3.5 w-3.5 object-contain opacity-80" />{skill.label}</Badge>;
              })}
            </div>
          </div>
        </ScrollArea>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  </motion.div>
);

export default ExperienceSection;
