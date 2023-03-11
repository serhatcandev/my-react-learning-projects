import TourOneImage from "./images/tour-1.jpeg";
import TourTwoImage from "./images/tour-2.jpeg";
import TourThreeImage from "./images/tour-3.jpeg";
import TourFourImage from "./images/tour-4.jpeg";

export const pageLinks = [
	{ id: 1, href: "#home", text: "home" },
	{ id: 2, href: "#about", text: "about" },
	{ id: 3, href: "#services", text: "services" },
	{ id: 4, href: "#tours", text: "tours" },
];

export const socialLink = [
	{ id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
	{ id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
	{ id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const servicesLinks = [
	{
		id: 1,
		text: "Saving Money",
		subTitle:
			"  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
		icon: "fas fa-wallet fa-fw",
	},

	{
		id: 2,
		text: "Endless Hiking",
		subTitle:
			"  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
		icon: "fas fa-tree fa-fw",
	},

	{
		id: 3,
		text: "Amazing Comfort",
		subTitle:
			"  Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
		icon: "fas fa-socks fa-fw",
	},
];

export const toursData = [
	{
		id: 1,
		tourImage: TourOneImage,
		tourDate: "August 26th, 2020",
		title: "Tibet Adventure",
		subTitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		icon: "fas fa-map",
		location: "China",
		days: "6 Days",
		price: "From $2100  ",
	},

	{
		id: 2,
		tourImage: TourTwoImage,
		tourDate: "October 1th, 2020",
		title: "Best Of Java",
		subTitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		icon: "fas fa-map",
		location: "Indonesia",
		days: "11 Days",
		price: "From $1400  ",
	},

	{
		id: 3,
		tourImage: TourThreeImage,
		tourDate: "September 15th, 2020",
		title: "Explore Hong Kong",
		subTitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		icon: "fas fa-map",
		location: "Hong Kong",
		days: "8 Days",
		price: "From $5000",
	},

	{
		id: 4,
		tourImage: TourFourImage,
		tourDate: "December 5th, 2019",
		title: "Kenya Highlights",
		subTitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		icon: "fas fa-map",
		location: "Kenya",
		days: "20 Days",
		price: "From $3300  ",
	},
];
