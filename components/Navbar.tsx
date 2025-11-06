"use client";
import { usePathname } from "next/navigation";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "./ui/navigation-menu";
import Image from "next/image";
import logo from "@public/Images/Icon.svg";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className="w-full flex items-center justify-between">
			<div className="flex items-center gap-6.5 h-[66px]">
				<div className="flex flex-row gap-2 sm:gap-1 items-center ">
					<Image
						src={logo}
						alt={"Framefolio brand logo"}
						width={28}
						height={22}
					/>
					<p className="font-manrope text-2xl font-bold">Framefolio</p>
				</div>

				<NavigationMenu className="outline p-1 rounded-3xl hidden md:hidden lg:flex ">
					<NavigationMenuList>
						{/* Navigation items go here */}
						<NavigationMenuLink
							href="/home"
							data-active={pathname === "/home"}
						>
							Home
						</NavigationMenuLink>
						<NavigationMenuLink
							href="/about"
							data-active={pathname === "/about"}
						>
							About
						</NavigationMenuLink>
						<NavigationMenuLink
							href="/work"
							data-active={pathname === "/work"}
						>
							Work
						</NavigationMenuLink>
						<NavigationMenuLink
							href="/blog"
							data-active={pathname === "/blog"}
						>
							Blog
						</NavigationMenuLink>
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			<NavigationMenu>
				<NavigationMenuList className="gap-2 ">
					{/* Navigation items go here */}
					<NavigationMenuItem className="hidden  md:flex flex-row items-center gap-2 px-4.5 py-2 rounded-3xl bg-foreground text-background font-inter font-medium">
						Start Project
						<svg
							width="22"
							height="22"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</NavigationMenuItem>
					<NavigationMenuItem className="hidden bg-15percent text-foreground md:flex items-center gap-2 px-4.5 py-2 rounded-3xl font-inter font-medium">
						ENG
						<svg
							width="22"
							height="22"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
							<path
								d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</NavigationMenuItem>
					<NavigationMenuItem className="bg-15percent text-foreground flex items-center gap-2 px-2.5 py-2.5 rounded-3xl font-inter font-medium">
						<svg
							width="22"
							height="22"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
};

export default Navbar;
