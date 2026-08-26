"use client";

import React from "react";
import { motion } from "framer-motion";

type Entry = {
  date: string;
  role: string;
  org: string;
  desc: string;
  accent: "purple" | "cyan";
};

const entries: Entry[] = [
  {
    date: "January 2025 - Present",
    role: "Research Assistant and Software Engineer",
    org: "at HITAP, Thailand",
    desc: "Development in multiple projects involves various roles, including Web Developer (Front-end), UX/UI designer for healthcare website and Game Developer for developing game that providing knowledge",
    accent: "purple",
  },
  {
    date: "August 2024 - December 2024",
    role: "Internship",
    org: "at HITAP, Thailand",
    desc: "Development in multiple projects involves various roles, including Web Developer (Front-end) and UX/UI designer for healthcare website.",
    accent: "cyan",
  },
  {
    date: "May 2024 - July 2024",
    role: "Internship",
    org: "at Kanagawa Institute of Technology, Japan",
    desc: "Solo Game Developer using Unity and Godot to create 3D and Role play game. Reseacrch aboout porting game from Unity to Godot",
    accent: "purple",
  },
  {
    date: "August 2023 - December 2023",
    role: "Research Assistant",
    org: "at Center of Specialty Innovation (Cosi), Bangkok University, Thailand",
    desc: "Developing Games providing knowledge about disease prevention for Department of Disease Control",
    accent: "cyan",
  },
];

const Timeline = () => {
  return (
    <div className="w-full">
      <ol className="relative w-full pl-9 sm:pl-10">
        <div
          className="absolute left-2.5 top-1.5 bottom-1.5 w-0.5 rounded-sm"
          style={{ background: "linear-gradient(180deg, var(--accent-purple), var(--accent-cyan) 55%, rgba(255,255,255,0.06))" }}
        />

        {entries.map((entry, i) => (
          <motion.li
            key={entry.date}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="relative mb-5 last:mb-0"
          >
            <span
              className={`absolute -left-9 sm:-left-10 top-7 w-5 h-5 rounded-full border-2 ${
                entry.accent === "purple" ? "pulse-node-purple" : "pulse-node-cyan"
              }`}
              style={{
                background: "#242424",
                borderColor: entry.accent === "purple" ? "var(--accent-purple)" : "var(--accent-cyan)",
              }}
            >
              <span
                className="absolute inset-[3px] rounded-full"
                style={{ background: entry.accent === "purple" ? "var(--accent-purple)" : "var(--accent-cyan)" }}
              />
            </span>

            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-[11px] font-bold tracking-[0.08em] uppercase text-white/45 mb-2.5">{entry.date}</h3>
              <p className="font-semibold text-sm mb-2">
                <span style={{ color: entry.accent === "purple" ? "var(--accent-purple)" : "var(--accent-cyan)" }}>
                  {entry.role}{" "}
                </span>
                {entry.org}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">{entry.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
