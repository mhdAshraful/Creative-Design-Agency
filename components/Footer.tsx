import React from "react";

const Footer = () => {
	return (
		<div className="relative md:pt-10 lg:pt-28  lg:px-18 mt-10">
			<img
				src="/Images/bgFooter.png"
				className="self-center  -left-20  md:top-10 lg:top-0 scale-400 md:scale-200 lg:scale-100"
				alt="background"
			/>
			<div className="w-full flex flex-col justify-end items-center gap-6  ">
				<div className="w-full flex flex-col gap-8 md:flex-col lg:flex-row lg:justify-between lg:mb-28">
					<div className="flex flex-col gap-8 md:flex-row lg:flex-col lg:w-[20%]">
						<p className="text-textgray z-10">
							Ready to capture the moments that matter most?
						</p>
						<p className="text-2xl z-10 ">
							Let&apos;s make it happen. Contact me today!
						</p>
					</div>
					<div className="z-10 w-[60%] flex flex-col gap-4">
						<p className="text-textgray z-10">LETS TALK</p>
						<p className="font-medium z-10">(850) 998-9500</p>
						<p className="font-bold  text-3xl md:text-4xl lg:text-5xl underline z-10">
							hi@framefolio.com
						</p>

						<p className="text-textgray z-10">Agency Studio</p>
						<p className=" z-10">(Based in USA)</p>
					</div>
					<div className="text-lg font-medium z-10">
						<p>Home</p>
						<p>About</p>
						<p>Work</p>
						<p>Blog</p>
					</div>
				</div>
				<div className="w-full text-sm flex flex-col md:flex-row  md:justify-between">
					<div className=" z-10">
						© 2025 Framefolio. All Right Reserved
					</div>
					<div className=" z-10 text-textgray flex flex-row gap-4">
						<p>Spotify</p>
						<p>LinkedIn</p>
						<p>GitHub</p>
						<p>YouTube</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
