import React from "react";
import Navbar from "../../components/navbar";
import Aurora from "../../components/Aurora";
import Link from 'next/link';

const hobbies = [
	{
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
		),
		label: 'Photography',
	},
	{
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
		),
		label: '3D Art',
	},
	{
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"></rect><line x1="7" y1="12" x2="9" y2="12"></line><line x1="8" y1="11" x2="8" y2="13"></line><circle cx="16" cy="10.5" r="0.9" fill="#fff"></circle><circle cx="14" cy="13.5" r="0.9" fill="#fff"></circle></svg>
		),
		label: 'Play game',
	},
	{
		icon: (
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
		),
		label: 'Music',
	},
];

export default function About() {
	return (
		<div className="relative bg-[#242424] min-h-screen w-full overflow-hidden">
			<Aurora />

			<div className="relative z-10 flex flex-col items-center">
				<div className="flex items-center justify-center w-full mt-8 px-4">
					<Navbar />
				</div>

				<div className="w-full max-w-[858px] mt-14 text-white px-4">
					<div className="text-xs font-bold tracking-[0.16em] uppercase text-center md:text-left md:ml-10 mb-3" style={{ color: "var(--accent-cyan)" }}>
						Get to know me
					</div>
					<h1 className="text-3xl sm:text-4xl font-extrabold mb-8 md:ml-10 ml-0 text-center md:text-left">About Me</h1>

					<div className="flex flex-col md:flex-row gap-8">
						<div className="w-full md:w-1/3 flex flex-col items-center">
							<div className="glass-card rounded-4xl p-6 w-full flex flex-col items-center">
								<div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48">
									<div
										className="absolute -inset-3 rounded-full animate-spin-slow"
										style={{
											background: "conic-gradient(from 0deg, var(--accent-purple), var(--accent-cyan), var(--accent-purple))",
											WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
											mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
										}}
									/>
									<img
										src="/image/profile.jpg"
										alt="Profile"
										className="relative z-[1] rounded-full w-full h-full object-cover border-4 border-[#242424]"
									/>
								</div>

								<div className="mt-6 text-center">
									<h2 className="text-xl md:text-2xl font-bold">Laksika Panich</h2>
									<p className="text-sm text-white/60 mt-1">Software Engineer &bull; Game &amp; Web Developer</p>
									<Link
										href="/resume"
										className="inline-flex items-center justify-center gap-2 font-bold text-sm text-[#101014] h-11 px-6 rounded-full mt-4"
										style={{
											background: "linear-gradient(120deg, var(--accent-cyan), #6fe3ec)",
											boxShadow: "0 8px 22px rgba(32,216,229,0.4)",
										}}
									>
										Resume
									</Link>
								</div>

								<div className="mt-6 w-full text-left text-sm text-white/70 space-y-2.5 border-t border-white/10 pt-5">
									<p>
										<span className="font-semibold text-white">Location:</span> Bangkok, Thailand
									</p>
									<p>
										<span className="font-semibold text-white">Email:</span>{' '}
										<a href="mailto:laksikapanich@gmail.com" style={{ color: "var(--accent-purple)" }}>
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
						</div>

						<div className="w-full md:w-2/3 text-white font-medium space-y-4 text-sm sm:text-sm">
							<p>
							You can call me &apos;Namnile&apos;
							</p>
							<p className="leading-relaxed">
							I&apos;m a software engineer who builds delightful and useful digital experiences across web, mobile and
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

							<div className="mt-6 glass-card rounded-3xl p-6">
								<h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--accent-cyan)" }}>What I enjoy building</h3>
								<ul className="space-y-2 text-sm sm:text-base text-white/75">
									<li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-purple)" }} />Web Application</li>
									<li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-cyan)" }} />Educational and serious games</li>
									<li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-purple)" }} />Fun and interesting software</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full max-w-[858px] mt-16 text-white px-4">
					<h2 className="text-2xl sm:text-3xl font-extrabold mb-6">Hobbies</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
						{hobbies.map((h) => (
							<div key={h.label} className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center gap-2.5 h-24 sm:h-28">
								<div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(167,129,255,0.25), rgba(32,216,229,0.25))" }}>
									{h.icon}
								</div>
								<div className="font-semibold text-sm sm:text-base">{h.label}</div>
							</div>
						))}
					</div>
				</div>

				<div className="w-full max-w-[1100px] px-4 mt-14 mb-16 text-white">
					<h2 className="text-2xl sm:text-3xl font-extrabold mb-6">Gallery</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="md:col-span-2 flex flex-col gap-4">
							<img
								src="/image/000018.jpg"
								alt="Gallery photo 1"
								className="w-full h-64 md:h-96 object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
							/>

							<img
								src="/image/IMG_0467.jpg"
								alt="Gallery photo 5"
								className="w-full h-40 md:h-44 object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
							/>
						</div>

						<div className="grid grid-rows-3 gap-4">
							<img
								src="/image/000021.jpg"
								alt="Gallery photo 2"
								className="w-full h-40 md:h-44 object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
							/>

							<img
								src="/image/000030.jpg"
								alt="Gallery photo 3"
								className="w-full h-40 md:h-44 object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
							/>

							<img
								src="/image/000031.jpg"
								alt="Gallery photo 4"
								className="w-full h-40 md:h-44 object-cover rounded-2xl border border-white/10 shadow-md hover:scale-[1.02] transition-transform duration-300"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
