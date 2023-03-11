import React from "react";
import Title from "./Title";
import { toursData } from "../Data";

const Tours = () => {
	return (
		<section className="section" id="tours">
			<Title title="Featured" subTitle="Tours" />

			<div className="section-center featured-center">
				{toursData.map((link) => {
					return (
						<article key={link.id} className="tour-card">
							<div className="tour-img-container">
								<img
									src={link.tourImage}
									className="tour-img"
									alt={link.location}
								/>
								<p className="tour-date">{link.tourDate}</p>
							</div>
							<div className="tour-info">
								<div className="tour-title">
									<h4>{link.title}</h4>
								</div>
								<p>{link.subTitle}</p>
								<div className="tour-footer">
									<p>
										<span>
											<i className={link.icon}></i>
										</span>{" "}
										{link.location}
									</p>
									<p>{link.days}</p>
									<p>{link.price}</p>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Tours;
