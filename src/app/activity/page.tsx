import React from "react";
import Navbar from "../../components/navbar";
import FadeIn from "../../components/FadeIn";
import Aurora from "../../components/Aurora";
import Link from "next/link";

export default function ActivityPage() {
  return (
    <div className="relative bg-[#242424] min-h-screen w-full overflow-hidden">
      <Aurora />

      {/* Fixed navbar and back button for Activity page */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none">
        <div className="w-full max-w-[858px] flex items-center justify-center pointer-events-auto">
          <Navbar />
        </div>
      </div>

      {/* Separate fixed Back button so it's always visible */}
      <Link
        href="/project"
        className="fixed top-4 left-4 z-[60] bg-white/95 text-black rounded-full px-3 py-1 text-sm font-medium shadow-md hover:opacity-95"
      >
        Back
      </Link>

      <div className="relative z-10">
        <FadeIn triggerOnMount className="w-full">
          <div className="w-full flex flex-col items-center">
            {/* spacer so content isn't hidden behind fixed navbar */}
            <div className="h-20" />

            <div className="w-full max-w-[858px] mt-8 text-white px-4 mx-auto">
              <div className="text-xs font-bold tracking-[0.16em] uppercase text-center md:text-left md:ml-10 mb-3" style={{ color: "var(--accent-cyan)" }}>
                Beyond the desk
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center md:text-left md:ml-10">
                Activity
              </h1>

              <div className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col md:flex-row gap-8">
                {/* Left: description */}
                <div className="w-full md:w-1/3 flex flex-col text-left text-sm sm:text-base font-medium">
                  <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--accent-purple)" }}>
                    Tokyo Game Show
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Showcasing my game developed during my internship at
                    Kanagawa Institute of Technology. Exhibited at Tokyo Game Show
                    2024
                  </p>
                </div>

                {/* Right: images - make a 2-column grid on mobile so images aren't too large */}
                <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                  <img
                    src="/image/IMG_9675.jpg"
                    alt="Activity 1"
                    className="w-full h-40 sm:h-56 md:h-[360px] object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
                  />
                  <img
                    src="/image/IMG_9596.jpg"
                    alt="Activity 2"
                    className="w-full h-40 sm:h-56 md:h-[360px] object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
                  />
                  <img
                    src="/image/IMG_9695.jpg"
                    alt="Activity 3"
                    className="w-full h-40 sm:h-56 md:h-[360px] object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300 col-span-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="w-full max-w-[858px] px-4 mx-auto mb-10 mt-16">
          <div className="h-px w-full rounded" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }} />
        </div>

        <div>
          <div className="w-full max-w-[858px] mt-4 text-white px-4 mx-auto pb-16">
            <div className="text-xs font-bold tracking-[0.16em] uppercase text-center md:text-left md:ml-10 mb-3" style={{ color: "var(--accent-purple)" }}>
              Proof of work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center md:text-left md:ml-10">
              Certificate
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <a href="/image/Cer1.jpg" target="_blank" rel="noopener noreferrer" className="block w-full">
                <img
                  src="/image/Cer1.jpg"
                  alt="Certificate 1"
                  className="w-full h-40 sm:h-44 md:h-auto object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </a>

              <a href="/image/cer2.png" target="_blank" rel="noopener noreferrer" className="block w-full">
                <img
                  src="/image/cer2.png"
                  alt="Certificate 2"
                  className="w-full h-40 sm:h-44 md:h-auto object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </a>

              <a href="/image/cer3.jpg" target="_blank" rel="noopener noreferrer" className="block w-full">
                <img
                  src="/image/cer3.jpg"
                  alt="Certificate 3"
                  className="w-full h-40 sm:h-44 md:h-auto object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </a>

              <a href="/image/cer4.jpg" target="_blank" rel="noopener noreferrer" className="block w-full">
                <img
                  src="/image/cer4.jpg"
                  alt="Certificate 4"
                  className="w-full h-40 sm:h-44 md:h-auto object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
