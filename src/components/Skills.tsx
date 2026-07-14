"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Redux",
      "TailwindCSS",
      "Vite",
      "WordPress",
      "Material-UI",
      "FastAPI",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
      "OpenCV",
    ],
    className: "md:col-span-2 lg:col-span-2 lg:row-span-2 bg-black text-white",
    pillClass: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
  },
  {
    title: "Languages",
    skills: ["Python", "C/C++", "SQL (Postgres)", "JavaScript", "TypeScript", "HTML/CSS"],
    className: "md:col-span-1 lg:col-span-2 bg-zinc-100 text-black",
    pillClass: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white",
  },
  {
    title: "Specializations",
    skills: [
      "Full-Stack Web Development",
      "RESTful & GraphQL APIs",
      "ML & DL",
      "Computer Vision",
      "AI",
      "AI Agents (LangChain & LangGraph)",
      "LLMs & RAG Pipelines",
      "Natural Language Processing",
    ],
    className: "md:col-span-1 lg:col-span-2 bg-white text-black",
    pillClass: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white",
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Git/GitHub",
      "GitHub Actions (CI/CD)",
      "Linux/UNIX",
      "Docker",
      "AWS",
      "Google Cloud Platform",
      "Vercel",
      "Apache/Nginx",
    ],
    className: "md:col-span-2 lg:col-span-3 bg-white text-black",
    pillClass: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white",
  },
  {
    title: "Security & Tools",
    skills: [
      "Wireshark",
      "PortSwigger",
      "Burp Suite",
      "Postman (API Testing)",
      "OWASP Top 10",
    ],
    className: "md:col-span-2 lg:col-span-1 bg-black text-white",
    pillClass: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl tracking-tight text-black">
            <span className="font-normal">My</span> <span className="font-black">Skills</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 md:p-8 lg:p-10 border-2 border-black flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${category.className}`}
            >
              <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 tracking-wide uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-bold transition-colors cursor-default ${category.pillClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
