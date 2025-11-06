import React from "react";
import { cn } from "@/lib/utils";
import { Toggle } from "./ui/toggle";
const Contactus = ({
	className,
	data,
	...props
}: React.ComponentProps<"div"> & { data: any }) => {
	const { title, interestedIn, budget } = data;

	return (
		<div
			className={cn(
				"box-border flex flex-col w-full h-auto mt-20 mb-10",
				className
			)}
		>
			<h2 className="font-semibold text-3xl md:text-4xl leading-[42px] mb-4">
				{title}
			</h2>
			<p>I'm interested in... </p>
			<div className="flex flex-row flex-wrap rowwrap mt-4 mb-8">
				{interestedIn.map((interest: string) => (
					<Toggle
						key={interest}
						value={interest}
						className=" min-w-fit rounded-full m-2 p-4 border-1"
					>
						{interest}
					</Toggle>
				))}
			</div>
		</div>
	);
};

export default Contactus;
