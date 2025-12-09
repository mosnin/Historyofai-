import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import BackgroundParticles from "@/components/BackgroundParticles";
import ThemeToggle from "@/components/ThemeToggle";
import ProgressBar from "@/components/ProgressBar";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background effects */}
      <BackgroundParticles />

      {/* Progress bar */}
      <ProgressBar />

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <Timeline />

        {/* Footer */}
        <footer className="relative py-12 text-center border-t border-border/50">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              using{" "}
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Claude
              </a>
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span>Next.js 14</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Framer Motion</span>
              <span>•</span>
              <span>tsParticles</span>
            </div>
            <p className="mt-6 text-xs text-muted-foreground max-w-2xl mx-auto">
              This interactive timeline celebrates the remarkable journey of artificial
              intelligence, from its theoretical foundations to the cutting-edge systems
              transforming our world today.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
