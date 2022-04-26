import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full sm:h-screen bg-[#0a192f] text-gray-300"
		>
			<div className="flex flex-col  justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About
						</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hi. I'm Anthony, nice to meet you.</p>
					</div>
					<div>
						<p className="tracking-wider">
							I'm a self-taught web developer based in the
							Philippines, experienced in building responsive
							websites and web apps. Proficient in HTML, CSS, and
							JavaScript; plus modern frameworks and libraries
							like React.js and Express.js.
						</p>
					</div>
				</div>

				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							Education
						</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-3xl font-bold">
						<p>2021-2022</p>
					</div>
					<div>
						<p className=" text-3xl tracking-wider">
							Zuitt Coding Bootcamp
						</p>
						Certificate of Completion
					</div>
					<div className="sm:text-right text-3xl font-bold">
						<p>2008-2012</p>
					</div>
					<div>
						<p className=" text-3xl tracking-wider">
							Ateneo de Davao University
						</p>
						BS- Management Accounting
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
