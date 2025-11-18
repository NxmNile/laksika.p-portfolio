import React from "react";
import Navbar from "../../components/navbar";
import FadeIn from "../../components/FadeIn";
import Link from "next/link";

export default function DrakePage() {
  return (
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

            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left md:ml-10">Drake — 3D Model</h1>

            <div className="flex flex-col gap-8 mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img src="/image/drake/drake1.jpg" alt="Drake sculpt" className="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-md" />
                </div>

                <div>
                  <img src="/image/drake/Screenshot 2023-10-22 174954.png" alt="Drake retopo" className="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-md" />
                </div>

                <div>
                  <img src="/image/drake/Screenshot 2025-11-19 003156.png" alt="Drake texture" className="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-md" />
                </div>
                <div>
                    <img src="/image/drake/Screenshot 2025-11-19 003126.png" alt="Drake UVs" className="w-full h-56 sm:h-72 object-cover rounded-2xl shadow-md" />
                </div>

               
              </div>

              <div className="w-full flex flex-col text-left text-sm sm:text-base font-medium">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-200 leading-relaxed">
                  This was a classroom assignment. Character model named &quot;Drake&quot; inspired by God of War. I handled the full asset pipeline: sculpting the high resolution model, performing retopology to create an efficient mesh, unwrapping UVs for texturing, and painting textures in Adobe Substance Painter.
                </p>

                <div className="mt-6">
                  <h3 className="text-sm text-gray-300 font-semibold">Role</h3>
                  <p className="text-gray-200">3D Modeler / Texture Artist — sculpt, retopo, UVs, texture painting</p>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm text-gray-300 font-semibold">Tech</h3>
                  <p className="text-gray-200">Blender, Adobe Substance Painter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="absolute rounded-full bg-[#813fcc] opacity-40 blur-3xl pointer-events-none -left-6 top-20 w-20 h-20 sm:top-28 sm:w-36 sm:h-36 md:top-36 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]"></div>
    </div>
  );
}
