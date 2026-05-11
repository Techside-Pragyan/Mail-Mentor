"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail, Zap, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10 text-sm font-medium text-primary-foreground/80">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AI-Powered Email Excellence</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Write Emails <br />
            <span className="text-primary">10x Faster</span> with AI.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            Generate professional, context-aware, and human-like email replies in seconds. 
            The futuristic way to handle your inbox.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold transition-all hover:neon-border overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 glass text-white rounded-xl font-semibold hover:bg-white/5 transition-colors">
              View Demo
            </button>
          </div>
        </motion.div>

        {/* Floating Cards Demo */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-sm text-white/40 font-mono">mail-mentor_v1.0</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs text-white/40 mb-2 uppercase tracking-wider font-bold">Incoming Email</p>
                  <p className="text-white/80 italic">"Hi team, I'm interested in your enterprise plan but have some questions about security compliance. Can we schedule a call?"</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/40">
                  <div className="flex items-center gap-1"><Mail className="w-4 h-4" /> Professional</div>
                  <div className="flex items-center gap-1"><Zap className="w-4 h-4" /> Instant</div>
                </div>
              </div>

              <div className="text-left space-y-4 relative">
                <div className="p-4 rounded-xl glass border border-primary/30 relative overflow-hidden">
                  <p className="text-xs text-primary mb-2 uppercase tracking-wider font-bold">AI Suggested Reply</p>
                  <div className="text-white/90">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 2 }}
                    >
                      "Hello! We'd love to discuss our enterprise security features with you. Our platform is SOC2 Type II compliant..."
                    </motion.p>
                  </div>
                  <div className="absolute top-0 right-0 p-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-20 h-20 glass rounded-2xl flex items-center justify-center rotate-12"
          >
            <Zap className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 w-24 h-24 glass rounded-full flex items-center justify-center -rotate-12"
          >
            <Shield className="w-12 h-12 text-secondary" />
          </motion.div>
        </div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
    </section>
  );
}
