import React from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import Aurora from "../../components/Aurora";

type Project = {
	id: number;
	title: string;
	description: string;
	href?: string;
	image?: string;
};

const projects: Project[] = [
	{
		id: 9,
		title: "[Game] Before It's Too Late",
		description: "An educational platformer for elementary school students about the dangers of e-cigarettes and their toxic chemicals.",
		href: "/ecig",
		image: "/image/ecig/image (22).png",
	},
	{
		id: 8,
		title: "[App] Mellow Life",
		description: "A mobile wellness app that turns daily routines into quests, designed and adapted for elderly users. Available on the App Store and Google Play.",
		href: "/mellowlife",
		image: '/image/mellowlife/app_icon.png',
	},
	{
		id: 1,
		title: "[Game] Whisker Detective",
		description: "Intership project: A detective adventure game developed using Unity and Godot, featuring engaging puzzles. Exhibited at Tokyo Game Show 2024.",
		href: "/whisker",
		image: '/image/whisker/Poster.png',
	},
    {
        id: 2,
        title: "[Website] HP Eval",
        description: "Internship project: A healthcare website for evaluating health policies, designed with a focus on user experience and accessibility.",
        href: "/hp_eval",
        image: '/image/hp/icon_white.png',
    },
	{
		id: 3,
		title: "[Game] Carbon Quest",
		description: "Game project using Unity to educate players on carbon footprint reduction through interactive scenarios.",
		href: "/carbon",
		image: '/image/carbon/Screenshot 2025-11-18 215303.png',
	},

	{
		id: 4,
		title: "[Game] Chicken Home",
		description: "Final Project for Game Development class, a 2D Game developed using Unity. This game provides knowledge about avian influenza and its prevention. Collaborated with the Department of Disease Control.",
		href: "/chicken",
		image: '/image/chicken/image (6).png',
	},
	{
		id: 5,
		title: "[Game] Cockroach Buster",
		description: "VR game project developed during class, utilizing Unity to create an immersive experience.",
		href: "/cockroach",
		image: '/image/cockroach/CockroachBusters-1.png',
	},
	{
		id: 6,
		title: "[3D Model] Drake from God of War",
		description: "Created detailed 3D model of Drake using Blender.",
		href: "/drake",
		image: '/image/drake/drake1.jpg',
	},

    {
        id: 7,
        title:"[Animation] Princess Peach",
        description: "3D animation project using Maya.",
        href: "/peach",
		image: '/image/peach/Screenshot 2025-11-19 002449.png',
    },

];

export default function ProjectPage() {
	return (
		<div className="relative bg-[#242424] min-h-screen w-full overflow-hidden">
			<Aurora />

			<FadeIn triggerOnMount className="relative z-10 w-full">
				<div className="w-full flex flex-col items-center pb-10">
					<div className="flex items-center justify-center w-full mt-8 px-4">
						<Navbar />
					</div>

					<div className="w-full max-w-[858px] mt-14 text-white px-4 mx-auto">
						<div className="text-xs font-bold tracking-[0.16em] uppercase text-center md:text-left md:ml-10 mb-3" style={{ color: "var(--accent-cyan)" }}>
							Selected work
						</div>
						<h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center md:text-left md:ml-10">Projects</h1>

							<div className="grid gap-4">
								{projects.map((p, i) => (
									<FadeIn key={p.id} delay={i * 60} className="w-full">
										<Link href={p.href ?? '#'} className="group block">
											<div className="glass-card rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between hover:border-[rgba(167,129,255,0.5)]">
												<div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
													<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white/10 border border-white/10 flex-shrink-0">
														<img
															src={p.image ?? '/image/profile.jpg'}
															alt={`${p.title} preview`}
															className="w-full h-full object-cover"
														/>
													</div>

													<div className="ml-0">
														<h2 className="text-lg sm:text-xl font-semibold text-white">{p.title}</h2>
														<p className="text-sm text-white/60 mt-1 max-w-xl">{p.description}</p>
													</div>
												</div>

												<span
													className="flex items-center gap-1.5 text-sm font-bold mt-2 sm:mt-0 flex-shrink-0"
													style={{ color: "var(--accent-cyan)" }}
												>
													View
													<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
												</span>
											</div>
										</Link>
									</FadeIn>
								))}
							</div>
					</div>
				</div>
			</FadeIn>
		</div>
	);
}
