import React from "react";
import Title from "./Title";
import { servicesLinks } from "../Data";

const Services = () => {
	return (
		<section className="section services" id="services">
			<Title title="Our" subTitle="Services" />
			<div className="section-center services-center">
				{servicesLinks.map((link) => {
					return (
						<article key={link.id} className="service">
							<span className="service-icon">
								<i className={link.icon}></i>
							</span>
							<div className="service-info">
								<h4 className="service-title">{link.text}</h4>
								<p className="service-text">{link.subTitle}</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
