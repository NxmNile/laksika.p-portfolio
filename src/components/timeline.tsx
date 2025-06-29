import React from "react";

const Timeline = () => {
  return (
    <div className="p-8 max-w-sm  mt-10">
      <ol className="relative w-[858px] items-center">
        {/* --- Step 1: Completed --- */}
        <li className="mb-8 ms-20 ">
          {/* เส้นเชื่อมสีฟ้า */}
          <div className="absolute w-1 h-140 mt-20 bg-[#20D8E5] rounded-full -start-[0.8rem] "></div>

          {/* วงกลมและไอคอน */}
          <span className="absolute flex items-center justify-center w-10 h-10 mt-20 bg-purple-100 rounded-full -start-8 "></span>

          <div className="bg-[#CFCFCF]/25  hover:bg-[#737373]/25 rounded-3xl  p-6 border-2 border-white/50 backdrop-blur-xs">
            <h2 className="text-lg font-semibold mb-4">
              January 2025 - Present
            </h2>
            <p className="font-semibold text-sm">
              <span className="text-[#A781FF]">Research Assistant </span>at
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
        <li className="mb-8 ms-20">
          

          {/* วงกลมและไอคอน */}
          <span className="absolute flex items-center justify-center w-10 h-10 mt-15 bg-purple-100 rounded-full -start-8 "></span>

          <div className="bg-[#CFCFCF]/25  hover:bg-[#737373]/25 rounded-3xl p-6 border-2 border-white/50 backdrop-blur-xs">
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
        <li className="mb-8 ms-20">
         

          {/* วงกลมและไอคอน */}
          <span className="absolute flex items-center justify-center w-10 h-10 mt-15 bg-white rounded-full -start-8 "></span>

          <div className="bg-[#CFCFCF]/25  hover:bg-[#737373]/25 rounded-3xl p-6 border-2 border-white/50 backdrop-blur-xs">
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
        <li className="ms-20">
          {/* วงกลมและไอคอน */}
          <span className="absolute flex items-center justify-center w-10 h-10 mt-15 bg-white  rounded-full -start-8 ">
            
          </span>

          <div className="bg-[#CFCFCF]/25 hover:bg-[#737373]/25 rounded-3xl p-6 border-2 border-white/50 backdrop-blur-xs">
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
