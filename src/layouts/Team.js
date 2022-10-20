import React from "react";
import Nav from "../components/Navbar/Nav";
import TeamDetails from "../components/Team/TeamDetails";

const Team = () => {
	return (
		<>
			<Nav />
			<section className="container mx-auto py-8">
				<h4 className="py-5 text-3xl font-bold text-center mt-10 ">Our Team</h4>
				<TeamDetails />
			</section>
		</>
	);
};

export default Team;
