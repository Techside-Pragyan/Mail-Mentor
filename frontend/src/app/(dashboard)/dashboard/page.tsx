"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles
} from "lucide-react";

const stats = [
  { label: "Emails Generated", value: "124", icon: Sparkles, color: "text-primary" },
  { label: "Time Saved", value: "8.5h", icon: Clock, color: "text-secondary" },
  { label: "Accuracy Rate", value: "99.2%", icon: CheckCircle, color: "text-green-400" },
  { label: "Active Threads", value: "12", icon: MessageSquare, color: "text-accent" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, User!</h1>
          <p className="text-white/40">Here's what's happening with your emails today.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:neon-border transition-all flex items-center gap-2">
          <Zap className="w-4 h-4" /> New Reply
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:neon-border transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-white/40">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Activity */}
          <div className="glass p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> Recent Replies
            </h3>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center font-bold">
                      J
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-primary transition-colors">Job Application Follow-up</div>
                      <div className="text-xs text-white/40">Sent to: John Doe • 2 hours ago</div>
                    </div>
                  </div>
                  <div className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-bold">
                    Professional
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Usage Chart Placeholder */}
          <div className="glass p-8 rounded-3xl border border-white/5 h-full">
            <h3 className="text-xl font-bold mb-6">Weekly Usage</h3>
            <div className="h-[300px] flex flex-col items-center justify-center text-white/20">
              <div className="flex items-end gap-2 h-32 mb-4">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className="w-4 bg-primary/40 rounded-t-sm"
                  />
                ))}
              </div>
              <p className="text-xs font-medium">Activity is up 12% this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
