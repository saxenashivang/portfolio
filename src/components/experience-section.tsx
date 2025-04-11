// src/components/ExperienceSection.tsx
"use client"; // Needed for useEffect and client-side animation

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Briefcase, Rocket, Code2, Brain } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string[];
  icon: React.ReactNode;
  achievements: string[];
  techStack: string[];
}

// Data extracted from the resume PDF [cite: 1]
const experiences: ExperienceItem[] = [
  {
    company: "MOOL",
    role: "Software Development Engineer III",
    dates: "Dec 2022 - Present",
    icon: <Brain className="h-6 w-6 text-blue-500" />,
    description: [
      "Leading the development of AI-powered financial research platform",
      "Architecting scalable backend systems for real-time data processing",
      "Implementing advanced security measures for financial data protection",
    ],
    achievements: [
      "Reduced system latency by 40% through architectural optimizations",
      "Implemented automated testing pipeline reducing bugs by 60%",
      "Led team of 5 engineers in agile development environment",
    ],
    techStack: ["Golang", "Node.js", "AWS", "PostgreSQL", "Redis"],
  },
  {
    company: "DEQODE LABS",
    role: "Research & Development Engineer",
    dates: "Mar 2021 - Nov 2022",
    icon: <Rocket className="h-6 w-6 text-blue-500" />,
    description: [
      "Pioneered development of innovative tech solutions",
      "Conducted research on emerging technologies and their applications",
      "Collaborated with cross-functional teams on complex projects",
    ],
    achievements: [
      "Developed patent-pending technology for data processing",
      "Reduced infrastructure costs by 35% through optimization",
      "Mentored junior developers and conducted tech workshops",
    ],
    techStack: ["Python", "Docker", "Kubernetes", "MongoDB", "gRPC"],
  },
  {
    company: "APPOINTY INC",
    role: "Software Engineer",
    dates: "Oct 2020 - Mar 2021",
    icon: <Code2 className="h-6 w-6 text-blue-500" />,
    description: [
      "Developed cloud-based legal management platform",
      "Implemented microservices architecture for scalability",
      "Optimized database queries and API performance",
    ],
    achievements: [
      "Achieved 99.9% uptime for critical services",
      "Reduced API response time by 50%",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
    ],
    techStack: ["Golang", "React", "PostgreSQL", "Docker", "AWS"],
  },
];

export function ExperienceSection() {
  const animationRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const target = ".experience-card";
    if (animationRef.current[target]) return;
    animationRef.current[target] = true;

    animate(target, {
      translateY: [30, 0],
      opacity: [0, 1],
      delay: stagger(100, { start: 100 }),
      duration: 500,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm mb-4">
            <Briefcase className="h-4 w-4 mr-2" /> Career Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-muted-foreground">
            A timeline of my growth and contributions in the tech industry
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative experience-card ${
                  index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                }`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>

                <Card
                  className={`shadow-sm hover:shadow-md transition-shadow duration-300 ${
                    index % 2 === 0
                      ? "lg:ml-auto lg:w-[calc(100%-2rem)]"
                      : "lg:mr-auto lg:w-[calc(100%-2rem)]"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      {exp.icon}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                          <CardTitle className="text-xl font-semibold">
                            {exp.role}
                          </CardTitle>
                          <div className="text-sm text-muted-foreground">
                            {exp.dates}
                          </div>
                        </div>
                        <CardDescription className="text-base font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold mb-2">
                          Key Responsibilities
                        </h3>
                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                          {exp.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-2">
                          Notable Achievements
                        </h3>
                        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                          {exp.achievements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold mb-2">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
