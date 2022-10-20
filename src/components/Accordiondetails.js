import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const Accordiondetails = ({ question, answer }) => {
	const [data, setData] = useState(false);

	// const toggle = (index) => {
	// 	if (data === index) {
	// 		return setData(null);
	// 	}

	// 	setData(index);
	// };
	return (
		<>
			<div
				className="item flex flex-row justify-between items-center bg-blue-700 py-4 px-3 border-b-2 shadow-lg  cursor-pointer"
				onClick={() => {
					setData(!data);
				}}
			>
				<h4 className="text-white font-bold">{question}</h4>
				<span className="text-white">{data ? <FaMinus /> : <FaPlus />}</span>
			</div>

			{data && (
				<div className="shadow-lg py-7 px-3 transition-all duration-300">
					<p>{answer}</p>
				</div>
			)}
		</>
	);
};

export default Accordiondetails;
