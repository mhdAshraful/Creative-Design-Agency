/**
 * Databse of content
 */

import { title } from "process";

export const db = {
	service: {
		title: `Discover the range of services we provide, crafted to help  <span class="text-textgray"> your business grow, stand out, and make a lasting impact.</span>`,
		gridContent: [
			{
				icon: "pencilRuler",
				title: "UX/UI Design",
				description:
					"We craft intuitive interfaces and seamless user experiences—blending aesthetic appeal with functionality to create digital products that feel as good as they look.",
			},
			{
				icon: "code",
				title: "Developement",
				description:
					"From websites to native apps, we build fast, reliable, scalable digital solutions using modern technologies—custom-tailored to meet your business goals.",
			},
			{
				icon: "brush",
				title: "Branding & Logo",
				description:
					"We help brands discover their visual identity—from logo and typography to color systems and tone of voice—crafted to tell your story and make a lasting impression.",
			},
			{
				icon: "draftingCompass",
				title: "Illustration",
				description:
					"Original illustrations that add personality and distinction to your project. Whether for product, branding, or campaigns, we bring your ideas to life with a unique visual touch.",
			},
			{
				icon: "penTool",
				title: "Animation",
				description:
					"From subtle micro-interactions to full motion graphics, we use animation to add life, guide users, and communicate your message in more engaging, memorable ways.",
			},
			{
				icon: "switchCamera",
				title: "Photography & Videography",
				description:
					"Powerful visual storytelling starts with imagery that speaks. We capture products, people, and moments through high-quality photos and videos.",
			},
		],
	},
	fearturedProjects: {
		title: `Explore our featured projects that showcase <span class="text-textgray"> creativity, innovation, and the impact we deliver to every client.</span>`,
		projects: [
			{
				name: "EmberFlow - Digital Product Design",
				category: "Product Design",
				imageUrl: "/Images/ember.webp",
				date: "15/4/2025",
			},
			{
				name: "Logoipsum - Brand Identity Design",
				category: "Brand & logo Design",
				imageUrl: "/Images/logo.jpg",
				date: "5/2/2025",
			},
			{
				name: "Capture - Website Redesign & Development",
				category: "Website Development",
				imageUrl: "/Images/web.png",
				date: "30/1/2025",
			},
		],
	},
	clients: {
		title: `Trusted by leading clients and partners who believe in our commitment to <span class="text-textgray"> quality and innovation.</span>`,
		logos: [
			"/Images/Client-1.png",
			"/Images/Client-2.png",
			"/Images/Client-3.png",
			"/Images/Client-4.png",
			"/Images/Client-5.png",
			"/Images/Client-6.png",
			"/Images/Client-7.png",
			"/Images/Client-8.png",
			"/Images/Client-9.png",
			"/Images/Client-10.png",
		],
	},
	testimonials: {
		title: `Real stories from clients who trusted us and <span class="text-textgray"> experienced the impact of our work.</span>`,
		ovarall: {
			title: "Our clients’ feedback reflects the dedication, creativity, and quality we bring to every project. We pride ourselves on delivering results that exceed expectations.",
			rating: 4.9,
			sampleSize: "Based on 2,8K reviews",
			logo: "/Images/c_logo.png",
			stars: "/Images/stars.png",
		},
		entries: [
			{
				picture: "/Images/testimonial1.png",
				name: "James Anderson",
				designation: "Founder & CEO, Orbis Creative Studio",
				testimonial:
					"Working with Framefolio was a game-changer for our product. Their UX/UI design team transformed our outdated interface into something intuitive and visually stunning. The process was smooth, collaborative, and results-driven.",
			},
			{
				picture: "/Images/testimonial2.jpg",
				name: "Michael Chen",
				designation: "Founder, StartupHub",
				testimonial:
					"The branding and logo design services provided by Framefolio were exceptional. They captured our vision perfectly and delivered a brand identity that truly resonates with our target audience.",
			},
			{
				picture: "/Images/testimonial3.png",
				name: "Emily Davis",
				designation: "Product Manager, InnovateX",
				testimonial:
					"Working with Framefolio on our app development was a game-changer. Their expertise in UX/UI design and development helped us create a user-friendly product that our customers love.",
			},
		],
	},
	contactus: {
		title: "Psst... over here! tell us your ideas 👋",
		interestedIn: [
			"UX/UI Design",
			"Development",
			"Branding & Logo",
			"Illustration",
			"Animation",
			"Photography & Videography",
		],
		budget: {
			title: "Project budget (USD)",
			range: ["$10k - $20k", "$30k - $40k", "$50k - $100k", ">$100k"],
		},
	},
	footer: {
		ctaSubQ: "Ready to capture the moments that matter most?",
		ctaMainQ: "Let's make it happen.  Contact me today!",
		legal: "© 2025 - Framefolio. All Right Reserved",
		letsTalk: {
			subtitle: "Let's Talk",
			phone: "+1 (234) 567-8901",
			email: "hi@framefolio.com",
			tag: "Agency Studio",
			location: "Based in San Francisco, CA",
		},
		social: {
			twitter: "www.x.com",
			youtube: "www.youtube.com",
			LinkedIn: "linkedin.com",
			GitHub: "www.github.com",
		},
	},
};
