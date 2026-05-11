"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for students and casual users.",
    features: [
      "10 AI replies per month",
      "Basic tone selection",
      "Gmail integration",
      "Standard support"
    ],
    buttonText: "Start for Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    description: "Ideal for professionals and freelancers.",
    features: [
      "Unlimited AI replies",
      "All 10+ tone styles",
      "Priority context analysis",
      "Summarization & Action items",
      "Advanced security",
      "Priority support"
    ],
    buttonText: "Get Pro Now",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Built for teams and large organizations.",
    features: [
      "Custom AI model training",
      "Team collaboration tools",
      "Admin dashboard & Analytics",
      "Outlook & Custom API sync",
      "Dedicated account manager",
      "SSO & Custom security"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Simple, Transparent <span className="text-secondary">Pricing</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl glass flex flex-col ${tier.popular ? "border-primary/50 neon-border scale-105 z-10" : "border-white/10"}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-white/40">/month</span>}
                </div>
                <p className="text-white/50 text-sm">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? "bg-primary text-white hover:opacity-90" : "bg-white/5 text-white hover:bg-white/10"}`}>
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
