"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  PenTool, 
  History, 
  FileText, 
  Settings, 
  LogOut, 
  Zap, 
  Mail 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: PenTool, label: "Generate Reply", href: "/dashboard/generate" },
  { icon: History, label: "History", href: "/dashboard/history" },
  { icon: FileText, label: "Templates", href: "/dashboard/templates" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen glass border-r border-white/10 flex flex-col p-6 sticky top-0">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-bold">MailMentor</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.label} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider">Pro Plan</span>
          </div>
          <p className="text-[10px] text-white/40 mb-3 leading-tight">
            Get unlimited replies and advanced AI models.
          </p>
          <button className="w-full py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
            Upgrade
          </button>
        </div>

        <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
