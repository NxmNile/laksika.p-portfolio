import React from "react";
import Navbar from "../../components/navbar";
import FadeIn from "../../components/FadeIn";

export default function ActivityPage() {
  return (
    <>
      <div className="relative bg-[#242424]">
        <FadeIn triggerOnMount className="w-full">
          <div className="bg-[#242424] w-full flex flex-col items-center">
            <div className="flex items-center justify-center w-full mt-10">
              <Navbar />
            </div>

            <div className="w-full max-w-[858px] mt-12 text-white px-4 mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left md:ml-10">
                Activity
              </h1>

              <div className="flex flex-col md:flex-row gap-8 mt-10">
                {/* Left: description */}
                <div className="w-full md:w-1/3 flex flex-col text-left text-sm sm:text-base font-medium">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">
                    Tokyo Game Show
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Showcasing my game developed during my internship at
                    Kanagawa Institute of Technology. Exhibited at Tokyo Game Show
                    2024
                  </p>
                </div>

                {/* Right: images - responsive: stacked on mobile, two columns on md+ with matched md height */}
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left column: two stacked images; use auto height on mobile and split md height on larger screens */}
                  <div className="flex flex-col gap-4 md:h-[360px]">
                    <img
                      src="/image/IMG_9675.jpg"
                      alt="Activity 1"
                      className="w-full h-auto max-h-[260px] md:h-1/2 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
                    />

                    <img
                      src="/image/IMG_9695.jpg"
                      alt="Activity 3"
                      className="w-full h-auto max-h-[260px] md:h-1/2 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  {/* Right column: single image fills full md column height, but stays natural height on mobile */}
                  <div className="flex items-center md:h-[360px]">
                    <img
                      src="/image/IMG_9596.jpg"
                      alt="Activity 2"
                      className="w-full h-auto max-h-[320px] md:h-full object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <div className="w-full max-w-[858px] px-4  mx-auto mb-10 mt-20">
          <div className="h-px bg-white w-full rounded" />
        </div>
        <div className="bg-[#242424]">
             <div className="w-full max-w-[858px] mt-12 text-white px-4 mx-auto pb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left md:ml-10">
                Certificate
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/image/Cer1.jpg" target="_blank" rel="noopener noreferrer" className="mx-auto">
                  <img
                    src="/image/Cer1.jpg"
                    alt="Certificate 1"
                    className="mx-auto max-w-full h-auto max-h-[280px] sm:max-h-[220px] md:max-h-none rounded-2xl shadow-md transition-transform duration-200 hover:scale-105"
                  />
                </a>

                <a href="/image/cer2.png" target="_blank" rel="noopener noreferrer" className="mx-auto">
                  <img
                    src="/image/cer2.png"
                    alt="Certificate 2"
                    className="mx-auto max-w-full h-auto max-h-[280px] sm:max-h-[220px] md:max-h-none rounded-2xl shadow-md transition-transform duration-200 hover:scale-105"
                  />
                </a>

                <a href="/image/cer3.jpg" target="_blank" rel="noopener noreferrer" className="mx-auto">
                  <img
                    src="/image/cer3.jpg"
                    alt="Certificate 3"
                    className="mx-auto max-w-full h-auto max-h-[280px] sm:max-h-[220px] md:max-h-none rounded-2xl shadow-md transition-transform duration-200 hover:scale-105"
                  />
                </a>

                <a href="/image/cer4.jpg" target="_blank" rel="noopener noreferrer" className="mx-auto">
                  <img
                    src="/image/cer4.jpg"
                    alt="Certificate 4"
                    className="mx-auto max-w-full h-auto max-h-[280px] sm:max-h-[220px] md:max-h-none rounded-2xl shadow-md transition-transform duration-200 hover:scale-105"
                  />
                </a>
              </div>

              </div>
        </div>
        <div className="absolute rounded-full bg-[#813fcc] opacity-40 blur-3xl pointer-events-none -left-6 top-20 w-20 h-20 sm:top-28 sm:w-36 sm:h-36 md:top-36 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]"></div>

      </div>
    </>
  );
}
