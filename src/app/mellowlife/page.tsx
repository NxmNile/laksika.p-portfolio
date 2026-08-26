import React from "react";
import Navbar from "../../components/navbar";
import Aurora from "../../components/Aurora";
import FadeIn from "../../components/FadeIn";
import Link from "next/link";

const roles = ["Project Manager", "Frontend Developer", "Animator", "Business Analyst"];
const tech = ["Dart", "Flutter"];

const screenshots = [
  { src: "/image/mellowlife/image (19).png", alt: "Mellow Life daily quests home screen" },
  { src: "/image/mellowlife/image (20).png", alt: "Mellow Life character customization screen" },
  { src: "/image/mellowlife/image (21).png", alt: "Mellow Life completed quests screen" },
];

export default function MellowLifePage() {
  return (
    <div className="relative bg-[#242424] min-h-screen w-full overflow-hidden">
      <Aurora />

      <FadeIn triggerOnMount className="relative z-10 w-full">
        <div className="w-full flex flex-col items-center pb-16">
          <div className="flex items-center justify-center w-full mt-8 px-4">
            <Navbar />
          </div>

          <div className="w-full max-w-[858px] mt-12 text-white px-4 mx-auto">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3.5 py-1.5 text-sm font-medium mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </Link>

            <div className="text-xs font-bold tracking-[0.16em] uppercase mb-3" style={{ color: "var(--accent-cyan)" }}>
              Personal project
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/image/mellowlife/app_icon.png"
                alt="Mellow Life app icon"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-white/10 shadow-lg flex-shrink-0"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold m-0">
                Mellow <span className="text-gradient-accent">Life</span>
              </h1>
            </div>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              A mobile wellness app that turns everyday routines into small, rewarding quests designed and
              tuned specifically for elderly users, guided by a friendly turtle companion.
            </p>

            {/* Screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {screenshots.map((s) => (
                <div key={s.src} className="glass-card rounded-[2rem] p-2">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-auto rounded-[1.5rem] object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "var(--accent-cyan)" }}>About</h2>
                  <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                    Mellow Life helps players build healthy daily habits stretching, drinking water,
                    reading through simple quests that earn XP and coins. The whole experience, from pacing to
                    text size to interactions, is adapted to be comfortable and easy to follow for older users.
                  </p>
                  <p className="text-white/75 leading-relaxed text-sm sm:text-base mt-4">
                    I worked across the full product: managing the roadmap and requirements as Project Manager
                    and Business Analyst, building the Flutter front-end, and animating the mascot and UI
                    interactions.
                  </p>
                </div>

                <div className="glass-card rounded-3xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white/50 mb-4">Download</h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://apps.apple.com/th/app/mellow-life/id6760094330?l=th"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.415 2.06-1.244 2.78-.83.72-1.79 1.13-2.883 1.06-.14-1.11.4-2.05 1.22-2.79.79-.7 1.83-1.14 2.907-1.05zM20.7 17.24c-.44 1-1.02 1.94-1.75 2.83-.99 1.2-2.02 2.4-3.56 2.43-1.5.03-1.99-.89-3.71-.89-1.72 0-2.26.86-3.68.92-1.49.06-2.62-1.29-3.62-2.48-2.02-2.4-3.57-6.78-1.5-9.75 1.03-1.48 2.68-2.42 4.46-2.44 1.44-.03 2.8.97 3.68.97.87 0 2.53-1.2 4.27-1.02.73.03 2.77.29 4.08 2.2-.11.07-2.44 1.42-2.42 4.25.03 3.38 2.97 4.5 3 4.5-.03.09-.47 1.6-1.55 3.17z"/></svg>
                      <span className="text-left leading-tight">
                        <span className="block text-[10px] font-normal text-black/60">Download on the</span>
                        App Store
                      </span>
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.acai.mellowlife&hl=th"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3.6c0-.5.3-1 .8-1.2.4-.2.9-.2 1.3.1l13.4 8.4c.4.2.6.6.6 1.1s-.2.9-.6 1.1L6.1 21.5c-.4.3-.9.3-1.3.1-.5-.2-.8-.7-.8-1.2V3.6z"/></svg>
                      <span className="text-left leading-tight">
                        <span className="block text-[10px] font-normal text-black/60">Get it on</span>
                        Google Play
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card rounded-3xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white/50 mb-3">Role</h3>
                  <div className="flex flex-wrap gap-2">
                    {roles.map((r) => (
                      <span key={r} className="text-xs font-semibold text-white/85 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card rounded-3xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white/50 mb-3">Tech</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <span key={t} className="text-xs font-semibold text-white/85 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
