import React from "react";
import Navbar from "../../components/navbar";
import Link from 'next/link';
import SkillBar from "../../components/skillbar";
import Timeline from "../../components/timeline";

export default function About() {
	return (
		<>
			<div className="relative">
				<div className="bg-[#242424] min-h-screen w-full flex flex-col items-center">
					<div className="flex items-center justify-center w-full mt-10">
						<Navbar />
					</div>

					<div className="w-full max-w-[858px] mt-12 text-white px-4">
						<h1 className="text-3xl sm:text-4xl font-bold mb-6 md:ml-10 ml-0">About Me</h1>

						<div className="flex flex-col md:flex-row gap-8">
							<div className="w-full md:w-1/3 flex flex-col items-center">
								<img
									src="/image/IMG_9198.png"
									alt="Profile"
									className="rounded-4xl w-40 h-40 sm:w-44 sm:h-44 md:w-56 md:h-56 object-cover"
								/>

								<div className="mt-6 text-center">
									<h2 className="text-xl md:text-2xl font-semibold">Laksika Panich</h2>
									<p className="text-sm sm:text-sm text-gray-200 mt-1">Software Engineer • Game & Web Developer</p>
									<Link
										href="/resume"
										className="btn bg-[#20D8E5] hover:bg-[#19B2BF] border-none h-12 w-40 text-black font-semibold rounded-3xl mt-4 flex items-center justify-center mx-auto md:mx-0"
									>
										Resume
									</Link>
								</div>

								<div className="mt-6 w-full text-left text-sm text-gray-200 space-y-2">
									<p>
										<span className="font-semibold text-white">Location:</span> Bangkok, Thailand
									</p>
									<p>
										<span className="font-semibold text-white">Email:</span>{' '}
										<a href="mailto:your.email@example.com" className="text-[#A781FF]">
											laksikapanich@gmail.com
										</a>
									</p>
									<p>
										<span className="font-semibold text-white">Linkedin:</span> Laksika Panich
									</p>
                  <p>
                    <span className="font-semibold text-white">GitHub: </span>{'NxmNile'}
                  </p>
								</div>
							</div>

							<div className="w-full md:w-2/3 text-white font-medium space-y-4 text-sm sm:text-sm">
                <p>
                  You can call me 'Namnile'
                </p>
								<p className="leading-relaxed">
									I'm a software engineer who builds delightful and useful digital experiences across web, mobile and
									games. I enjoy translating ideas into polished products from responsive front-end interfaces to
									gameplay systems.
								</p>

								<p className="leading-relaxed">
									My background includes internships and research assistant roles where I contributed to healthcare web
									apps, educational games, and UX/UI design. I focus on clarity, accessibility and performance and I like
									learning new tools (Next.js, Tailwind, Unity, Godot).
								</p>

								<p className="leading-relaxed">
									Outside of code I enjoy 3D art, game design, and exploring ways to teach public health topics through
									interactive experiences.
								</p>

								<div className="mt-4">
									<h3 className="text-lg sm:text-xl font-semibold">What I enjoy building</h3>
									<ul className="list-disc list-inside mt-2 text-sm sm:text-base text-gray-200 space-y-1">
										<li>Web Application</li>
										<li>Educational and serious games</li>
										<li>Fun and interesting software</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full max-w-[858px] mt-12 text-white //mb-20 px-4">
						<h2 className="text-3xl font-bold mb-6">Hobbies</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
							<div className="p-3 sm:p-4 bg-white/10 rounded-2xl border border-white/20 flex flex-col items-center justify-center h-20 sm:h-28">
								<div className="text-2xl sm:text-3xl">📷</div>
								<div className="mt-1 sm:mt-2 font-medium text-sm sm:text-base">Photography</div>
							</div>

							<div className="p-3 sm:p-4 bg-white/10 rounded-2xl border border-white/20 flex flex-col items-center justify-center h-20 sm:h-28">
								<div className="text-2xl sm:text-3xl">🖌️</div>
								<div className="mt-1 sm:mt-2 font-medium text-sm sm:text-base">3D Art</div>
							</div>

							<div className="p-3 sm:p-4 bg-white/10 rounded-2xl border border-white/20 flex flex-col items-center justify-center h-20 sm:h-28">
								<div className="text-2xl sm:text-3xl">🎮</div>
								<div className="mt-1 sm:mt-2 font-medium text-sm sm:text-base">Play game</div>
							</div>

							<div className="p-3 sm:p-4 bg-white/10 rounded-2xl border border-white/20 flex flex-col items-center justify-center h-20 sm:h-28">
								<div className="text-2xl sm:text-3xl">🎧</div>
								<div className="mt-1 sm:mt-2 font-medium text-sm sm:text-base">Music</div>
							</div>
						</div>
							</div>
					
						<div className="w-full max-w-[1100px] px-4 mt-10 mb-10">
							<h2 className="text-3xl font-bold mb-6">Gallery</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{/* Left column: stacked hero + feature */}
								<div className="md:col-span-2 flex flex-col gap-4">
									<img
										src="/image/000018.jpg"
										alt="Gallery photo 1"
										className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
									/>

									<img
										src="/image/IMG_0467.jpg"
										alt="Gallery photo 5"
										className="w-full h-40 md:h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
									/>
								</div>

								{/* Right column: stacked small images */}
								<div className="grid grid-rows-3 gap-4">
									<img
										src="/image/000021.jpg"
										alt="Gallery photo 2"
										className="w-full h-40 md:h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
									/>

									<img
										src="/image/000030.jpg"
										alt="Gallery photo 3"
										className="w-full h-40 md:h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
									/>

									<img
										src="/image/000031.jpg"
										alt="Gallery photo 4"
										className="w-full h-40 md:h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
									/>
									</div>
							</div>
						</div>

				</div>

			<div className="absolute rounded-full bg-[#813fcc] opacity-40 blur-3xl pointer-events-none -left-10 top-[40px] w-24 h-24 sm:top-[80px] sm:w-40 sm:h-40 md:top-[100px] md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"></div>
		</div>
		</>
	);
}

