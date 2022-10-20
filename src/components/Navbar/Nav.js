import React, { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navdata } from "./Navdata";

const Nav = () => {
	let [open, setOpen] = useState(false);
	const [sidemenu, openSidemenu] = useState(false);

	return (
		<div className="shadow-md w-full fixed top-0 left-0 z-10">
			<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
				<div
					className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
				>
					<span className="text-3xl text-indigo-600 mr-1 pt-2">
						<ion-icon name="logo-ionic"></ion-icon>
					</span>
					Designer
				</div>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
				>
					{/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
					{open ? <FaRegWindowClose /> : <FaBars />}
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
						open ? "top-[4rem] " : "top-[-490px]"
					}`}
				>
					{Navdata.map((link) => (
						<li key={link.name} className="md:ml-8 text-sm md:my-0 my-7 ">
							<Link
								to={link.link}
								className="text-gray-800 font-semibold hover:text-gray-400 duration-300"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				<div
					className="hidden md:block icon cursor-pointer z-50"
					onClick={() => {
						openSidemenu(!sidemenu);
					}}
				>
					{sidemenu ? (
						<FaRegWindowClose style={{ color: "white" }} />
					) : (
						<FaBars />
					)}
				</div>

				<div
					className={`absolute top-0 w-[400px] h-[100vh] transition-all duration-300 ease-in bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg ${
						sidemenu ? "right-[0px]" : "right-[-410px]"
					}`}
				>
					<div className="py-2 mt-[55px] px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
						<img
							className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
							src="https://tailwindcss.com/img/erin-lindford.jpg"
							alt="Woman's Face"
						/>
						<div className="text-center space-y-2 sm:text-left">
							<div className="space-y-0.5">
								<p className="text-lg text-black font-semibold">
									Erin Lindford
								</p>
								<p className="text-slate-500 font-medium">Product Engineer</p>
							</div>
							<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
								Message
							</button>
						</div>
					</div>
					<div className="py-2 mt-20 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
						<img
							className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
							src="https://tailwindcss.com/img/erin-lindford.jpg"
							alt="Woman's Face"
						/>
						<div className="text-center space-y-2 sm:text-left">
							<div className="space-y-0.5">
								<p className="text-lg text-black font-semibold">
									Erin Lindford
								</p>
								<p className="text-slate-500 font-medium">Product Engineer</p>
							</div>
							<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
								Message
							</button>
						</div>
					</div>

					<div className="py-2 mt-20 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
						<img
							className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
							src="https://tailwindcss.com/img/erin-lindford.jpg"
							alt="Woman's Face"
						/>
						<div className="text-center space-y-2 sm:text-left">
							<div className="space-y-0.5">
								<p className="text-lg text-black font-semibold">
									Erin Lindford
								</p>
								<p className="text-slate-500 font-medium">Product Engineer</p>
							</div>
							<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
								Message
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
