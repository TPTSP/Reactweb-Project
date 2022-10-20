import React from "react";
import Nav from "../components/Navbar/Nav";
import Newsdetails from "../components/News/Newsdetails";

const News = () => {
	return (
		<>
			<Nav />
			<div className="container mx-auto py-5">
				<h4 className="py-5 text-3xl font-bold text-center mt-10 ">
					Latest News
				</h4>
				<Newsdetails />
			</div>
		</>
	);
};

export default News;
