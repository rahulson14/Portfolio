"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <Image 
                src="/assets/Group 1000015845.png" 
                alt="About Me Illustration" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl tracking-tight mb-8">
              <span className="font-normal">About</span> <span className="font-black">Me</span>
            </h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
              <p>
                I am Rahul Son Boro - a Computer Science graduate, full-stack builder, and applied AI developer from India with an open, global mindset for problem-solving.
              </p>
              <p>
                I see software engineering not as a rigid set of rules or restricted languages, but as an open canvas. Whether I am crafting clean web interfaces in Next.js, writing Python and PostgreSQL backends, or embedding intelligent AI and research pipelines, I am always ready to learn, adapt, and build whatever a solution truly needs across the entire digital ecosystem.
              </p>
              <p>
                From building custom OCR document converters to engineering autonomous research engines, I enjoy tackling complex puzzles with simple, reliable code. I believe that great technology knows no boundaries and my goal is always to create software that makes a meaningful, positive impact for people everywhere.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
