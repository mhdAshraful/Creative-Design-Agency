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
			<div className="w-full h-[100vh] flex flex-col items-center justify-start gap-8 relative ">
				<h6 className="z-10 fonts-inter uppercase font-medium mt-30 mb-4 text-[clamp(16px,calc(16px+(28-16)*((90vw-375px)/(1440-375))),28px)]">
					design without boundaries
				</h6>
				<h1 className="z-10 fonts-sixCaps uppercase leading-[1] whitespace-nowrap break-keep tracking-[-6px] sm:tracking-[-4px] md:tracking-[-2px] lg:tracking-[0] text-[clamp(122px,calc(122px+(445-122)*((90vw-320px)/(1440-320))),445px)]">
					Creative Design
				</h1>
				<div className="z-10  fonts-inter font-normal mt-4 leading-[1.375rem]  md:leading-[2rem] lg:leading-[2rem]  w-[70%] md:w-[90%] lg:w-[100%] flex flex-col items-center justify-center text-center text-[clamp(16px,calc(16px+(28-16)*((90vw-375px)/(1440-375))),28px)]">
					<p>Framefolio Design Studio</p>
					<p>bridging imagination and implementation</p>
				</div>

				<Image
					src={bg}
					alt="background photo"
					className=" absolute top-[60%] md:top-[60%] lg:top-[55%] left-1/2 md:left-1/2 -translate-x-1/2 scale-x-350 scale-y-350 md:scale-x-310 md:scale-y-310 lg:scale-x-150 lg:scale-y-160"
				/>
			</div>
			{/* Our Service */}
			<div className="flex flex-col w-full min-h-auto mt-10 border-t-1 border-15percent pt-4">
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
					className="text-[1.75rem] font-bold w-full md:w-[33rem]"
					dangerouslySetInnerHTML={{
						__html: db.fearturedProjects.title,
					}}
				/>
				<div>
					{db.fearturedProjects.projects.map((project, index) => (
						<Card key={index}>
							<CardHeader className=" relative w-full h-[20.5rem] sm:h-[15.5rem] md:h-114 lg:h-150">
								<Image
									src={project.imageUrl}
									alt="background photo"
									fill
									className=" object-cover  rounded-xl"
								/>
							</CardHeader>
							<CardContent>
								<CardTitle className="text-[clamp(18px,calc(18px+(36-18)*((90vw-330px)/(1440-320))),36px)]">
									{project.name}
								</CardTitle>
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
						innerClassName=" gap-2" // pass class to change gap or speed
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
			<div className="">
				<div className="border-t-1 border-15percent mt-10">
					<p className="capitalize text-textgray py-4 text-[14px] font-inter font-semibold  ">
						Testimonial
					</p>
					<h2
						className="text-[1.75rem] leading-tight font-bold w-full md:w-[35.375rem]"
						dangerouslySetInnerHTML={{
							__html: db.testimonials.title,
						}}
					/>
				</div>
				<div className="class_1 relative w-full flex flex-col lg:flex-row items-start justify-start gap-4 md:gap-8 lg:gap-10 py-14">
					{/* overall */}

					<div className=" class_2 w-full ">
						<p className="text-[1rem]">{db.testimonials.overall.title}</p>

						<div className="class_3 w-fit flex flex-row items-center justify-start mt-4 p-4 gap-4 border-1 border-15percent rounded-[40px]">
							<img src={db.testimonials.overall.logo} alt="logo" />

							<div className="class_4 ">
								<div className="flex flex-row items-center justify-start gap-2">
									<p>{db.testimonials.overall.rating}/5</p>
									<img
										src={db.testimonials.overall.stars}
										alt="stars"
									/>
								</div>
								<p>{db.testimonials.overall.sampleSize}</p>
							</div>
						</div>
					</div>
					{/* Entries */}

					<div className=" w-full mt-6 lg:mt-0">
						<Slider entries={db.testimonials.entries} />
					</div>
				</div>
			</div>

			{/* Contact us */}
			<div className="w-full md:flex md:flex-col  md:self-center">
				<Contactus data={db.contactus} />
			</div>
		</>
	);
};
export default Home;
