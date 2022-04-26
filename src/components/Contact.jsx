import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#0a192f]  flex justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/dd8d4e76-91d1-4fb8-8272-39439c20844e"
				className="flex flex-col max-w-[600px] w-full "
			>
				<div className="pb-8">
					<p className="text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600">
						Contact
					</p>
					<p className="text-gray-300 py-4">//Send me a message.</p>
				</div>

				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="bg-[#ccd6f6] p-2 my-4"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto ">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Contact;
