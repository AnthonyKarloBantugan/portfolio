import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
	return (
		<div className="h-[50px] bg-gray-900 flex justify-center items-center text-gray-300">
			<div className="w-[50%] flex justify-between items-center">
				<div className="flex tracking-wider">
					<HiOutlineMail size={20} className="mr-2 text-red-600" />{" "}
					anthonykarlo.bantugan@gmail.com
				</div>
				<div className="flex tracking-wider">
					<BiCopyright size={20} className="mr-2 text-pink-600" />{" "}
					Anthony Karlo Bantugan
				</div>
				<div className="flex tracking-wider">
					<IoCallOutline size={20} className="mr-2 text-green-500" />{" "}
					+63 998 569 1758
				</div>
			</div>
		</div>
	);
};

export default Footer;
