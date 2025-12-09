import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Progress bar */}
      <ProgressBar />

      {/* Main content */}
      <Hero />
      <Timeline />
    </main>
  );
}
