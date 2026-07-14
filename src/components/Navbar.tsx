"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#projects" },
    { name: "Blogs", href: "/blogs", external: true },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-3 text-black group cursor-pointer">
            <motion.svg 
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32" fill="currentColor"
            >
              <path d="M60,0H4C1.789,0,0,1.789,0,4v56c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z M53,54H11c-0.553,0-1-0.447-1-1s0.447-1,1-1h42c0.553,0,1,0.447,1,1S53.553,54,53,54z M53,48H11c-0.553,0-1-0.447-1-1s0.447-1,1-1 h42c0.553,0,1,0.447,1,1S53.553,48,53,48z M11,28h18c0.553,0,1,0.447,1,1s-0.447,1-1,1H11c-0.553,0-1-0.447-1-1S10.447,28,11,28z M10,23c0-0.553,0.447-1,1-1h18c0.553,0,1,0.447,1,1s-0.447,1-1,1H11C10.447,24,10,23.553,10,23z M11,34h18c0.553,0,1,0.447,1,1 s-0.447,1-1,1H11c-0.553,0-1-0.447-1-1S10.447,34,11,34z M11,40h18c0.553,0,1,0.447,1,1s-0.447,1-1,1H11c-0.553,0-1-0.447-1-1 S10.447,40,11,40z M54,41c0,0.553-0.447,1-1,1H35c-0.553,0-1-0.447-1-1V23c0-0.553,0.447-1,1-1h18c0.553,0,1,0.447,1,1V41z M62,12 H2V4c0-1.104,0.896-2,2-2h56c1.104,0,2,0.896,2,2V12z"/>
              <path d="M7,4C5.343,4,4,5.343,4,7s1.343,3,3,3s3-1.343,3-3S8.657,4,7,4z M7,8C6.447,8,6,7.553,6,7s0.447-1,1-1 s1,0.447,1,1S7.553,8,7,8z"/>
              <path d="M33,4H15c-1.657,0-3,1.343-3,3s1.343,3,3,3h18c1.657,0,3-1.343,3-3S34.657,4,33,4z M33,8H15 c-0.553,0-1-0.447-1-1s0.447-1,1-1h18c0.553,0,1,0.447,1,1S33.553,8,33,8z"/>
            </motion.svg>
            <span className="font-black text-xl tracking-tight">
              <a href="#">Rahul.dev</a>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-black font-bold hover:text-zinc-600 transition-colors text-base group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-black font-bold hover:text-zinc-600 transition-colors text-base group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Rahul Son Boro.pdf"
              download
              className="bg-black text-white px-5 py-2.5 rounded hover:bg-zinc-800 transition-colors flex items-center gap-2 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
            >
              Resume <Download size={16} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-zinc-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block text-zinc-800 hover:text-black font-semibold text-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-zinc-800 hover:text-black font-semibold text-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="/Rahul Son Boro.pdf"
                download
                className="bg-black text-white px-5 py-3 rounded hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 font-bold mt-4 w-full"
              >
                Resume <Download size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
