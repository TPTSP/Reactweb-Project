import React, { useEffect, useState } from "react";
import axios from "axios";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Teamskeleton from "./Teamskeleton";

const TeamDetails = () => {
	const [userList, setUserList] = useState([]);
	const [isLoading, setIsloading] = useState(true);

	const showUsers = () => {
		// setTimeout(() => {
		// 	axios
		// 		.get(
		// 			"https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
		// 		)
		// 		.then((res) => {
		// 			setUserList(res.data);

		// 			setIsloading(false);
		// 		});
		// }, 1000);

		try {
			axios
				.get(
					"https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
				)
				.then((res) => {
					setUserList(res.data);
					// console.log(res.data);
					setIsloading(false);
				});
		} catch (error) {
			console.log("there has been some error");
		}
	};

	useEffect(() => {
		showUsers();
	}, []);

	return (
		<>
			{/* {console.log(userList[1])} */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{isLoading ? (
					<SkeletonTheme>
						<Teamskeleton />
						<Teamskeleton />
						<Teamskeleton />
						<Teamskeleton />
						<Teamskeleton />
						<Teamskeleton />
						<Teamskeleton />
						<Teamskeleton />
					</SkeletonTheme>
				) : (
					// <div className="flex justify-center items-center">
					// 	<div
					// 		className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
					// 		role="status"
					// 	></div>
					// </div>
					userList.map(({ first, last, email, address }, index) => (
						<div
							className="w-full  bg-white rounded-lg border shadow-md  pt-5 text-center p-4"
							key={index}
						>
							<div className="flex flex-col items-center pb-10">
								<img
									className="mb-3 w-24 h-24 rounded-full shadow-lg"
									src={`https://joeschmoe.io/api/v1/${first} `}
									alt="Bonnie"
								/>
								<h5 className="mb-1 text-xl font-medium text-gray-900">
									{first} {last}
								</h5>
								<span className="text-sm text-gray-500">{email}</span>
								<p>{address}</p>
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default TeamDetails;
