// src/components/HeroSection.tsx
"use client"; // Add this directive for client-side hooks and effects

import React, { useEffect, useRef } from "react"; // Import Anime.js
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button
import { ArrowRight, Mail, Github, Linkedin, Terminal } from "lucide-react"; // Example icons
import Link from "next/link";
import { animate, stagger } from "animejs";
// import MatrixRain from "./ui/matrix-code";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import Image from "next/image";

export function HeroSection() {
  const animationRef = useRef<null | Record<string, never>>(null);
  useEffect(() => {
    // Ensure this runs only once on mount
    if (animationRef.current) return;
    animationRef.current = {}; // Mark as run with an object instead of boolean

    // Simple fade-in and slide-up animation for the whole section
    animate(".hero-content", {
      translateY: [50, 0], // Start 50px down, end at original position
      opacity: [0, 1], // Fade in
      duration: 800,
      easing: "easeOutExpo",
      delay: 200, // Slight delay after page load
    });

    // Staggered animation for title words (split by space)
    const titleEl = document.querySelector(".hero-title");
    if (titleEl) {
      // Simple split by space - adjust if needed for more complex titles
      titleEl.innerHTML = (titleEl.textContent || "")
        .split(" ")
        .map((word) => `<span class="inline-block">${word}</span>`)
        .join(" ");

      animate(".hero-title .inline-block", {
        translateY: [20, 0],
        opacity: [0, 1],
        delay: stagger(80, { start: 400 }), // Stagger each word, start after initial fade-in
        duration: 600,
        easing: "easeOutExpo",
      });
    }

    // Button animation
    animate(".hero-buttons .button-anim", {
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: stagger(100, { start: 800 }), // Start after title animation
      duration: 500,
      easing: "easeOutBack",
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {/* <MatrixRain
          fontSize={20}
          characters="01001000 01101001 00100000"
          fadeOpacity={0.1}
          speed={1.0}
        /> */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="hero-title text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Shivang Saxena
              </h1>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p className="text-muted-foreground text-lg">
                  Senior Backend Engineer
                </p>
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p className="text-muted-foreground text-lg">
                  Full Stack Developer
                </p>
              </div>
              <p className="text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
                A technology-agnostic engineer with extensive experience in
                end-to-end software development, agile methodologies, and
                technical leadership.
              </p>
            </div>

            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle className="text-muted-foreground">
                $ go run main.go
              </AlertTitle>
              <AlertDescription className="whitespace-pre font-mono text-sm mt-2">
                {`🧠 Booting genius mode...
🔍 Analyzing common sense...
✅ Running flawlessly until proven otherwise.`}
              </AlertDescription>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="button-anim" asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="button-anim"
                asChild
              >
                <Link href="#contact">
                  Get In Touch <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Link
                href="https://github.com/saxenashivang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/shivangsaxena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* <Link
                href="https://shivangsaxena.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <span className="sr-only">Website</span>
              </Link> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm"></div>
              {/* Replace this div with your image */}
              <div className="absolute inset-0 bg-muted">
                {/* Add your image here */}
                <Image src="/linkedin.png" alt="Shivang Saxena" fill />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-sm"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
