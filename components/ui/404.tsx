import Link from "next/link";
import React from "react";

const PageNotFound = () => {
	return (
		<div className="w-full h-[40vh]  flex flex-col justify-center items-center">
			<h1 className="font-medium text-8xl">404</h1>
			<div className="flex flex-col items-center gap-4 mt-6">
				<p>Page Not Found</p>
				<p>
					It looks like the page you&apos;re looking for does not
					exist or is under construction.
				</p>
				<Link href="/" className="btn border-t-1 border-b-1">
					Go Home
				</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
