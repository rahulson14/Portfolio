"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Personalized UI Aesthetic Score Prediction",
    description: "Curated a 100-UI paired dataset rated by users; trained a FedAvg (EfficientNet-B0) model with per-user rating centering to predict individualized 1-10 scores. Engineered user-adaptive normalization for demographic groups.",
    tech: "EfficientNet-B0, FedAvg, Ollama",
    featured: true,
    date: "2026-05",
    image: "/ui.png", // Add your image path here!
    link: "https://github.com/rahulson14/UI-Aesthetic-scoring.git" // Put your actual project source link here!
  },
  {
    id: "02",
    title: "Dual-Purpose Mall Monitoring",
    description: "Built a real-time threat detection pipeline using YOLOv8, MediaPipe Pose, and SlowFast Network to identify hostile activity in mall surveillance. Integrated VGG16 for facial expression analysis and anomaly alerts.",
    tech: "VGG16, YOLOv8, MediaPipe, SlowFast",
    featured: true,
    date: "2025-05",
    image: "/mall.png", // Add your image path here!
    link: "https://github.com/rahulson14/Smart-Mall-Monitor.git" // Put your actual project source link here!
  },
  {
    id: "03",
    title: "Assamese Movie Recommender",
    description: "Created a dataset of 1,119 Assamese films and built a content-based recommender using TF-IDF vectorization and Cosine Similarity. Integrated Difflib for fuzzy input matching to overcome cold-start problems.",
    tech: "TF-IDF, Cosine Similarity, Pandas, NumPy",
    featured: false,
    date: "2023-05",
    image: "/movie.png", // Add your image path here!
    link: "https://github.com/rahulson14/Assamese-Movie-RS.git" // Put your actual project source link here!
  },
  {
    id: "04",
    title: "OCR-Enhanced Word Document Generation from Images",
    description: "Built a two-stage pipeline that converts images to structured Markdown (via PaddleOCR PP‑StructureV3) then reconstructs high‑fidelity .docx files with table, code, and diagram preservation.",
    tech: "PaddleOCR (PP‑StructureV3), python‑docx, BeautifulSoup4",
    featured: true,
    date: "2025-06",
    image: "/ocr.png", // Add your image path here!
    link: "https://github.com/rahulson14/OCR-to-DOCX-Pipeline.git" // Put your actual project source link here!
  },
  {
    id: "05",
    title: "SkillBuilder AI: An Intelligent Personal Micro-Learning Companion",
    description: "Designed an n8n‑orchestrated micro‑learning assistant that uses LangChain + Google Gemini to generate personalized 10–14 day learning roadmaps and deliver them via Telegram.",
    tech: "n8n, LangChain, gemini‑2.0‑flash, Telegram Bot API, YouTube Data API",
    featured: false,
    date: "2025-05",
    image: "/skill.png", // Add your image path here!
    link: "https://github.com/rahulson14/SkillBuilder-AI.git" // Put your actual project source link here!
  },
  // {
  //   id: "06",
  //   title: "Placeholder Project 6",
  //   description: "This is a placeholder description for your sixth project. You can update this text later with the actual details, metrics, and outcomes of your work.",
  //   tech: "Next.js, TailwindCSS, MongoDB",
  //   featured: false,
  //   date: "2024-01",
  //   link: "https://github.com/rahulson14" // Put your actual project source link here!
  // }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const loadMore = () => setVisibleCount(prev => prev + 3);

  const showLess = () => {
    setVisibleCount(3);
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(3); // Reset pagination when changing tabs
  };

  // Filter and sort logic
  let filteredProjects = [...projects];
  if (activeTab === "Featured") {
    filteredProjects = projects.filter(p => p.featured);
  } else if (activeTab === "Recent") {
    // Sort by date descending (newest first)
    filteredProjects.sort((a, b) => b.date.localeCompare(a.date));
  }
  // "All" just uses the array as-is

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-16 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tight text-white mb-8">
            <span className="font-normal">My</span> <span className="font-black">Projects</span>
          </h2>

          {/* Professional Tab Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {["Featured", "Recent", "All"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all border-2 font-mono ${activeTab === tab
                  ? "bg-white text-black border-white translate-y-0 translate-x-0 shadow-none"
                  : "bg-black text-zinc-400 border-zinc-700 shadow-[4px_4px_0px_0px_#3f3f46] -translate-y-1 -translate-x-1 hover:text-white hover:border-white hover:shadow-[4px_4px_0px_0px_white]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${activeTab}-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => project.image && setSelectedImage(project.image as string)}
                  className={`w-full md:w-1/2 aspect-square bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center relative overflow-hidden group hover:border-zinc-500 transition-colors ${project.image ? 'cursor-zoom-in' : ''}`}
                >
                  {/* If the project has an image, render it. Otherwise fallback to the number. */}
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  ) : (
                    <span className="text-6xl font-black text-zinc-800 select-none z-10">{project.id}</span>
                  )}

                  <div className="absolute inset-0 bg-linear-to-br from-zinc-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                </motion.div>

                <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                  <span className="text-2xl md:text-3xl font-bold text-white block">{project.id}</span>
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider font-mono">{project.tech}</span>
                    <motion.a
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link || "#"}
                      target={project.link && project.link !== "#" ? "_blank" : undefined}
                      rel={project.link && project.link !== "#" ? "noopener noreferrer" : undefined}
                      className="text-white hover:text-white transition-colors inline-flex items-center justify-center p-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-500 rounded hover:shadow-[2px_2px_0px_0px_white]"
                      title="View Project Source / Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 md:mt-32 flex justify-center">
          {visibleCount < filteredProjects.length ? (
            <button
              onClick={loadMore}
              className="px-8 py-4 border-2 border-white bg-black text-white font-bold tracking-wide uppercase font-mono transition-all shadow-[6px_6px_0px_0px_white] hover:shadow-[2px_2px_0px_0px_white] hover:translate-y-1 hover:translate-x-1 active:shadow-none active:translate-y-1.5 active:translate-x-1.5"
            >
              Load More Projects
            </button>
          ) : visibleCount > 3 ? (
            <button
              onClick={showLess}
              className="px-8 py-4 border-2 border-white bg-black text-white font-bold tracking-wide uppercase font-mono transition-all shadow-[6px_6px_0px_0px_white] hover:shadow-[2px_2px_0px_0px_white] hover:translate-y-1 hover:translate-x-1 active:shadow-none active:translate-y-1.5 active:translate-x-1.5"
            >
              Show Less
            </button>
          ) : null}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <Image
                src={selectedImage}
                alt="Project Full View"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 m-4 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
