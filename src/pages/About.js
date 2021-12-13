import React from "react";
import AboutImage from "../assets/masala.jpg";
import "../styles/About.css";
const About = () => {
	return (
		<div className="about">
			<div
				className="aboutTop"
				style={{ backgroundImage: `url(${AboutImage})` }}
			></div>
			<div className="aboutBottom">
				<h1>About Us</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab
					suscipit minus quibusdam explicabo. Similique architecto, fugiat
					accusantium aliquam doloribus vitae aut commodi, eligendi labore in
					expedita iure nobis reiciendis. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Consequatur harum necessitatibus ea atque mollitia
					cumque accusantium eos voluptatum omnis at ipsum nisi laboriosam
					similique distinctio perferendis est, perspiciatis sed. Alias odio
					nulla vitae incidunt, ea iusto. Fugit odit laudantium debitis, numquam
					reiciendis error molestias ullam, cupiditate molestiae atque
					dignissimos magnam.
				</p>
			</div>
		</div>
	);
};

export default About;
