import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homesliderdetails from "./Homesliderdetails";
import { getSliderData } from "./Homesliderdata";
const Mainslider = () => {
	let settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,

		speed: 3000,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className=" container  mx-auto py-8 mb-5 ">
			<h4 className="py-5 text-3xl font-bold text-center ">Our Team</h4>
			<Slider {...settings}>{getSliderData()}</Slider>
		</section>
	);
};

export default Mainslider;
