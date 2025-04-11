// src/components/ContactSection.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Github, Linkedin, FileText } from "lucide-react"; // Icons

export function ContactSection() {
  const animationRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const target = ".contact-content";
    if (animationRef.current[target]) return;
    animationRef.current[target] = true;

    animate(target, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: "easeOutExpo",
      delay: 200,
    });
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="contact-content max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-8">
            Interested in collaborating or have a question? Feel free to reach
            out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="mailto:shivang5198@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://github.com/saxenashivang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              {/* Adjust LinkedIn URL if 'Im shivangsaxena' is not the correct profile ID */}
              <Link
                href="https://linkedin.com/in/shivangsaxena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            {/* Optional: Link to Resume PDF hosted in /public */}
            <Button size="lg" variant="outline" asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
