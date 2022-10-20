import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Employee from "./components/Employee";
import Home from "./layouts/Home";
import Employee from "./components/Employee";
import Accordionmain from "./components/Accordionmain";
import Mainslider from "./components/Homeslider/Mainslider";
import Team from "./layouts/Team";
import News from "./layouts/News";
// const funData = {
// 	name: "parth",
// 	desc: "Of course. We select teacher after proper verification and interview. Only experienced teachers are sent to teach at Home.",
// 	address: {
// 		city: "ahmedabad",
// 		area: "satelite",
// 		fulladdress: {
// 			Gurgaon:
// 				"Vatika Triangle, Gurgaon, Mehrauli-Gurgaon Road, Block B, Sushant Lok Phase I, Sector 28, Gurugram, Haryana, India",
// 			desc: "658, ISCON EMPORIO, Near Star Bazar, Pandurang Shastri Athavale Marg, Satellite Ahmedabad – 380015",
// 		},
// 	},
// };

function App() {
	// let { name, desc, address } = funData;
	// let { city, area, fulladdress } = address;
	// let { Gurgaon, desc: fulladdressdesc } = fulladdress;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="team" element={<Team />} />
				<Route path="news" element={<News />} />
			</Routes>

			{/* <h4>{name}</h4>
			<h4>{desc}</h4>
			<h4>{city}</h4>
			<h4>{Gurgaon}</h4>
			<h4>{fulladdressdesc}</h4> */}
		</BrowserRouter>
	);
}

export default App;
