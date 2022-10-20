import React from "react";

const Employee = ({ name, desc, icon }) => {
	return (
		<div className="lg:pt-6 pt-6 w-full md:w-4/12 px-4 text-center">
			<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
				<div className="px-4 py-5 flex-auto">
					<div className="text-white p-[15px] text-4xl text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
						{icon}
					</div>
					<h6 className="text-xl font-semibold">{name}</h6>
					<p className="mt-2 mb-4 text-gray-600">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default Employee;
