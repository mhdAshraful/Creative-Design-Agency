import React, { useState } from "react";

interface Entry {
	picture: string;
	name: string;
	designation: string;
	testimonial: string;
}
interface SliderProps {
	// Define any props if needed
	entries: Entry[];
}

const Slider = ({ entries }: SliderProps) => {
	const [index, setIndex] = useState(0);
	const next = () => setIndex((i) => (i + 1) % entries.length);
	const prev = () =>
		setIndex((i) => (i - 1 + entries.length) % entries.length);

	return (
		<div className="w-full overflow-hidden relative flex flex-col gap-2 ">
			{/* slides */}
			<div
				className="flex transition-transform duration-500 pb-4"
				style={{ transform: `translateX(-${index * 100}%)` }}
			>
				{entries.map((entry, i) => (
					<div
						key={i}
						className="w-full flex flex-col gap-8  flex-shrink-0 "
					>
						<h3 className="font-regular text-3xl tracking-tight leading-[38px] before:content-['\201C'] after:content-['\201D'] ">
							{entry.testimonial}
						</h3>
						<div className="flex items-center gap-2 pt-2 border-t-1 border-15percent">
							<img
								className="w-12.5 h-12.5 rounded-full bg-amber-300"
								src={entry.picture}
								alt={entry.name}
							/>
							<div>
								<p className="text-lg">{entry.name}</p>
								<p className="text-sm text-textgray">
									{" "}
									{entry.designation}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* controls */}
			<div className="flex justify-center ">
				<div className="flex justify-around items-center  w-12 h-4 border border-15percent rounded-[0.5rem] ">
					{entries.map((_, i) => (
						<button
							key={i}
							onClick={() => setIndex(i)}
							className={` w-2 h-2 rounded-full  ${
								index === i ? "bg-foreground" : "bg-textgray"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;
