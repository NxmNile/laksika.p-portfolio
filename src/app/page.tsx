import React from "react";
import Navbar from "../components/navbar";
import Timeline from "../components/timeline";
import SkillBar from "../components/skillbar";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="bg-[#242424] min-h-screen w-full flex flex-col items-center">
          <div className="flex items-center justify-center w-full mt-10">
            <Navbar />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14 px-4 w-full max-w-[858px] relative mx-auto">
            <div>
              <img src="/image/profile.jpg" alt="Profile" className="rounded-full w-60 h-60 object-cover" />
            </div>

            <div className="w-full md:w-2/3 text-white ml-10 font-semibold">
              <h2 className="text-4xl mb-4">Hello!</h2>
              <ul className="list-disc list-inside space-y-4 text-2xl">
                <div>
                  I'm <span className="text-[#A781FF]">Laksika Panich</span>,
                </div>
                <div>Software Engineer</div>
                <a
                  href="/resume"
                  className="btn bg-[#20D8E5] hover:bg-[#19B2BF] border-none h-12 w-40 text-black font-semibold rounded-3xl mt-4 flex items-center justify-center"
                >
                  Resume
                </a>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-white text-left w-full max-w-[858px] mx-auto px-4">
            I'm a developer who loves building fun, functional, and
            user centered digital experiences. From modern websites to mobile
            apps and playful games, I enjoy solving problems through creativity
            and code. I'm always learning and excited to take on new challenges
            that push my skills further.
          </div>
          <div className="w-full max-w-[858px] mt-20 mx-auto px-4">
            <h1 className="text-white text-3xl font-bold mt-10">
              Work Experince
            </h1>
            <div className="relative">
              <img
                src="/image/star1.png"
                alt="Star"
                className="absolute right-4 top-8 w-10 h-10 sm:right-8 sm:top-10 sm:w-14 sm:h-14 md:right-12 md:top-16 md:w-24 md:h-24 lg:right-20 lg:top-20 lg:w-40 lg:h-40 opacity-80 pointer-events-none"
              />
              <Timeline />
            </div>
          </div>
          <div className="w-full max-w-[858px] mb-20 mx-auto px-4">
            <h1 className="text-white text-3xl font-bold mt-10 text-center">Skills!</h1>
            <div className="mt-6">
              <SkillBar />
            </div>
          </div>
        </div>


  <div className="absolute rounded-full bg-[#813fcc] opacity-40 blur-3xl pointer-events-none -left-6 top-20 w-20 h-20 sm:top-24 sm:w-36 sm:h-36 md:top-32 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]"></div>

      </div>
    </>
  );
}
