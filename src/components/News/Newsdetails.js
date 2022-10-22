import React, { useEffect, useState } from "react";
import axios from "axios";

const Newsdetails = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsloading] = useState(true);
	const getNewsData = async () => {
		try {
			axios
				.get(
					"https://newsapi.org/v2/top-headlines?country=in&apiKey=0c6d641e23b04a908c2bc73c667ac393"
				)
				.then((response) => {
					// console.log(response);
					console.log(response.data);

					setNews(response.data.articles);
					setIsloading(false);
				});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getNewsData();
	}, []);

	return (
		<>
			{/* <div className="flex justify-center items-center text-center">
				<div className="w-full">
					<div
						className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
						role="status"
					></div>
					<span className="pl-2"> Loading...</span>
				</div>
			</div> */}

			{isLoading && (
				<div className="grid grid-cols-1  mx-auto gap-4">
					<div className="flex justify-center items-center text-center">
						<div className="w-full text-center">
							<div
								className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
								role="status"
							></div>
							<span className="pl-2"> Loading...</span>
						</div>
					</div>
				</div>
			)}

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{news.map(({ description, title, url, urlToImage }, index) => {
					return (
						<div className="w-full" key={index}>
							<a
								href="{url}"
								className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
							>
								<div className="relative pb-48 overflow-hidden">
									<img
										className="absolute inset-0 h-full w-full object-cover"
										src={
											urlToImage !== null
												? urlToImage
												: "https://via.placeholder.com/700x500"
										}
										alt={title}
										title={title}
									/>
								</div>
								<div className="p-4">
									{/* <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
							{nitem.title}
						</span> */}
									<h2 className="mt-2 mb-2  font-bold">{title}</h2>
									<p className="text-sm">{description}</p>
									<div className="mt-3 flex items-center">
										<a target="_blank" href={url}>
											<button
												type="button"
												className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
											>
												Read More
											</button>
										</a>
									</div>
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Newsdetails;
