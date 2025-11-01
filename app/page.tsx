import ScrollStoryContainer from "@/components/ScrollStory/ScrollStoryContainer";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Technology from "@/components/Technology";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* New Interactive Scroll Story */}
      <ScrollStoryContainer />

      {/* Existing Sections */}
      <Stats />
      <Problem />
      <Solution />
      <Features />
      <Architecture />
      <Technology />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  );
}
