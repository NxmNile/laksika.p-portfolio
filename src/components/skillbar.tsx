
'use client';

import React, { useEffect, useRef } from 'react';

type IconItem = { label: string; color?: string; text?: string; src?: string };

const sections: { title: string; icons: IconItem[] }[] = [
		{
			title: 'Programming',
			icons: [
				{ label: 'Python', src: '/image/Python.svg' },
				{ label: 'C', src: '/image/C.svg' },
				{ label: 'C#', src: '/image/C%23%20(CSharp).svg' },
				{ label: 'TypeScript', src: '/image/TypeScript.svg' },
				{ label: 'Dart', src: '/image/Dart.svg' },
			],
		},
	{
		title: 'Tools',
		icons: [
			{ label: 'Git', src: '/image/GitHub.svg' },
			{ label: 'Figma', src: '/image/Figma.svg' },
			{ label: 'Photoshop', src: '/image/Adobe%20Photoshop.svg' },
			{ label: 'Adobe AI', src: '/image/Adobe%20Illustrator.svg' },
			{ label: 'Blender', src: '/image/Blender.svg' },
			{ label: 'Maya', src: '/image/Autodesk%20Maya.svg' },
			{ label: 'Arduino', src: '/image/Arduino.svg' },
			{ label: 'Flutter', src: '/image/Flutter.svg' },
			{ label: 'After Effects', src: '/image/After%20Effects.svg' },
			{ label: 'Premiere Pro', src: '/image/Adobe%20Premiere%20Pro.svg' },
			
		],
	},
	{
		title: 'Game Engine',
		icons: [
			{ label: 'Unity', src: '/image/Unity.svg' },
			{ label: 'Unreal', src: '/image/Unreal%20Engine.svg' },
			{ label: 'Godot', src: '/image/Godot%20Engine.svg' },
		],
	},
	{
		title: 'Database',
		icons: [
			{ label: 'MySQL', src: '/image/MySQL.svg' },
			{ label: 'SQL lite', src: '/image/SQLite.svg' },
		],
	},
	{
		title: 'Website Technologies',
		icons: [
			{ label: 'HTML', src: '/image/HTML5.svg' },
			{ label: 'CSS', src: '/image/CSS3.svg' },
			{ label: 'Next.js', src: '/image/Next.js.svg' },
			{ label: 'Tailwind', src: '/image/Tailwind%20CSS.svg' },
		],
	},
];

const SkillBar: React.FC = () => {
	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const items = container.querySelectorAll('.skill-section');
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
		<section ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
			{sections.map((sec) => (
				<div
					key={sec.title}
					className="skill-section p-4 rounded-3xl bg-white/30 backdrop-blur-md border border-white shadow-sm transform transition-all duration-700 ease-out opacity-0 translate-y-6"
				>
					<h3 className="text-lg font-semibold mb-2 text-white">{sec.title}</h3>

					<div className="flex flex-wrap gap-1">
						{sec.icons.map((ic) => (
							<div key={ic.label} className="flex items-center justify-center w-20 h-20">
								{ic.src ? (
									<img src={ic.src} alt={ic.label} className="w-12 h-12 object-contain" />
								) : (
									<svg
										width="56"
										height="56"
										viewBox="0 0 56 56"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="rounded-md"
										>
										<rect width="56" height="56" rx="8" fill={ic.color} />
										<text
											x="50%"
											y="60%"
											textAnchor="middle"
											fontWeight="700"
											fontSize="14"
											fill={ic.color === '#F7DF1E' ? '#000' : '#fff'}
										>
											{ic.text}
										</text>
										</svg>
										)}
									</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default SkillBar;
