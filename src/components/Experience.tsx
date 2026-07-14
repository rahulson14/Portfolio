"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Work Based Learning Intern",
    company: "NIELIT Kokrajhar EC",
    link: "https://www.nielit.in/kokrajhar/index.php", // Replace with actual link if needed
    date: "Feb 2026 - Present",
    points: [
      "Built an AI search engine querying Semantic Scholar, ArXiv, and GitHub APIs in parallel.",
      "Engineered an LLM pipeline to generate grounded, hallucination-free summaries of research papers.",
      "Cut research discovery time from hours to under 10 seconds via a sleek, card-based UI."
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "APT Software Avenues Pvt. Ltd.",
    link: "https://aptsoftware.com/", // Add the actual link here
    date: "May 2025 - Jul 2025",
    points: [
      "Developed an Image and PDF to DOCX document converter utilizing PaddleOCR.",
      "Built SkillBuilder AI: a Serverless Telegram bot using n8n and the YouTube API for adaptive micro-learning.",
      "Integrated Google Gemini to provide intelligent, contextual, and hallucination-free responses to users."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl tracking-tight text-white">
            <span className="font-normal">My</span> <span className="font-black">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-black border-2 border-zinc-800 p-6 md:p-10 transition-all hover:border-zinc-500 cursor-default flex flex-col group/card"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 md:mb-8">
                
                {/* Logo and Titles */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center font-bold text-xl md:text-2xl text-white group-hover/card:border-zinc-500 group-hover/card:scale-105 group-hover/card:-rotate-3 transition-all duration-300">
                    {exp.company.charAt(0)}
                  </div>
                  <div className="flex flex-col pt-1 md:pt-0">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight">{exp.role}</h3>
                    
                    <div className="mb-2">
                      {exp.link ? (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-zinc-400 font-semibold text-sm md:text-base flex items-center gap-1.5 group/link w-fit hover:text-white transition-colors"
                        >
                          <span className="group-hover/link:underline underline-offset-4">{exp.company}</span>
                          <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 ease-out" />
                        </a>
                      ) : (
                        <div className="text-zinc-400 font-semibold text-sm md:text-base">{exp.company}</div>
                      )}
                    </div>

                    {/* Mobile Date */}
                    <div className="text-zinc-500 font-mono text-xs md:hidden">{exp.date}</div>
                  </div>
                </div>

                {/* Desktop Date */}
                <div className="hidden md:block text-zinc-500 font-mono text-sm shrink-0 pt-1">
                  {exp.date}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 pl-0 md:pl-19">
                {exp.points.map((point, i) => (
                  <motion.li 
                    key={i} 
                    className="text-zinc-400 leading-relaxed flex items-start text-sm md:text-base"
                  >
                    <span className="text-zinc-600 mr-3 mt-1 shrink-0">▹</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
