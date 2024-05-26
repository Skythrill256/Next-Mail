"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
	const router = useRouter();
	const handleRedirect = () => router.push("/contact");
	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen bg-[#E3DAC9]">
				<h1 className="text-3xl font-sans text-zinc-800 border-2 border-black p-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]  ">
					Hello go to the Redirect page on clicking this button
				</h1>
				<div className="mt-16">
					<button
						onClick={handleRedirect}
						className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] font-bold hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md font-sans"
					>
						Click Me{" "}
					</button>
				</div>
			</div>
		</>
	);
};

export default page;
