import React from "react";
import Navbar from "../../components/navbar";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";

type Project = {
	id: number;
	title: string;
	description: string;
	href?: string;
	image?: string;
};

const projects: Project[] = [
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
		<>
			<div className="relative">
				<FadeIn triggerOnMount className="w-full">
					<div className="bg-[#242424] min-h-screen w-full flex flex-col items-center pb-10">
						<div className="flex items-center justify-center w-full mt-10">
							<Navbar />
						</div>

						<div className="w-full max-w-[858px] mt-12 text-white px-4 mx-auto">
							<h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left md:ml-10">Projects</h1>

								<div className="grid gap-4">
									{projects.map((p) => (
										<FadeIn key={p.id} className="w-full">
											<div className="p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
												<div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
													<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white/10 flex-shrink-0">
														<img
															src={p.image ?? '/image/profile.jpg'}
															alt={`${p.title} preview`}
															className="w-full h-full object-cover"
														/>
													</div>

													<div className="ml-0">
														<h2 className="text-lg sm:text-xl font-semibold text-white">{p.title}</h2>
														<p className="text-sm text-gray-200 mt-1 max-w-xl">{p.description}</p>
													</div>
												</div>

												{p.href ? (
													<Link href={p.href} className="text-sm font-medium text-[#A781FF] hover:underline mt-2 sm:mt-0">
														View
													</Link>
												) : null}
											</div>
										</FadeIn>
									))}
								</div>
						</div>
					</div>
				</FadeIn>

				<div className="absolute rounded-full bg-[#813fcc] opacity-40 blur-3xl pointer-events-none -left-6 top-20 w-20 h-20 sm:top-28 sm:w-36 sm:h-36 md:top-36 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px]"></div>
			</div>
		</>
	);
}
