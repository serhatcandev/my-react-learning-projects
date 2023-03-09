import React from "react";
import ReactDOM from "react-dom/client";
import { data } from "./data";
import Charter from "./Charter";
import "../src/index.css";

const CharterList = () => {
	return (
		<>
			<div>
				<h1 className="text-center">The Witcher 3 Charters</h1>
			</div>

			<section className="chartersSection">
				{data.map((charter) => {
					return <Charter {...charter} key={charter.id} />;
				})}
			</section>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharterList />);
