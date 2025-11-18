import React from "react";
import Navbar from "../../components/navbar";
import FadeIn from "../../components/FadeIn";
import Link from "next/link";

export default function CockroachPage() {
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

              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left md:ml-10">Cockroach Buster</h1>

              <div className="flex flex-col gap-8 mt-6">
                {/* Video hero */}
                <div className="w-full">
                  <div className="w-full rounded-2xl overflow-hidden shadow-md">
                    <video controls className="w-full h-64 sm:h-96 object-cover bg-black">
                      <source src="/image/cockroach/gameplay (1) - Trim.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Supporting image */}
                <div className="w-full">
                  <img src="/image/cockroach/image (3).png" alt="Cockroach Buster screenshot" className="w-full h-96 sm:h-[420px] md:h-[560px] lg:h-[720px] object-cover rounded-2xl shadow-md" />
                </div>

                {/* Description */}
                <div className="w-full flex flex-col text-left text-sm sm:text-base font-medium">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">About</h2>
                  <p className="text-gray-200 leading-relaxed">
                    Cockroach Buster is a VR/3D classroom project built with Unity to create a fast-paced, immersive experience where players clear rooms of cockroaches. I worked on gameplay mechanics and satisfying.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-sm text-gray-300 font-semibold">Role</h3>
                    <p className="text-gray-200">Gameplay developer, Project Manager</p>
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
