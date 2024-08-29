import React, { useEffect } from "react";
import "./Home.css";
import HomeBackground from "../Assets/HomeBackground.jpg";
import Background1 from "../Assets/background1.jpg";
import Background2 from "../Assets/background2.png";
import Background3 from "../Assets/background3.jpg";
import Background4 from "../Assets/background4.jpg";
import Background5 from "../Assets/background5.png";
import Background6 from "../Assets/background6.webp";
import Background7 from "../Assets/background7.jpg";
import Background8 from "../Assets/background8.jpg";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import Product from "./Product";
import { useParams } from "react-router-dom";
function Home() {
	const pageParams = useParams();

	useEffect(() => {
		var test = new Splide(".splide", {
			type: "loop",
			autoplay: true,
		}).mount();

		return () => {
			test.destroy();
		};
	}, []);

	useEffect(() => {
		if (document.getElementById("loader"))
			document.getElementById("loader").style.display = "none";
	}, [pageParams]);

	return (
		<div className="home">
			<div className="home__container">
				<div
					className="splide"
					role="group"
					aria-label="Splide Basic HTML Example"
				>
					<div className="splide__track">
						<ul className="splide__list">
							<img
								className="home__image splide__slide"
								src={HomeBackground}
								alt="homeBackground"
							/>
							<img
								className="home__image splide__slide"
								src={Background1}
								alt="homeBackground"
							/>
							<img
								className="home__image splide__slide"
								src={Background8}
								alt="homeBackground"
							/>
							<img
								className="home__image splide__slide"
								src={Background2}
								alt="homeBackground"
							/>
							<img
								className="home__image splide__slide"
								src={Background7}
								alt="homeBackground"
							/>
							<img
								className="home__image splide__slide"
								src={Background3}
								alt="homeBackground"
							/>
							<img
								className="home__image splide__slide"
								src={Background6}
								alt="homeBackground"
							/>
							<img
								className="home__image splide__slide"
								src={Background4}
								alt="homeBackground"
							/>
							<img
								className="home__image splide__slide"
								src={Background5}
								alt="homeBackground"
							/>
						</ul>
					</div>
				</div>
			</div>
			<div className="home__row">
				<Product
					key={0}
					id="12321341"
					title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
				/>
				<Product
					key={1}
					id="49538094"
					title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
					price={239.0}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					key={2}
					id="4903850"
					title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
					price={199.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
				/>
				<Product
					key={3}
					id="23445930"
					title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
					price={98.99}
					rating={5}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
				/>
				<Product
					key={4}
					id="3254354345"
					title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
					price={598.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					key={5}
					id="90829332"
					title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
					price={1094.98}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
