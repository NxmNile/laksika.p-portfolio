import React from "react";
import Navbar from "../../components/navbar";

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="bg-[#242424] min-h-screen w-full flex flex-col items-center pb-20">
        <div className="flex items-center justify-center w-full mt-10">
          <Navbar />
        </div>

        <div className="w-[858px] mt-14 text-white">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>

          <p className="mb-6 text-lg font-medium">
            Hello — I'm <span className="text-[#A781FF]">Laksika Panich</span>, a
            software engineer who enjoys building user-centered web
            experiences. Below is a quick overview of my background and
            interests. (Replace any placeholder text with your real details.)
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="bg-[#1f1f1f] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Education</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <div className="font-semibold">Bachelor of Science — Major</div>
                  <div className="text-gray-300">University / Year</div>
                </li>
                <li>
                  <div className="font-semibold">High School / Diploma</div>
                  <div className="text-gray-300">School name / Year</div>
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-400">Tip: replace placeholders above with your actual institutions and dates.</div>
            </section>

            <section className="bg-[#1f1f1f] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Soft skills</h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Communication</li>
                <li>Team collaboration</li>
                <li>Problem solving</li>
                <li>Adaptability</li>
                <li>Time management</li>
              </ul>
            </section>

            <section className="bg-[#1f1f1f] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Languages</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">Thai</span> — Native / Fluent
                </li>
                <li>
                  <span className="font-semibold">English</span> — Professional
                  working proficiency
                </li>
                <li>
                  <span className="font-semibold">Japanese</span> — Basic / Learn
                </li>
              </ul>
            </section>

            <section className="bg-[#1f1f1f] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Hobbies</h2>
              <div className="text-sm space-y-2">
                <div>Reading — tech blogs & design articles</div>
                <div>Photography — landscape & portraits</div>
                <div>Traveling — exploring new places and food</div>
                <div>Cooking — trying out recipes</div>
              </div>
            </section>
          </div>

          <div className="mt-8 text-gray-400 text-sm">
            Notes: If you want specific layout tweaks (icons, progress bars,
            downloadable resume button, or animated entries), tell me which and
            I'll add them.
          </div>
        </div>

        <div className="absolute w-100 h-100 rounded-full bg-[#813fcc] opacity-40 blur-3xl pointer-events-none top-100 -left-10"></div>
      </div>
    </div>
  );
}
