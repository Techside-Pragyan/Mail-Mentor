"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 glass border-b border-white/10" : "py-6 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:neon-border transition-all">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Mail<span className="text-primary">Mentor</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it Works", "Pricing", "FAQ"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="px-6 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-primary hover:text-white transition-all">
            Sign In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {["Features", "How it Works", "Pricing", "FAQ"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-lg font-medium text-white/60 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button className="w-full py-3 rounded-xl bg-primary text-white font-bold">
            Sign In
          </button>
        </motion.div>
      )}
    </nav>
  );
}
