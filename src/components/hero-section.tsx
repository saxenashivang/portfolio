// src/components/HeroSection.tsx
"use client"; // Add this directive for client-side hooks and effects

import React, { useEffect, useRef } from "react"; // Import Anime.js
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button
import { ArrowRight, Mail, Github, Linkedin, Terminal } from "lucide-react"; // Example icons
import Link from "next/link";
import { animate, stagger } from "animejs";
// import MatrixRain from "./ui/matrix-code";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { Typewriter } from "./ui/typewriter";

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
      <div className="hero-content flex flex-col items-center space-y-6  max-w-4xl mx-auto px-4 relative z-10">
        <div className="space-y-4">
          {/* Added 'hero-title' class for animation targeting */}
          <h1 className="hero-title text-4xl font-extrabold tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl/none">
            Hi, I&apos;m{" "}
            <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500">
              Shivang Saxena
            </span>
          </h1>
        </div>

        <div className="w-full h-full md:text-3xl lg:text-4xl sm:text-1xl text-2xl flex flex-row items-start justify-start bg-background font-normal overflow-hidden">
          <p className="whitespace-pre-wrap text-center text-lg sm:text-xl font-medium leading-relaxed">
            <span>{"I engineer 🧪 "}</span>
            <Typewriter
              text={[
                "resilient backend systems",
                "snappy full stack apps",
                "AI agents with attitude",
                "self-healing cloud infra",
                "a sprinkle of chaos & charm",
              ]}
              speed={65}
              className="text-green-500"
              waitTime={1800}
              deleteSpeed={35}
              cursorChar={"▍"}
            />
          </p>
        </div>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle className="text-muted-foreground">
            Console Says:
          </AlertTitle>
          <AlertDescription className="whitespace-pre font-mono text-sm mt-2">
            {`$ npm start
🧠 Booting genius mode...
⚠️  AI modules slightly sarcastic...
✅ Running flawlessly until proven otherwise.`}
          </AlertDescription>
        </Alert>
        {/* Added 'hero-buttons' and 'button-anim' classes for animation */}
        <div className="hero-buttons space-x-4">
          <Button size="lg" className="button-anim" asChild>
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="button-anim" asChild>
            <Link href="#contact">
              Get In Touch <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        {/* Optional: Social Links */}
        <div className="hero-buttons flex pt-4 space-x-4">
          <Link
            href="https://github.com/saxenashivang"
            target="_blank"
            rel="noopener noreferrer"
            className="button-anim text-muted-foreground hover:text-foreground"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/shivangsaxena"
            target="_blank"
            rel="noopener noreferrer"
            className="button-anim text-muted-foreground hover:text-foreground"
          >
            {/* Note: Resume uses 'Im shivangsaxena', adjust URL if that's not the profile ID [cite: 3] */}
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://shivangsaxena.in"
            target="_blank"
            rel="noopener noreferrer"
            className="button-anim text-muted-foreground hover:text-foreground"
          >
            {/* Placeholder for website link, replace icon if needed */}
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
          </Link>
          {/* Add other relevant links */}
        </div>
      </div>
    </section>
  );
}
