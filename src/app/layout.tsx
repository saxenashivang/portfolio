// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // Default font, change if needed
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"; // If you added ThemeProvider from shadcn
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shivang Saxena | Portfolio",
  description: "Portfolio of Shivang Saxena, Senior Back-End Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          poppins.variable
        )}
      >
        {/* Add ThemeProvider if you have one */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Navbar /> {/* <-- Add the Navbar here */}
            <main className="flex-1">{children}</main>
            {/* <Footer /> You might add a Footer later */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
