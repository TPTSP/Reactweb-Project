import slideimg1 from "../../assets/team22.webp";
import slideimg2 from "../../assets/team23.webp";
import slideimg3 from "../../assets/team24.webp";
import slideimg4 from "../../assets/team25.webp";
import slideimg5 from "../../assets/team27.webp";
import slideimg6 from "../../assets/team33.webp";
import slideimg7 from "../../assets/team28.webp";

import Homesliderdetails from "./Homesliderdetails";

const HomesliderData = [
	{
		id: 1,
		img: slideimg1,
		name: "Erin Lindford",
		designation: "Product Engineer",
		buttontext: "Message",
	},

	{
		id: 2,
		img: slideimg2,
		name: "HUGH MACLEOD",
		designation: "CREATIVE DIRECTOR",
		buttontext: "Message",
	},

	{
		id: 3,
		img: slideimg3,
		name: "JEREMY DUPONT",
		designation: "CREATIVE DIRECTOR",
		buttontext: "Message",
	},

	{
		id: 4,
		img: slideimg4,
		name: "SARA SMITH",
		designation: "CREATIVE STUDIO HEAD",
		buttontext: "Message",
	},

	{
		id: 5,
		img: slideimg5,
		name: "BILL GARDNER",
		designation: "CO-FOUNDER / DESIGN",
		buttontext: "Message",
	},

	{
		id: 6,
		img: slideimg6,
		name: "Erin Lindford",
		designation: "Product Engineer",
		buttontext: "Message",
	},

	{
		id: 7,
		img: slideimg7,
		name: "Erin Lindford",
		designation: "Product Engineer",
		buttontext: "Message",
	},
];

//function to get sliderData

export const getSliderData = () => {
	return HomesliderData.map((hslider) => (
		<Homesliderdetails key={hslider.id} {...hslider} />
	));
};
