"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css";
import bg from "@public/Images/background.png";
import {
	PencilRuler,
	Code,
	Brush,
	DraftingCompass,
	PenTool,
	SwitchCamera,
	ArrowRight,
} from "lucide-react";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Slider from "@/components/ui/slider";
import Contactus from "@/components/Contactus";

const Home = () => {
	const homeRef = useRef(null);

	/**
	 * Font Sizes Scaling Formula
	 *
	 * This formula calculates a fluid font size that scales between a minimum and maximum value
	 * based on the viewport width. It uses the CSS clamp function to ensure the font size stays
	 * within the defined bounds.
	 *
	 * fontSize = clamp(minFont, minFont + (maxFont - minFont) * ((viewport - minScreen) / (maxScreen - minScreen)), maxFont)
	 *
	 * tailwind example:
	 *  text-[clamp(16px,calc(16px+(32-16)*((100vw-320px)/(1280-320))),32px)]
	 *
	 *  lg:text-[425px] md:text-[245px] sm:text-[122px]
	 * 	text-[clamp(122px,calc(122px+(425-122)*((100vw-320px)/(1024-320))),425px)]
	 */

	const icons = {
		pencilRuler: <PencilRuler className="w-5 h-5" />,
		code: <Code className="w-5 h-5" />,
		brush: <Brush className="w-5 h-5" />,
		draftingCompass: <DraftingCompass className="w-5 h-5" />,
		penTool: <PenTool className="w-5 h-5" />,
		switchCamera: <SwitchCamera className="w-5 h-5" />,
	};

	interface ServiceGridItem {
		icon: keyof typeof icons;
		title: string;
		description: string;
	}

	return (
		<>
			{/* Hero Section */}
			<div className="w-full h-screen flex flex-col items-center justify-center relative mt-[-200px] md:mt-[-130px] lg:mt-[-100px] mb-10">
				<h6 className="z-10 fonts-inter uppercase font-medium mb-4 text-[clamp(16px,calc(16px+(28-16)*((90vw-375px)/(1440-375))),28px)]">
					design without boundaries
				</h6>
				<h1 className="z-10 fonts-sixCaps uppercase leading-[1] whitespace-nowrap break-keep tracking-[-2px] text-[clamp(122px,calc(122px+(445-122)*((90vw-375px)/(1440-375))),445px)]">
					Creative Design
				</h1>
				<div className="z-10  fonts-inter font-normal mt-4 leading-[1.375rem]  md:leading-[2rem] lg:leading-[2rem]  w-[70%] md:w-[90%] lg:w-[100%] flex flex-col items-center justify-center text-center text-[clamp(16px,calc(16px+(28-16)*((90vw-375px)/(1440-375))),28px)]">
					<p>Framefolio Design Studio</p>
					<p>bridging imagination and implementation</p>
				</div>

				<Image
					src={bg}
					alt="background photo"
					className=" absolute top-[70%] md:top-[60%] lg:top-[55%]left-1/2 md:left-1/2 -translate-x-1/2 scale-x-450 scale-y-450 md:scale-x-310 md:scale-y-310 lg:scale-x-150 lg:scale-y-160"
				/>
			</div>
			{/* Our Service */}
			<div className="flex flex-col w-full min-h-screen mt-20 border-t-1 border-15percent pt-4">
				<p className="capitalize text-textgray text-[14px] font-inter font-semibold ">
					our services
				</p>
				<h2
					className="text-[1.75rem] font-bold w-full md:w-[35.375rem]"
					dangerouslySetInnerHTML={{ __html: db.service.title }}
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20 w-full">
					{(db.service.gridContent as ServiceGridItem[]).map(
						(item: ServiceGridItem, index: number) => (
							<div
								key={index}
								className="w-full flex flex-col items-start justify-start gap-6 pb-10  border-b-1 last:border-b-0 sm:last:border-b-1 border-15percent "
							>
								<div className="w-full flex flex-row items-center justify-between mb-1 text-[1.2rem] text-secondary">
									<div>{icons[item.icon]}</div>
									<div> 0{index + 1}</div>
								</div>
								<div className="flex flex-col items-start justify-center">
									<h3 className="mb-2 text-xl font-semibold">
										{item.title}
									</h3>
									<p className="text-left text-textgray">
										{item.description}
									</p>
								</div>
							</div>
						)
					)}
				</div>
			</div>
			{/* Feature Projects */}
			<div className="flex flex-col w-full min-h-screen mt-20 border-t-1 border-15percent pt-4">
				<p className="capitalize text-textgray text-[14px] font-inter font-semibold ">
					Featured Projects
				</p>
				<h2
					className="text-[1.75rem] font-bold w-full md:w-[35.375rem]"
					dangerouslySetInnerHTML={{ __html: db.fearturedProjects.title }}
				/>
				<div>
					{db.fearturedProjects.projects.map((project, index) => (
						<Card key={index}>
							<CardHeader className=" relative w-full h-[20.5rem] sm:h-[15.5rem] md:h-[28.628rem] ">
								<Image
									src={project.imageUrl}
									alt="background photo"
									fill
									className=" object-cover  rounded-xl"
								/>
							</CardHeader>
							<CardContent>
								<CardTitle>{project.name}</CardTitle>
								<span className="">{project.category}</span>

								<CardDescription>{project.date}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
				<Button
					variant={"outline"}
					className="mt-10 self-center rounded-3xl p-6"
				>
					View All Works <ArrowRight className="ml-2" />
				</Button>
			</div>

			{/* Our Clients */}
			<div className="flex flex-col w-full h-auto mt-20 border-t-1 border-15percent pt-4">
				<p className="capitalize text-textgray text-[14px] font-inter font-semibold  ">
					Our Clients and Partners
				</p>
				<h2
					className="text-[1.75rem] font-bold w-full md:w-[35.375rem]"
					dangerouslySetInnerHTML={{ __html: db.clients.title }}
				/>
				<div className="w-screen overflow-clip mt-10">
					<Marquee
						fade={true}
						direction="left"
						reverse={false}
						pauseOnHover={false}
						className="" // pass class to change gap or speed
						innerClassName="" // pass class to change gap or speed
					>
						<Image
							src={"/Images/Client-1.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
						<Image
							src={"/Images/Client-2.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
						<Image
							src={"/Images/Client-3.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
						<Image
							src={"/Images/Client-4.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
						<Image
							src={"/Images/Client-5.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
						<Image
							src={"/Images/Client-6.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
						<Image
							src={"/Images/Client-7.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
						<Image
							src={"/Images/Client-8.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
						<Image
							src={"/Images/Client-9.png"}
							alt={`Client`}
							width={150}
							height={5}
							className="object-cover w-auto h-auto"
						/>
					</Marquee>
				</div>
			</div>

			{/* Testimonial */}
			<div className="flex flex-col w-full h-auto mt-10 border-t-1 border-15percent pt-4">
				<p className="capitalize text-textgray text-[14px] font-inter font-semibold  ">
					Testimonial
				</p>
				<h2
					className="text-[1.75rem] font-bold w-full md:w-[35.375rem]"
					dangerouslySetInnerHTML={{ __html: db.testimonials.title }}
				/>
				<div className="flex flex-col md:flex-row lg:flex-row-reverse">
					{/* overall */}
					<div className="flex flex-col items-start justify-center w-full md:w-2/3 lg:w-3/4  gap-[1rem] sm:gap-[1.25rem] md:gap-[3.25rem] mt-10">
						<p>{db.testimonials.ovarall.title}</p>
						<div className="flex flex-row items-center justify-start gap-4 mt-4">
							<img src={db.testimonials.ovarall.logo} alt="logo" />
							<div className="flex flex-col">
								<div className="flex flex-row items-center justify-start gap-1">
									<p>{db.testimonials.ovarall.rating}/5</p>
									<img
										src={db.testimonials.ovarall.stars}
										alt="starts"
									/>
								</div>
								<p>{db.testimonials.ovarall.sampleSize}</p>
							</div>
						</div>
					</div>
					{/* Entries */}
					<div className="w-full overflow-hidden relative">
						<Slider entris={db.testimonials.entries} />
					</div>
				</div>
			</div>

			{/* Contact us */}
			<Contactus data={db.contactus} />
		</>
	);
};
export default Home;
