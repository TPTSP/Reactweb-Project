import React from "react";
import Accordionmain from "../components/Accordionmain";

import { getEmpData } from "../components/allData";
import Mainslider from "../components/Homeslider/Mainslider";
import Nav from "../components/Navbar/Nav";
import News from "./News";
import Team from "./Team";

const Home = () => {
	return (
		<>
			<Nav />
			<section className="pb-20 bg-gray-300 mt-[65px]">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap">{getEmpData()}</div>
				</div>
			</section>

			<Accordionmain />
			<Mainslider />
			{/* <Team />
			<News /> */}
		</>
	);
};

export default Home;
