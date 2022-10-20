import Employee from "./Employee";
import { FaAws, FaCcVisa, FaHtml5, FaInstagram } from "react-icons/fa";
import Accordiondetails from "./Accordiondetails";

// Employee Data

const empData = [
	{
		id: 1,
		icon: <FaAws />,
		name: "parth",
		desc: "Of course. We select teacher after proper verification and  interview. Only experienced teachers are sent to teach at Home.",
	},

	{
		id: 2,
		icon: <FaCcVisa />,
		name: "Yash",
		desc: "Of course. We select teacher after proper verification and  interview. Only experienced teachers are sent to teach at Home.",
	},

	{
		id: 3,
		icon: <FaHtml5 />,
		name: "parthnew",
		desc: "Of course. We select teacher after proper verification and  interview. Only experienced teachers are sent to teach at Home.",
	},

	{
		id: 4,
		icon: <FaInstagram />,
		name: "Deep",
		desc: "It’s a Value added services for students overall development.",
	},

	{
		id: 5,
		icon: <FaInstagram />,
		name: "Deepffsfasf",
		desc: "It’s a Value added services for students overall development.",
	},
];

//function to get Employee Data

export const getEmpData = () => {
	return empData.map((item) => {
		return <Employee key={item.id} {...item} />;
	});
};

//accordion Data

const accData = [
	{
		id: 1,
		question: "Deepffsfasf",
		answer: "It’s a Value added services for students overall development.",
	},

	{
		id: 2,
		question: "Deep",
		answer:
			"Of course. We select teacher after proper verification and  interview. Only experienced teachers are sent to teach at Home.",
	},

	{
		id: 3,
		question: "Parth",
		answer:
			"Of fffsfsfs. We select teacher after proper verification and  interview. Only experienced teachers are sent to teach at Home.",
	},
];

//function to get accData

export const getAccData = () => {
	return accData.map((aitem) => {
		return <Accordiondetails key={aitem.id} {...aitem} />;
	});
};
