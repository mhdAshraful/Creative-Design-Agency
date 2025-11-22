import type { Metadata } from "next";
import { Inter, Six_Caps, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sixCaps = Six_Caps({
	weight: "400",
	variable: "--font-six-caps",
	subsets: ["latin"],
});

const inter = Inter({
	weight: ["400", "700"],
	variable: "--font-inter",
	subsets: ["latin"],
});

const manrope = Manrope({
	weight: ["400", "500", "600", "700"],
	variable: "--font-manrope",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Framefolio",
	description: "Creative Design Studio, crafting modern web experiences",

};



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={` ${sixCaps.variable} ${inter.variable} ${manrope.variable} w-full h-full font-sans antialiased `}
			>
				<main className="bg-background w-full min-h-screen p-4 md:px-10 md:py-4 lg:px-16 lg:py-4  overflow-x-clip">
					{/* Navigation */}
					<Navbar />

					{children}

					{/* Footer */}
					<Footer />
				</main>
			</body>
		</html>
	);
}
