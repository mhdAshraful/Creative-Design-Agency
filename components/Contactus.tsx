"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { Toggle } from "@/components/ui/toggle";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { ContactFormData } from "@/lib/types";

interface ContactusProps {
	className?: string;
	data: {
		title: string;
		interestedIn: string[];
		budget: {
			range: string[];
		};
	};
}

const Contactus: React.FC<ContactusProps> = ({
	className,
	data,
}) => {
	const { title, interestedIn, budget } = data;
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		projectDetails: "",
		budget: "",
		interests: [],
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");

	// Auto-dismiss message after 2 seconds
	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => {
				setMessage("");
			}, 2000); // 2 seconds

			// Cleanup function to clear timeout if component unmounts
			return () => clearTimeout(timer);
		}
	}, [message]); // This effect runs whenever message changes

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log("called");

		setIsSubmitting(true);
		setMessage("");
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const result = await response.json();

			if (result.success) {
				setTimeout(() => {
					setMessage("Thank you! Request has been Sent");
				}, 4000);

				setFormData({
					name: "",
					email: "",
					projectDetails: "",
					budget: "",
					interests: [],
				});

				if (result.previewUrl) {
					console.log("Email Preview:", result.previewUrl);
				}
			} else {
				setMessage(`Error: ${result.message}`);
			}
		} catch (error) {
			setMessage(
				"Network Error. Please check your connection. and try again."
			);
			console.log("Submission Erros:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const inputeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// multiple intereests
	const interestChange = (interest: string, pressed: boolean) => {
		setFormData((prev) => ({
			...prev,
			interests: pressed
				? [...prev.interests, interest] // add to array
				: prev.interests.filter((i) => i !== interest), // remove from array
		}));
	};

	// single budget
	const handleBudgetToggle = (budgetRange: string, pressed: boolean) => {
		setFormData((prev) => ({
			...prev,
			budget: pressed
				? budgetRange
				: prev.budget === budgetRange
				? ""
				: prev.budget,
		}));
	};
	return (
		<div
			className={cn(
				"box-border flex flex-col w-full md:w-1/2 md:self-center h-auto mt-20 mb-10",
				className
			)}
		>
			<h2 className="font-semibold text-3xl text-textgray md:text-4xl leading-[42px] mb-4 ">
				{title}
			</h2>
			<form onSubmit={handleSubmit}>
				<p className="text-textgray">I`&apos;`m interested in... </p>
				<div className="flex flex-row flex-wrap mt-4 mb-8">
					{interestedIn.map((interest: string) => (
						<Toggle
							key={interest}
							value={interest}
							pressed={formData.interests.includes(interest)}
							onPressedChange={(pressed) =>
								interestChange(interest, pressed)
							}
							className=" min-w-fit rounded-full m-2 p-4 border-1"
						>
							{interest}
						</Toggle>
					))}
				</div>
				<Field className="mb-10 md:mb-12 lg:mb-15.5">
					<Input
						required
						type="name"
						name="name"
						value={formData.name}
						placeholder="Your Name"
						className=" font-light text-[1.5rem] border-0 border-b-1 border-15percent rounded-none"
						onChange={inputeChange}
					/>
				</Field>
				<Field className="mb-10 md:mb-12 lg:mb-15.5">
					<Input
						required
						type="email"
						name="email"
						value={formData.email}
						placeholder="Email"
						className=" font-light text-[1.5rem] border-0 border-b-1 border-15percent rounded-none"
						onChange={inputeChange}
					/>
				</Field>
				<Field className="mb-10 md:mb-12 lg:mb-15.5">
					<Input
						required
						type="projectDetails"
						name="projectDetails"
						value={formData.projectDetails}
						placeholder="Tell us about your project"
						className=" font-light text-[1.5rem] border-0 border-b-1 border-15percent rounded-none"
						onChange={inputeChange}
					/>
				</Field>
				<div className="flex flex-row flex-wrap rowwrap mt-4 mb-8">
					{budget.range.map((rng: string) => (
						<Toggle
							key={rng}
							value={rng}
							pressed={formData.budget === rng}
							onPressedChange={(pressed) =>
								handleBudgetToggle(rng, pressed)
							}
							className=" min-w-fit rounded-full m-2 p-4 border-1"
						>
							{rng}
						</Toggle>
					))}
				</div>
				<Button type="submit">
					Send request <ArrowUpRight />{" "}
				</Button>
				{/* Message Display */}
				{message && (
					<div
						className={`p-3 rounded-md mt-4 transition-all duration-500 ${
							message.includes("Error")
								? "bg-red-100 text-red-700 border border-red-200"
								: "bg-green-100 text-green-700 border border-green-200"
						}`}
					>
						{message}
					</div>
				)}
			</form>
		</div>
	);
};

export default Contactus;
