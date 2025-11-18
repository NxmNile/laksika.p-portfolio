"use client";

import React, { useEffect, useRef } from "react";

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.timeline-item');
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((it) => observer.observe(it));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="p-6 w-full max-w-[858px] mx-auto mt-10">
      <ol className="relative w-full items-center">
        {/* --- Step 1: Completed --- */}
  <li className="timeline-item relative mb-8 opacity-0 translate-y-6 transform transition-all duration-700 ease-out">
    <div className="bg-[#CFCFCF]/25  rounded-3xl  p-6 border-2 border-white/50 backdrop-blur-xs w-full">
            <h2 className="text-lg font-semibold mb-4">
              January 2025 - Present
            </h2>
            <p className="font-semibold text-sm">
              <span className="text-[#A781FF]">Research Assistant and Software Engineer </span>at
              HITAP, Thailand
            </p>
            <p className="text-sm mt-1">
              Development in multiple projects involves various roles, including
              Web Developer (Front-end), UX/UI designer for healthcare website
              and Game Developer for developing game that providing knowledge
            </p>
          </div>
        </li>

        {/* --- Step 2: Completed --- */}
  <li className="timeline-item relative mb-8 opacity-0 translate-y-6 transform transition-all duration-700 ease-out">
    <div className="bg-[#CFCFCF]/25  rounded-3xl p-6 border-2 border-white/50 backdrop-blur-xs w-full">
            <h2 className="text-lg font-semibold mb-4">
              August 2024 - December 2024
            </h2>
            <p className="font-semibold text-sm">
              <span className="text-[#A781FF]">Internship </span>at HITAP,
              Thailand
            </p>
            <p className="text-sm mt-1">
              Development in multiple projects involves various roles, including
              Web Developer (Front-end) and UX/UI designer for healthcare
              website.
            </p>
          </div>
        </li>

        {/* --- Step 3: Current --- */}
  <li className="timeline-item relative mb-8 opacity-0 translate-y-6 transform transition-all duration-700 ease-out">
    <div className="bg-[#CFCFCF]/25  rounded-3xl p-6 border-2 border-white/50 backdrop-blur-xs w-full">
            <h2 className="text-lg font-semibold mb-4">May 2024 - July 2024</h2>
            <p className="font-semibold text-sm">
              <span className="text-[#A781FF] ">Internship </span>at Kanagawa
              Institute of Technology,{" "}
              <span className="text-[#20D8E5]">Japan</span>
            </p>
            <p className="text-sm mt-1">
              Solo Game Developer using Unity and Godot to create 3D and Role
              play game. Reseacrch aboout porting game from Unity to Godot
            </p>
          </div>
        </li>

        {/* --- Step 4: Upcoming (Last) --- */}
  <li className="timeline-item relative mb-0 opacity-0 translate-y-6 transform transition-all duration-700 ease-out">
    <div className="bg-[#CFCFCF]/25 rounded-3xl p-6 border-2 border-white/50 backdrop-blur-xs w-full">
            <h2 className="text-lg font-semibold mb-4">
              August 2023 - December 2023
            </h2>
            <p className="font-semibold text-sm">
              <span className="text-[#A781FF]">Research Assistant </span>at
              Center of Specialty Innovation (Cosi), Bangkok University,
              Thailand
            </p>
            <p className="text-sm mt-1">
              Developing Games providing knowledge about disease prevention for
              Department of Disease Control
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
