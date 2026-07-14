"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // If response is not JSON (e.g., 404 HTML on static GitHub Pages hosting)
        throw new Error("Backend API route (/api/contact) is not available on static hosting (GitHub Pages). Please test on Vercel or email rahulsonboro@gmail.com directly.");
      }

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", website: "", message: "" }); // Reset form
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: unknown) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unknown error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col-reverse md:flex-row gap-16">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name *" 
                className="w-full p-4 rounded-none bg-white border-2 border-zinc-200 focus:outline-none focus:border-black transition-all"
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email *" 
                className="w-full p-4 rounded-none bg-white border-2 border-zinc-200 focus:outline-none focus:border-black transition-all"
              />
              <input 
                type="text" 
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your website (If exists)" 
                className="w-full p-4 rounded-none bg-white border-2 border-zinc-200 focus:outline-none focus:border-black transition-all"
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can I help? *" 
                rows={5}
                className="w-full p-4 rounded-none bg-white border-2 border-zinc-200 focus:outline-none focus:border-black transition-all resize-none"
              ></textarea>
              
              {status === "error" && (
                <div className="text-red-500 text-sm font-semibold p-2 bg-red-50 border border-red-200 rounded">
                  {errorMessage || "Something went wrong. Please try again."}
                </div>
              )}
              
              {status === "success" && (
                <div className="text-green-600 text-sm font-semibold p-2 bg-green-50 border border-green-200 rounded">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              
              <div className="pt-4 flex items-center gap-4">
                <button 
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`bg-black text-white px-8 py-3 rounded font-bold transition-colors ${
                    status === "loading" ? "opacity-70 cursor-wait" : 
                    status === "success" ? "bg-green-600 hover:bg-green-700" : 
                    "hover:bg-zinc-800"
                  }`}
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent ✅" : "Get In Touch"}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-8">
              Let&apos;s <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-900 to-zinc-500 text-outline">talk</span> for
              <br />Something special
            </h2>
            <p className="text-zinc-500 text-lg mb-8">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>
            
            <div className="space-y-2">
              <a 
                href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Arahulsonboro%40gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl sm:text-2xl font-bold block hover:text-zinc-600 transition-colors break-word"
                title="Click to compose an email in Gmail"
              >
                rahulsonboro@gmail.com
              </a>
              <a href="tel:+918099731793" className="text-xl sm:text-2xl font-bold block hover:text-zinc-600 transition-colors">
                +91-80997 31793
              </a>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
