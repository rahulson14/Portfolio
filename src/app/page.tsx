"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import TerminalIntro from "@/components/TerminalIntro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}
      <main className={`flex min-h-screen flex-col bg-white ${showIntro ? "h-screen overflow-hidden" : ""}`}>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="bg-black text-white py-8 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tighter">Rahul.dev</span>
            </div>
            <div className="text-sm text-zinc-500 font-semibold text-center md:text-right">
              © 2026 Rahul Son Boro.
              <br />Built with 🩶
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
