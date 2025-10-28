import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Technology from "@/components/Technology";
import Roadmap from "@/components/Roadmap";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
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
