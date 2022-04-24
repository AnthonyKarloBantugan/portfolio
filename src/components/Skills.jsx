import React from "react";

import HTML from "../assets/logo-html5.png";
import CSS from "../assets/logo-css3.png";
import JS from "../assets/logo-javascript.png";
import ReactImg from "../assets/logo-react.png";
import MongoDB from "../assets/logo-mongodb.png";
import Bootstrap from "../assets/logo-bootstrap.png";
import Express from "../assets/logo-expressjs.png";
import Git from "../assets/logo-git.png";
import Node from "../assets/logo-nodejs.png";
import Tailwind from "../assets/logo-tailwind.png";

const Skills = () => {
	return (
		<div
			name="skills"
			className="w-full h-screen bg-[#0a192f] text-gray-300"
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className=" text-4xl font-bold inline border-b-4 border-pink-600">
						Skills
					</p>
					<p className="py-4">
						// These are the technologies I've worked with:
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={HTML}
							alt="HTML icon"
						/>
						<p className="text-transform: uppercase mb-2">html</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={CSS}
							alt="CSS icon"
						/>
						<p className="text-transform: uppercase mb-2">css</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={JS}
							alt="Javascript icon"
						/>
						<p className="text-transform: uppercase mb-2">
							javascript
						</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={Bootstrap}
							alt="bootstrap icon"
						/>
						<p className="text-transform: uppercase mb-2">
							bootstrap
						</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={Tailwind}
							alt="bootstrap icon"
						/>
						<p className="text-transform: uppercase mb-2">
							tailwind css
						</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={ReactImg}
							alt="react icon"
						/>
						<p className="text-transform: uppercase mb-2">react</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={Node}
							alt="react icon"
						/>
						<p className="text-transform: uppercase mb-2">
							node js
						</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={Express}
							alt="express.js icon"
						/>
						<p className="text-transform: uppercase mb-2">
							express
						</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={MongoDB}
							alt="mongoDB icon"
						/>
						<p className="text-transform: uppercase mb-2">
							mongo db
						</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-[100px] mx-auto"
							src={Git}
							alt="git icon"
						/>
						<p className="text-transform: uppercase mb-2">git</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
