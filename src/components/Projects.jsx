import React from "react";
import Calculator from "../assets/img/calculator.JPG";
import Ecommerce from "../assets/img/ecommerce.JPG";
import Todo from "../assets/img/todo.JPG";

const Projects = () => {
	return (
		<div
			name="projects"
			className="w-full md:h-screen bg-[#0a192f] text-gray-300"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Projects
					</p>
					<p className="py-4">
						// Check out some of my recent projects
					</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${Todo})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center ms-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-300">
							<span className="text-2xl font-bold text-white tracking-wider px-4 ">
								To-Do App
							</span>
							<p className="px-4">
								A simple To-Do app using React and Typescript.
								Fully responsive with drag and drop feature
								using react-beautiful-dnd library.
							</p>
							<div className=" pt-2 text-center">
								<a
									href="https://react-portfolio-sigma-six.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/AnthonyKarloBantugan/todo-typescript"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${Ecommerce})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center ms-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-300">
							<span className="text-2xl font-bold text-white tracking-wider px-4 ">
								Tech Labs
							</span>
							<p className="px-4">
								My coding bootcamp submitted ecommerce website
								project using MERN stack technologies.
							</p>
							<div className=" pt-2 text-center">
								<a
									href="https://capstone-3-mu.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href=" https://gitlab.com/AnthonyBantugan/capstone-3"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${Calculator})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center ms-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-300">
							<span className="text-2xl font-bold text-white tracking-wider px-4 ">
								Calculator
							</span>
							<p className="px-4">
								A functional calculator using HTML, CSS, and
								JavaScript.
							</p>
							<div className=" pt-2 text-center">
								<a
									href="https://anthonykarlobantugan.github.io/simple-calculator/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/AnthonyKarloBantugan/simple-calculator"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
