import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { getAccData } from "./allData";
const Accordionmain = ({}) => {
	return (
		<div>
			<section className="py-4">
				<div className="container mx-auto px-4 ">
					<h2 className="font-semibold flex items-center justify-center text-4xl text-black">
						FAQ
					</h2>
					<div className="flex flex-wrap items-center justify-center">
						<div className="w-full pt-6 flex md:w-6/12 flex-col flex-wrap justify-center">
							{getAccData()}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Accordionmain;
