import React from "react";
import Navbar from "../../components/navbar";
import FadeIn from "../../components/FadeIn";

export default function ResumePage() {
	return (
		<>
			<div className="relative">
				<div className="bg-[#242424] min-h-screen w-full flex flex-col items-center pb-10">
					<div className="flex items-center justify-center w-full mt-10">
						<Navbar />
					</div>

					<div className="w-full max-w-[858px] mt-12 text-white px-4">
						<h1 className="text-3xl sm:text-4xl font-bold mb-6 md:ml-10 ml-0">Resume</h1>

						<div className="flex flex-col items-center gap-6">
							<FadeIn>
								<img
									src="/image/resume.png"
									alt="Resume preview"
									className="w-full rounded-2xl shadow-md object-contain"
								/>
							</FadeIn>

							<div className="flex gap-4">
								<a
									href="/image/resume_laksika.pdf"
									download
									className="btn bg-[#20D8E5] hover:bg-[#19B2BF] border-none h-12 px-6 text-black font-semibold rounded-3xl flex items-center justify-center"
								>
									Download PDF
								</a>

								
							</div>
						</div>
					</div>
				</div>

				<div className="absolute rounded-full bg-[#813fcc] opacity-40 blur-3xl pointer-events-none -left-10 top-[40px] w-24 h-24 sm:top-[80px] sm:w-40 sm:h-40 md:top-[100px] md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"></div>
			</div>
		</>
	);
}
