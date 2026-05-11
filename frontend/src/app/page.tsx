import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Hero />
      <Features />
      
      <footer className="py-12 border-t border-white/10 text-center text-white/40 text-sm">
        <p>&copy; 2026 Mail-Mentor. Built with ❤️ for the future of communication.</p>
      </footer>
    </main>
  );
}
