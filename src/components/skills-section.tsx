// src/components/SkillsSection.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Cpu, Wrench, Code } from "lucide-react"; // Icons

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  animationTargetClass: string; // Class for targeting animation
}

// Data from resume
const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code, // Re-using Code icon, adjust if needed
    skills: ["Go", "C++", "JavaScript", "SQL", "HTML & CSS", "Solidity"],
    animationTargetClass: "skill-badge-prog",
  },
  {
    title: "Libraries & Frameworks",
    icon: Cpu, // Example icon
    skills: [
      "Node.js (NestJS)",
      "React (Next.js)",
      "gRPC",
      "protobuf",
      "GraphQL",
      "Firebase",
      "PostgreSQL",
      "Redis",
      "Uber Cadence",
      "MUI",
    ],
    animationTargetClass: "skill-badge-lib",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench, // Example icon
    skills: [
      "Git",
      "Linux",
      "GCP",
      "Docker",
      "Kubernetes",
      "Kafka",
      "Terraform",
      "Jenkins",
    ],
    animationTargetClass: "skill-badge-tool",
  },
];

export function SkillsSection() {
  const animationRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    skillCategories.forEach((category) => {
      const target = `.${category.animationTargetClass}`;
      if (animationRef.current[target]) return;
      animationRef.current[target] = true;

      animate(target, {
        opacity: [0, 1],
        scale: [0.8, 1], // Slight scale effect
        delay: stagger(50, { start: 100 }), // Faster stagger for badges
        duration: 300,
        easing: "easeOutExpo",
      });
    });
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      {" "}
      {/* Changed background */}
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm mb-4">
            <Lightbulb className="h-4 w-4 mr-2" /> Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-muted-foreground">
            Key technologies and tools I work with regularly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <category.icon className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    variant="secondary"
                    className={category.animationTargetClass}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Optional: Add Societies / Coursework if desired */}
        {/* <div className="max-w-3xl mx-auto text-center mt-16"> ... </div> */}
      </div>
    </section>
  );
}
