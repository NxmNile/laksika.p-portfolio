import React from "react";
import Navbar from "../../components/navbar";
import FadeIn from "../../components/FadeIn";
import Aurora from "../../components/Aurora";

export default function ResumePage() {
	return (
		<div className="relative bg-[#242424] min-h-screen w-full overflow-hidden">
			<Aurora />

			<div className="relative z-10 flex flex-col items-center pb-16">
				<div className="flex items-center justify-center w-full mt-8 px-4">
					<Navbar />
				</div>

				<div className="w-full max-w-[858px] mt-14 text-white px-4">
					<div className="text-xs font-bold tracking-[0.16em] uppercase text-center md:text-left md:ml-10 mb-3" style={{ color: "var(--accent-cyan)" }}>
						Full history
					</div>
					<h1 className="text-3xl sm:text-4xl font-extrabold mb-8 md:ml-10 ml-0 text-center md:text-left">Resume</h1>

					<div className="flex flex-col items-center gap-6">
						<FadeIn className="w-full glass-card rounded-3xl p-3 sm:p-4">
							<img
								src="/image/resume.png"
								alt="Resume preview"
								className="w-full rounded-2xl object-contain"
							/>
						</FadeIn>

						<a
							href="/image/resume_laksika.pdf"
							download
							className="inline-flex items-center gap-2.5 font-bold text-[15px] text-[#101014] px-7 py-3.5 rounded-full"
							style={{
								background: "linear-gradient(120deg, var(--accent-cyan), #6fe3ec)",
								boxShadow: "0 10px 30px rgba(32,216,229,0.45), 0 0 0 1px rgba(255,255,255,0.25) inset",
							}}
						>
							Download PDF
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13"></path><polyline points="7 11 12 16 17 11"></polyline><line x1="4" y1="20" x2="20" y2="20"></line></svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
