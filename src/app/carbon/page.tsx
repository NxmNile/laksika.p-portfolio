import React from "react";
import Navbar from "../../components/navbar";
import FadeIn from "../../components/FadeIn";
import Link from "next/link";

export default function CarbonPage() {
  return (
    <>
      <div className="relative">
        <FadeIn triggerOnMount className="w-full">
          <div className="bg-[#242424] min-h-screen w-full flex flex-col items-center pb-10">
            <div className="flex items-center justify-center w-full mt-10">
              <Navbar />
            </div>

            <div className="w-full max-w-[858px] mt-12 text-white px-4 mx-auto">
              <div className="mb-4">
                <Link href="/project" className="inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 rounded-full px-3 py-1 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back</span>
                </Link>
              </div>
           
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left md:ml-10">Carbon Quest</h1>

              <div className="flex flex-col gap-8 mt-6">
                {/* Hero image */}
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-[560px]">
                    <img src="/image/carbon/Screenshot 2025-11-18 215432.png" alt="Carbon Quest screenshot" className="w-full h-64 sm:h-80 md:h-[720px] lg:h-[880px] object-cover rounded-2xl shadow-md" />
                  </div>
                </div>

                {/* Description */}
                <div className="w-full flex flex-col text-left text-sm sm:text-base font-medium">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">About</h2>
                  <p className="text-gray-200 leading-relaxed">
                    Carbon Quest is an environmental educational game that helps players understand how much carbon they use in daily activities. The game presents scenarios and mini-challenges that teach carbon-saving choices through gameplay.
                    I contributed as the Game Developer focusing on optimizing performance and adding detailed mechanics to make the educational elements.
                  </p>
                     <div className="mt-6">
                    <a href="https://carbonweb.piprecise.com/game-multi-lang" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#A781FF] text-white px-4 py-2 rounded-2xl shadow hover:opacity-95">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7v7m0-7L10 14" />
                      </svg>
                      <span>Visit website</span>
                    </a>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-sm text-gray-300 font-semibold">Role</h3>
                    <p className="text-gray-200">Game Developer (optimizations, gameplay detail)</p>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm text-gray-300 font-semibold">Tech</h3>
                    <p className="text-gray-200">Unity, C#</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="absolute rounded-full bg-[#813fcc] opacity-40 blur-3xl pointer-events-none -left-6 top-20 w-20 h-20 sm:top-28 sm:w-36 sm:h-36 md:top-36 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]"></div>
      </div>
    </>
  );
}
