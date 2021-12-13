import React from "react";
import "../styles/Contact.css";
import ContactImage from "../assets/photo.jpeg";

const Contact = () => {
	return (
		<div className="contact">
			<div
				className="leftSide"
				style={{ backgroundImage: `url(${ContactImage})` }}
			></div>
			<div className="rightSide">
				<h1>Contact Us</h1>
				<form id="contact-form" method="POST">
					<label htmlFor="name">Full Name</label>
					<input type="text" name="name" placeholder="Enter Full Name" />

					<label htmlFor="email">Email</label>
					<input type="email" name="email" placeholder="Enter Email Address" />

					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						rows="7"
						placeholder="Enter your message"
					></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
