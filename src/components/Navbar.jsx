import React, { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaLinkedin,
	FaGithub,
	FaGitlab,
	FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import Resume from "../assets/pdf/Resume-Anthony-Karlo-Bantugan.pdf";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div>
				<Link to="home" smooth={true} duration={500}>
					<img
						src={Logo}
						alt="logo"
						style={{ width: "150px", cursor: "pointer" }}
					/>
				</Link>
			</div>

			{/* Nav-Menu */}
			<ul className="hidden md:flex">
				<li>
					<Link
						className="home"
						activeClass="active"
						to="home"
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						activeClass="active"
						to="about"
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger Icon and Close Icon */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile Menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="home"
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="about"
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="skills"
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="contact"
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social Icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgb(10,102,194)]">
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://www.linkedin.com/in/anthony-karlo-bantugan-3059b0227/"
							target="_blank"
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgb(23,21,21)]">
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://github.com/AnthonyKarloBantugan"
							target="_blank"
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#D82F16]">
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://gitlab.com/AnthonyBantugan"
							target="_blank"
						>
							GitLab <FaGitlab size={30} />
						</a>
					</li>

					<li className="w-[205px] h-[60px] flex justify-between items-center ml-[-145px] hover:ml-[-10px] duration-300 bg-[#4CCA5A]">
						<a
							className="flex justify-between items-center w-full text-white"
							href="tel:+639985691758"
						>
							+63 998 569 1758 <FaWhatsapp size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a
							className="flex justify-between items-center w-full text-white"
							href={Resume}
							download="Bantugan Resume"
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
