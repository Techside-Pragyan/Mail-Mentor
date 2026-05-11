"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Zap, Globe, MessageSquare, Sparkles } from "lucide-react";

const features = [
  {
    title: "Smart Context Analysis",
    description: "Our AI doesn't just read words; it understands intent, emotion, and context to generate the perfect response.",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Real-time Multi-Tone",
    description: "Switch between Professional, Friendly, Formal, or Casual tones instantly with a single click.",
    icon: <Sparkles className="w-6 h-6 text-secondary" />,
    gradient: "from-pink-500/20 to-orange-500/20"
  },
  {
    title: "Enterprise Security",
    description: "Your emails are private. We use end-to-end encryption and never store your sensitive data.",
    icon: <Shield className="w-6 h-6 text-accent" />,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Global Translation",
    description: "Reply to international clients in their native language with perfect grammar and cultural nuance.",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Instant Summaries",
    description: "Long email threads? Get a concise summary and action items in seconds.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Gmail & Outlook Sync",
    description: "Seamlessly integrates with your favorite email providers for a unified workflow.",
    icon: <Mail className="w-6 h-6 text-red-400" />,
    gradient: "from-red-500/20 to-pink-500/20"
  }
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Powering the Future of <br />
            <span className="text-primary">Communication</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Experience a suite of AI-driven tools designed to make your professional life 
            smoother, faster, and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl glass hover:neon-border transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
