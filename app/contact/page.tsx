"use client";
import React, { FormEvent } from "react";
import Link from "next/link";

const Page: React.FC = () => {
	const submit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		try {
			const response = await fetch("/api/contact", {
				method: "post",
				body: formData,
			});
			if (!response.ok) {
				console.log("falling over");
				throw new Error(`response status: ${response.status}`);
			}
			const responseData = await response.json();
			console.log(responseData.message);

			alert("Message successfully sent");
		} catch (error) {
			console.log(error);
			alert("Error, please try resubmitting the form");
		}
	};

	return (
		<>
			<div className="bg-[#E3DAC9] flex justify-center items-center min-h-screen flex-col">
				<div className="relative place-self-center p-5 bg-white border-4 border-black rounded-lg hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-shadow">
					<Link href="/">Home</Link>
				</div>
				<form
					onSubmit={submit}
					className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
				>
					<div className="mb-4 flex flex-col w-500">
						<input
							id="form-name"
							autoComplete="name"
							maxLength={50}
							name="name"
							className="w-96 mb-5 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full"
							placeholder="Name"
						/>

						<input
							id="form-email"
							required
							autoComplete="email"
							maxLength={80}
							name="email"
							type="email"
							className="w-96 mb-5 shadow-[2px_2px_0px_rgba(0,0,0,1)] border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full"
							placeholder="you@example.com"
						/>

						<textarea
							id="form-message"
							required
							name="message"
							rows={5}
							className="text-black border-2 border-black mb-5 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#ffa6f6] focus:outline-none"
						/>
					</div>
					<button
						className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] font-bold hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md font-sans"
						type="submit"
					>
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default Page;
