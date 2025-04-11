// src/components/ProjectsSection.tsx
"use client"; // Needed for useEffect

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Code, ExternalLink, Github } from "lucide-react"; // Icons

interface Project {
  title: string;
  description: string;
  details?: string[]; // Optional bullet points for more detail
  technologies: string[];
  link?: string; // Optional live link
  repo?: string; // Optional repo link
}

// Data extracted from the resume PDF
const projects: Project[] = [
  {
    title: "mool.ai",
    description:
      "Mool.ai is an AI-powered platform designed to make research faster and smarter for strategy & investment professionals.",
    details: [
      "Leading the development of AI-powered financial research platform",
      "Created several agent tools to automate the research process",
    ],
    technologies: ["Node js", "React", "RAG"],
    link: "https://mool.ai",
  },
  {
    title: "alfred",
    description:
      "Developed an open-source microservice boilerplate to simplify and automate web app deployment on any cloud server.",
    technologies: ["Go", "Node.js", "Next.js", "Terraform"],
    repo: "https://github.com/deqode-labs/alfred",
  },
  {
    title: "mattersuite",
    description:
      "Managed comprehensive matter details including court hearings, case descriptions, oppositions, and legal discovery.",
    details: [
      "Designed & maintained the backend structure of MatterSuite.",
      "Developed several microservices.",
    ],
    technologies: [
      "Go",
      "React",
      "gRPC",
      "protobuf",
      "microservices",
      "Cadence",
    ],
    link: "https://www.mattersuite.com/",
  },
];

export function ProjectsSection() {
  const animationRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const target = ".project-card";
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
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-background">
      {" "}
      {/* Changed background */}
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm mb-4">
            <Code className="h-4 w-4 mr-2" /> Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of projects I&apos;ve worked on, showcasing my skills
            and interests.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  {/* Optional: Add links here if available */}
                  <div className="flex space-x-2">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                    {project.repo && (
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {project.details && (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground mb-4">
                    {project.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge key={techIdx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
