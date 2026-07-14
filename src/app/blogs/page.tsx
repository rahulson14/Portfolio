import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blogs | Coming Soon",
  description: "My engineering and design blog is currently under construction.",
};

export default function BlogsComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background grid pattern for a subtle technical vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="z-10 text-center space-y-6 max-w-2xl w-full flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 border border-zinc-700 bg-zinc-900/50 rounded-full text-zinc-400 text-sm font-mono mb-2 uppercase tracking-widest">
          Under Construction
        </div>
        
        {/* The 404 SVG Graphic */}
        <div className="relative w-full max-w-md aspect-video mb-4">
          <Image 
            src="/404 Hover Effect.svg" 
            alt="Coming Soon Graphic" 
            fill 
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
          Blogs <br/><span className="text-zinc-600">Coming Soon</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 font-mono mt-8 leading-relaxed">
          I am currently building out this space to share my thoughts on AI, system architecture, and UI/UX design. 
        </p>
        
        <div className="pt-12">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white bg-black text-white font-bold tracking-wide uppercase font-mono transition-all shadow-[6px_6px_0px_0px_white] hover:shadow-[2px_2px_0px_0px_white] hover:translate-y-[4px] hover:translate-x-[4px] active:shadow-none active:translate-y-[6px] active:translate-x-[6px]">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
