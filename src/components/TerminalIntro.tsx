"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hollywood "hacker" text spinning effect
const DecryptText = ({ text, speed = 15, delay = 0, stepSize = 1 }: { text: string; speed?: number; delay?: number; stepSize?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " " || char === "\n") return char;
              if (index < iteration) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          // Set to final text to ensure no random chars remain
          setDisplayText(text);
        }

        iteration += stepSize; 
      }, speed);
    }, delay);

    return () => {
      if (timeout) clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delay, speed, stepSize]);

  return <span>{displayText || text.replace(/[^ ]/g, ' ')}</span>; // Preserve layout before start
};

export default function TerminalIntro({ onComplete }: { onComplete: () => void }) {

  const [step, setStep] = useState(0);
  const [typedWhoami, setTypedWhoami] = useState("");
  const [typedCat, setTypedCat] = useState("");
  const [sysTime, setSysTime] = useState("--:--:--");
  const [sysDate, setSysDate] = useState("----/--/--");

  const whoamiCommand = "whoami";
  const catCommand = "cat status.txt";

  const typeText = (text: string, setter: React.Dispatch<React.SetStateAction<string>>, callback: () => void) => {
    let index = 0;
    const interval = setInterval(() => {
      setter(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        callback();
      }
    }, 30); // Faster typing
  };

  useEffect(() => {
    // Start sequence
    const timers = [
      setTimeout(() => {
        typeText(whoamiCommand, setTypedWhoami, () => setStep(1));
      }, 400),
      setTimeout(() => setStep(2), 1600),
      setTimeout(() => {
        typeText(catCommand, setTypedCat, () => setStep(3));
      }, 1800),
      // Auto-redirect to main page after 5.5 seconds total
      setTimeout(() => {
        onComplete();
      }, 5500),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  // Live Time and Date
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSysTime(now.toLocaleTimeString("en-US", { hour12: false }));
      setSysDate(now.toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }));
    };
    
    updateTime(); // initial call
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle dismissal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-[#0c0c0c] text-zinc-100 font-mono text-xs sm:text-sm p-4 sm:p-8 overflow-y-auto overflow-x-hidden select-none cursor-pointer"
        onClick={onComplete}
        style={{ WebkitTextSizeAdjust: 'none' }}
      >
        <div className="crt-scanlines pointer-events-none fixed inset-0"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050505]/80 pointer-events-none"></div>

        <div className="relative z-10 min-h-full flex flex-col max-w-5xl mx-auto terminal-glow">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-zinc-800 pb-3 mb-4 uppercase tracking-widest text-[8px] sm:text-[10px] md:text-xs w-full">
            <div className="flex flex-col gap-1">
              <div className="flex whitespace-nowrap"><span className="w-16 sm:w-24 shrink-0 text-zinc-600">SYS.NAME</span><span>: RSB_OS v1.0.0</span></div>
              <div className="flex whitespace-nowrap"><span className="w-16 sm:w-24 shrink-0 text-zinc-600">SYS.AUTH</span><span>: <span className="text-white">GUEST_ACCESS_GRANTED</span></span></div>
              <div className="flex whitespace-nowrap"><span className="w-16 sm:w-24 shrink-0 text-zinc-600">SYS.NODE</span><span>: rahul.dev</span></div>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <div className="flex justify-end whitespace-nowrap"><span className="text-zinc-600 mr-1 sm:mr-2">DATE</span><span className="text-white sm:text-zinc-100">: {sysDate}</span></div>
              <div className="flex justify-end whitespace-nowrap"><span className="text-zinc-600 mr-1 sm:mr-2">TIME</span><span className="text-white sm:text-zinc-100">: {sysTime}</span></div>
              <div className="flex justify-end whitespace-nowrap"><span className="text-zinc-600 mr-1 sm:mr-2">STATUS</span><span className="text-zinc-400">: 200 OK</span></div>
            </div>
          </div>

          {/* ASCII Logo */}
          <div className="mb-4 hidden sm:block whitespace-pre font-bold text-zinc-600">
<DecryptText delay={100} stepSize={15} text={`
 ________  ________  ___  ___  ___  ___  ___          
|\\   __  \\|\\   __  \\|\\  \\|\\  \\|\\  \\|\\  \\|\\  \\         
\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\        
 \\ \\   _  _\\ \\   __  \\ \\   __  \\ \\  \\\\\\  \\ \\  \\       
  \\ \\  \\\\  \\\\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\\\\\  \\ \\  \\____  
   \\ \\__\\\\ _\\\\ \\__\\ \\__\\ \\__\\ \\__\\ \\_______\\ \\_______\\
    \\|__|\\|__|\\|__|\\|__|\\|__|\\|__|\\|_______|\\|_______|
`} />
          </div>
          <div className="mb-6 sm:hidden w-full overflow-hidden">
            <div className="whitespace-pre font-bold text-zinc-600 text-[8px] leading-tight">
<DecryptText delay={100} stepSize={15} text={`
 ________  ________  ___  ___  ___  ___  ___          
|\\   __  \\|\\   __  \\|\\  \\|\\  \\|\\  \\|\\  \\|\\  \\         
\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\        
 \\ \\   _  _\\ \\   __  \\ \\   __  \\ \\  \\\\\\  \\ \\  \\       
  \\ \\  \\\\  \\\\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\\\\\  \\ \\  \\____  
   \\ \\__\\\\ _\\\\ \\__\\ \\__\\ \\__\\ \\__\\ \\_______\\ \\_______\\
    \\|__|\\|__|\\|__|\\|__|\\|__|\\|__|\\|_______|\\|_______|
`} />
            </div>
          </div>

          {/* Terminal Output */}
          <div className="flex-1 flex flex-col gap-4 pb-4">
            
            {/* Command 1: whoami */}
            <div className="flex flex-col gap-2">
              <div className="break-all"><span className="text-white mr-2">$</span>{typedWhoami}{step === 0 && <span className="terminal-cursor"></span>}</div>
              
              {step >= 1 && (
                <div className="text-zinc-300 max-w-2xl leading-relaxed mt-2 pr-4">
                  <div className="mb-2 text-white"><DecryptText text="Hello, and welcome to my digital workspace." stepSize={2} /></div>
                  <div className="mb-1"><DecryptText text="Rahul Son Boro." delay={200} stepSize={2} /></div>
                  <div className="mb-1 text-zinc-400"><DecryptText text="B.Tech Computer Science & Engineering Graduate." delay={400} stepSize={2} /></div>
                  <div className="mt-2"><DecryptText text="Specializations: Web Development, ML & DL, Computer Vision, AI, AI Agents (LangChain & LangGraph)." delay={600} stepSize={2} /></div>
                </div>
              )}
            </div>

            {/* Command 2: cat status.txt */}
            {step >= 2 && (
              <div className="flex flex-col gap-2 mt-1">
                <div className="break-all"><span className="text-white mr-2">$</span>{typedCat}{step === 2 && <span className="terminal-cursor"></span>}</div>
                
                {step >= 3 && (
                  <div className="flex flex-col gap-1 text-zinc-300 mt-2 pr-4">
                    <div className="flex items-start"><span className="w-24 shrink-0 text-zinc-600 mt-1 sm:mt-0">LOCATION</span> <span className="flex-1"><DecryptText text="India" stepSize={1} /></span></div>
                    <div className="flex items-start"><span className="w-24 shrink-0 text-zinc-600 mt-1 sm:mt-0">EDUCATION</span> <span className="flex-1"><DecryptText text="B.Tech CS & Engineering" delay={150} stepSize={1} /></span></div>
                    <div className="flex items-start"><span className="w-24 shrink-0 text-zinc-600 mt-1 sm:mt-0">EXPERTISE</span> <span className="flex-1"><DecryptText text="Web Dev // ML & DL // CV // AI Agents" delay={300} stepSize={2} /></span></div>
                    <div className="flex items-start"><span className="w-24 shrink-0 text-zinc-600 mt-1 sm:mt-0">CONTACT</span> <span className="flex-1 break-all"><DecryptText text="connect@rahul.dev" delay={450} stepSize={1} /></span></div>
                  </div>
                )}
              </div>
            )}

            {/* Redirect Output */}
            {step >= 3 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8 }}
                className="mt-4 flex flex-col gap-1 pr-4"
              >
                <div className="break-words"><span className="text-zinc-500">[</span> <span className="text-white font-bold">OK</span> <span className="text-zinc-500">]</span> Authentication verified.</div>
                <div className="animate-pulse text-white font-bold tracking-widest break-words"><span className="text-zinc-500 font-normal">[</span> OK <span className="text-zinc-500 font-normal">]</span> ACCESS GRANTED -- REDIRECTING... <span className="terminal-cursor ml-2"></span></div>
              </motion.div>
            )}

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
