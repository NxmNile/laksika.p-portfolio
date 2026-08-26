"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Timeline from "../components/timeline";
import SkillBar from "../components/skillbar";
import Aurora from "../components/Aurora";

const roles = ["Software Engineer", "Game & Web Developer", "Business Analyst", "Project Manager"];

export default function Home() {
  return (
    <div className="relative bg-[#242424] min-h-screen w-full overflow-hidden">
      <Aurora />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center w-full mt-8 px-4">
          <Navbar />
        </div>

        <div className="w-full max-w-[1000px] mx-auto px-4">
          {/* ---------- Hero ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-center pt-16 md:pt-24 pb-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] mx-auto"
            >
              <div
                className="absolute -inset-10 rounded-full blur-[30px] -z-10"
                style={{ background: "radial-gradient(circle, rgba(167,129,255,0.45), transparent 70%)" }}
              />
              <div
                className="absolute -inset-3.5 rounded-full animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, var(--accent-purple), var(--accent-cyan), var(--accent-purple))",
                  WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                }}
              />
              <img
                src="/image/profile.jpg"
                alt="Laksika Panich"
                className="relative z-[1] w-full h-full rounded-full object-cover border-4 border-[#242424]"
              />

              <div
                className="hidden md:flex absolute z-10 -top-1 -right-14 items-center gap-2 rounded-full px-4 py-2 pl-2.5 text-xs font-semibold text-white/95 animate-float whitespace-nowrap"
                style={{
                  background: "rgba(36,36,36,0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
                }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(32,216,229,0.18)" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#20D8E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"></path><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line></svg>
                </span>
                Web Development
              </div>

              <div
                className="hidden md:flex absolute z-10 bottom-2 -left-16 items-center gap-2 rounded-full px-4 py-2 pl-2.5 text-xs font-semibold text-white/95 animate-float-delay whitespace-nowrap"
                style={{
                  background: "rgba(36,36,36,0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
                }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(167,129,255,0.22)" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A781FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"></rect></svg>
                </span>
                Game Development
              </div>

              <div
                className="hidden md:flex absolute z-10 top-1/2 -translate-y-1/2 -left-24 items-center gap-2 rounded-full px-4 py-2 pl-2.5 text-xs font-semibold text-white/95 animate-float-delay-2 whitespace-nowrap"
                style={{
                  background: "rgba(36,36,36,0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
                }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(32,216,229,0.18)" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#20D8E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"></rect><line x1="11" y1="18" x2="13" y2="18"></line></svg>
                </span>
                App Development
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase mb-4" style={{ color: "var(--accent-cyan)" }}>
                <span className="w-7 h-0.5 rounded-sm hidden sm:block" style={{ background: "linear-gradient(90deg, var(--accent-cyan), transparent)" }} />
                Hello, I&apos;m
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[58px] leading-[1.05] font-extrabold mb-4 tracking-tight">
                Laksika <span className="text-gradient-accent">Panich</span>
              </h1>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-2 mb-7">
                {roles.map((role, i) => (
                  <React.Fragment key={role}>
                    {i > 0 && <span className="text-white/30 text-sm">&middot;</span>}
                    <span className="text-sm font-semibold text-white/90 bg-white/[0.06] border border-white/[0.14] px-4 py-1.5 rounded-full">
                      {role}
                    </span>
                  </React.Fragment>
                ))}
              </div>

              <a
                href="/resume"
                className="inline-flex items-center gap-2.5 font-bold text-[15px] text-[#101014] px-7 py-3.5 rounded-full"
                style={{
                  background: "linear-gradient(120deg, var(--accent-cyan), #6fe3ec)",
                  boxShadow: "0 10px 30px rgba(32,216,229,0.45), 0 0 0 1px rgba(255,255,255,0.25) inset",
                }}
              >
                Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            </motion.div>
          </div>

          {/* ---------- Bio ---------- */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="max-w-[780px] text-base sm:text-lg leading-[1.75] text-white/80 pb-16 sm:pb-20 text-center md:text-left mx-auto md:mx-0"
          >
            I&apos;m a developer who loves building <b className="text-white font-semibold">fun, functional, and user centered</b> digital
            experiences. From modern websites to mobile apps and playful games, I enjoy solving problems through
            creativity and code. I&apos;m always learning and excited to take on new challenges that push my skills
            further.
          </motion.p>

          {/* ---------- Work Experience ---------- */}
          <div className="pb-16 sm:pb-20">
            <div className="flex items-baseline gap-3.5 mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold m-0">Work Experience</h2>
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-white/40">2023 &mdash; Present</span>
            </div>
            <Timeline />
          </div>

          {/* ---------- Skills ---------- */}
          <div className="pb-20 sm:pb-28">
            <div className="flex items-baseline gap-3.5 mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold m-0">Skills</h2>
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-white/40">Toolbox</span>
            </div>
            <SkillBar />
          </div>
        </div>
      </div>
    </div>
  );
}
