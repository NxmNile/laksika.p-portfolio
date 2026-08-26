"use client";

import React from "react";
import { motion } from "framer-motion";

type IconItem = { label: string; src: string };

const sections: { title: string; icon: React.ReactNode; icons: IconItem[]; wide?: boolean }[] = [
	{
		title: 'Programming',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
		),
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
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path></svg>
		),
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
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="5"></rect><line x1="7" y1="12" x2="9" y2="12"></line><line x1="8" y1="11" x2="8" y2="13"></line><circle cx="16" cy="10.5" r="0.9" fill="#fff"></circle><circle cx="14" cy="13.5" r="0.9" fill="#fff"></circle></svg>
		),
		icons: [
			{ label: 'Unity', src: '/image/Unity.svg' },
			{ label: 'Unreal', src: '/image/Unreal%20Engine.svg' },
			{ label: 'Godot', src: '/image/Godot%20Engine.svg' },
		],
	},
	{
		title: 'Database',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0018 0V5"></path><path d="M3 12a9 3 0 0018 0"></path></svg>
		),
		icons: [
			{ label: 'MySQL', src: '/image/MySQL.svg' },
			{ label: 'SQL lite', src: '/image/SQLite.svg' },
		],
	},
	{
		title: 'Website Technologies',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"></path></svg>
		),
		icons: [
			{ label: 'HTML', src: '/image/HTML5.svg' },
			{ label: 'CSS', src: '/image/CSS3.svg' },
			{ label: 'Next.js', src: '/image/Next.js.svg' },
			{ label: 'Tailwind', src: '/image/Tailwind%20CSS.svg' },
		],
		wide: true,
	},
];

const SkillBar: React.FC = () => {
	return (
		<section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
			{sections.map((sec, i) => (
				<motion.div
					key={sec.title}
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.6, delay: i * 0.06 }}
					className={`glass-card rounded-3xl p-7 ${sec.wide ? 'md:col-span-2' : ''}`}
				>
					<div className="flex items-center gap-3 mb-5">
						<div
							className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/15 flex-shrink-0"
							style={{ background: "linear-gradient(135deg, rgba(167,129,255,0.25), rgba(32,216,229,0.25))" }}
						>
							{sec.icon}
						</div>
						<h3 className="text-lg font-bold text-white m-0">{sec.title}</h3>
					</div>

					<div className="flex flex-wrap gap-2.5">
						{sec.icons.map((ic) => (
							<div
								key={ic.label}
								className="flex items-center gap-2.5 text-sm font-semibold text-white/85 bg-white/5 border border-white/10 rounded-full pl-2.5 pr-4 py-2 transition-colors duration-200 hover:text-white hover:border-[rgba(32,216,229,0.55)] hover:bg-[rgba(32,216,229,0.08)]"
							>
								<img src={ic.src} alt={ic.label} className="w-6 h-6 object-contain" />
								{ic.label}
							</div>
						))}
					</div>
				</motion.div>
			))}
		</section>
	);
};

export default SkillBar;
