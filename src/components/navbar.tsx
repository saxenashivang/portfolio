"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming utils file from shadcn/ui setup
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Left side: Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-semibold text-lg">S:S</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2 sm:space-x-4">
              <NavLink href="/#experience">Experience</NavLink>
              <NavLink href="/#projects">Projects</NavLink>
              <NavLink href="/#skills">Skills</NavLink>
              <NavLink href="/Shivang_Saxena_color.pdf" target="_blank">
                Resume
              </NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  id="dark-mode"
                  checked={theme === "dark"}
                  onCheckedChange={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                />
                <Moon className="h-4 w-4" />
                <Label htmlFor="dark-mode" className="sr-only">
                  Toggle dark mode
                </Label>
              </div>
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button> */}
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-14 left-0 w-full md:hidden bg-background/95 backdrop-blur border-b border-border/40">
              <nav className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                <MobileNavLink href="/#experience">Experience</MobileNavLink>
                <MobileNavLink href="/#projects">Projects</MobileNavLink>
                <MobileNavLink href="/#skills">Skills</MobileNavLink>
                <MobileNavLink href="/Shivang_Saxena_color.pdf" target="_blank">
                  Resume
                </MobileNavLink>
                <MobileNavLink href="#contact">Contact</MobileNavLink>
                <div className="flex items-center justify-center py-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Helper component for Nav Links for cleaner code and consistent styling
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string; // Optional target prop for opening in new tab
}

// Desktop Nav Link Component
function NavLink({ href, children, target }: NavLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary/90 rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background" // Basic focus styling
      )}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

// Mobile Nav Link Component
function MobileNavLink({ href, children, target }: NavLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary/90 rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
      )}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
