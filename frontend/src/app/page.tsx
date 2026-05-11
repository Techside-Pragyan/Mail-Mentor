import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Hero />
      
      {/* Additional sections will be added here */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Context Aware",
                desc: "AI that understands the subtle nuances of your conversations.",
                icon: "🧠"
              },
              {
                title: "Ultra Fast",
                desc: "Generate replies in under 2 seconds, saving hours of work.",
                icon: "⚡"
              },
              {
                title: "Secure",
                desc: "Your data is encrypted and handled with enterprise-grade security.",
                icon: "🔒"
              }
            ].map((feature, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover:neon-border transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-white/40 text-sm">
        <p>&copy; 2026 Mail-Mentor. Built with ❤️ for the future of communication.</p>
      </footer>
    </main>
  );
}
