import React from "react";
import Skeleton from "react-loading-skeleton";
const Teamskeleton = () => {
	return (
		<>
			<div className="w-full bg-white rounded-lg border shadow-md  pt-5 text-center p-4">
				<div className="flex flex-col items-center pb-10">
					<Skeleton circle={true} height={96} width={96} />
					<h5 className="mt-2 text-xl leading-2 font-medium text-gray-900">
						<Skeleton width={200} />
					</h5>
					<span className="text-sm mt-2 leading-1 leading-[2px] text-gray-500">
						<Skeleton width={260} />
					</span>
					<p className="mt-2 leading-2">
						<Skeleton width={250} />
					</p>
				</div>
			</div>
		</>
	);
};

export default Teamskeleton;
