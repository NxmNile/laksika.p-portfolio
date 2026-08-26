import React from "react";
import Navbar from "../../components/navbar";
import Aurora from "../../components/Aurora";
import FadeIn from "../../components/FadeIn";
import Link from "next/link";

const roles = ["Animator", "Game Designer", "Game Developer"];
const tech = ["Godot", "Spine2D"];

const screenshots = [
  { src: "/image/ecig/image (22).png", alt: "Platformer level dodging vape smoke enemies" },
  { src: "/image/ecig/image (28).png", alt: "Quiz question on whether e-cigarettes are a tobacco product" },
  { src: "/image/ecig/image (24).png", alt: "Multiple choice door puzzle about toxic effects" },
  { src: "/image/ecig/image (23).png", alt: "Collecting toxic chemical items found in e-cigarettes" },
  { src: "/image/ecig/image (27).png", alt: "Myth vs fact speech bubbles about e-cigarettes" },
  { src: "/image/ecig/image (26).png", alt: "Peer pressure dialogue choice scenario" },
  { src: "/image/ecig/image (25).png", alt: "Character symptom profile after e-cigarette use" },
];

export default function EcigPage() {
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
              Educational game
            </div>

            <div className="glass-card rounded-3xl p-5 sm:p-6 mb-4">
              <img
                src="/image/ecig/LogoBeforeIt'sTooLate (1) (1).png"
                alt="Before It's Too Late logo"
                className="w-full max-w-md h-auto mx-auto sm:mx-0"
              />
            </div>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              A 2D platformer built for elementary school students, teaching the dangers of e-cigarettes 
              the toxic chemicals they contain, the health effects, and how to say no to peer pressure 
              through gameplay, quizzes, and myth-busting dialogue.
            </p>

            {/* Screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {screenshots.map((s) => (
                <div key={s.src} className="glass-card rounded-2xl p-2">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "var(--accent-cyan)" }}>About</h2>
                  <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                    Before It&apos;s Too Late is an educational platformer aimed at primary school children.
                    Players run and jump through a city level dodging vape-smoke monsters, collect toxic
                    chemicals found in e-cigarettes (nicotine, formaldehyde, glycerin, metal compounds), and pass
                    through quiz doors that test what they&apos;ve learned about the health risks.
                  </p>
                  <p className="text-white/75 leading-relaxed text-sm sm:text-base mt-4">
                    Story scenes also walk players through real-world scenarios peer pressure from
                    friends, common myths about e-cigarettes being &quot;safer than regular cigarettes, and
                    the physical symptoms of use to build both knowledge and refusal skills.
                  </p>
                  <p className="text-white/75 leading-relaxed text-sm sm:text-base mt-4">
                    I worked as Animator, Game Designer, and Game Developer, building character and UI
                    animations in Spine2D and implementing gameplay and level logic in Godot.
                  </p>
                </div>

                <div className="glass-card rounded-3xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white/50 mb-3">Target audience</h3>
                  <p className="text-white/75 text-sm sm:text-base">Elementary school students</p>
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
