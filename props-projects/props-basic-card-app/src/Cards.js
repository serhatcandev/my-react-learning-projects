import React from "react";
import "./App.css";

const Cards = ({ title, description, image }) => {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image">
					<img src={image} alt={title} />
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-left">
						<figure className="image is-48x48">
							<img src={image} alt={title} />
						</figure>
					</div>
					<div className="media-content">
						<p className="title is-4">{title}</p>
						<p className="subtitle is-6">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
