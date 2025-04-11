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
import { Briefcase } from "lucide-react"; // Icon for decoration

interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string[]; // Array of bullet points
}

// Data extracted from the resume PDF [cite: 1]
const experiences: ExperienceItem[] = [
  {
    company: "MOOL",
    role: "Software Development Engineer III",
    dates: "Dec 2022 - Present",
    description: [
      "Working on mool.ai, which generates financial research-based documents using RAG.",
      "Led a team of engineers, conducting code reviews and technical discussions. [cite: 4]",
      "Revamped backend infrastructure to enhance performance, scalability, and security. [cite: 5]",
      "Implemented features such as Al voice chat, account aggregator, user subscriptions, feed, and growth mutual funds for mool app.",
    ],
  },
  {
    company: "DEQODE LABS",
    role: "Research & Development Engineer",
    dates: "Mar 2021 - Nov 2022",
    description: [
      "Designed scalable architectures supporting large data sizes and high availability. [cite: 7]",
      "Led full-stack development teams, adapting open-source tools for product use cases. [cite: 7]",
    ],
  },
  {
    company: "APPOINTY INC",
    role: "Software Engineer",
    dates: "Oct 2020 - Mar 2021",
    description: [
      "Developed MatterSuite, a cloud-based legal lawsuit management software using microservice architecture. [cite: 8]",
    ],
  },
  {
    company: "APPOINTY INC",
    role: "Product Developer Intern",
    dates: "Feb 2020 - Sep 2020",
    description: [
      "Worked on Domain-Driven Design (DDD) and Microservices Architecture. [cite: 9]",
      "Utilized gRPC, protobuf, Golang, Rest API, PostgreSQL, and microservices. [cite: 10]",
    ],
  },
];

export function ExperienceSection() {
  const animationRef = useRef<Record<string, boolean>>({}); // Use object to track animations

  useEffect(() => {
    // Target only the cards within this specific section
    const target = ".experience-card";

    // Check if animation for this target has already run
    if (animationRef.current[target]) return;
    animationRef.current[target] = true; // Mark as run

    // Simple staggered fade-in and slide-up animation for experience cards
    animate(target, {
      translateY: [30, 0], // Start 30px down
      opacity: [0, 1], // Fade in
      delay: stagger(100, { start: 100 }), // Stagger each card, start delay 100ms
      duration: 500,
      easing: "easeOutExpo",
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm mb-4">
            <Briefcase className="h-4 w-4 mr-2" /> Career Path
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-muted-foreground">
            My professional journey and key contributions in previous roles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Optional: Add a visual timeline element if desired */}
          {/* <div className="absolute left-6 top-0 bottom-0 w-px bg-border -z-10"></div> */}

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="experience-card shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Optional: Dot on timeline */}
                {/* <div className="absolute left-[calc(1.5rem-5px)] top-4 w-[10px] h-[10px] rounded-full bg-primary -z-10"></div> */}
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                    <CardTitle className="text-xl font-semibold">
                      {exp.role}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground mt-1 sm:mt-0">
                      {exp.dates}
                    </div>
                  </div>
                  <CardDescription className="text-base font-medium">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
