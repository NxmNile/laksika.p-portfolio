import React from "react";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[#242424] min-h-screen w-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full mt-5">
          <Navbar />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14 p-4 w-[858px] ">
          <div>
            <img src="/image/profilepic.png" alt="Profile" />
          </div>

          <div className="w-full md:w-2/3 text-white ml-10 font-semibold">
            <h2 className="text-4xl mb-4">Hello!</h2>
            <ul className="list-disc list-inside space-y-4 text-2xl">
              <div>
                I'm <span className="text-[#A781FF]">Laksika Panich</span>,
              </div>
              <div>Software Engineer</div>
              <button className="btn bg-[#20D8E5] hover:bg-[#19B2BF] border-none h-12 w-40 text-black font-semibold rounded-3xl mt-4">
                Resume
              </button>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-white text-left w-[858px]">
          I'm a developer who loves building fun, functional, and user-centered
          digital experiences. From modern websites to mobile apps and playful
          games, I enjoy solving problems through creativity and code. I'm
          always learning and excited to take on new challenges that push my
          skills further.
        </div>
        
      </div>
    </>
  );
}
