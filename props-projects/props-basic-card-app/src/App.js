import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Cards from "./Cards";
import Geralt from "./images/geralt.jpg";
import Ciri from "./images/ciri.webp";
import Triss from "./images/triss.png";
import Yennefer from "./images/yennefer.png";

function App() {
	return (
		<div className="App">
			<section className="hero is-link">
				<div className="hero-body">
					<p className="title">Witcher 3 Charters</p>
				</div>
			</section>
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column">
							<Cards
								title="Geralt"
								description="İnsanlar canavarlar yaratır. Canavarlar da insanlar."
								image={Geralt}
							/>
						</div>

						<div className="column">
							<Cards
								title="Ciri"
								description="Zaman bir tükenmez karanlık, fakat içinde yıldızlar parlar."
								image={Ciri}
							/>
						</div>

						<div className="column">
							<Cards
								title="Yennefer"
								description="Sevdiğimiz kişileri kaybetmek, bizi kim olduğumuzu hatırlatır."
								image={Yennefer}
							/>
						</div>

						<div className="column">
							<Cards
								title="Triss"
								description="Kaçınılmaz sonla yüzleşmek kolay değil, ama yapacak bir şey yok."
								image={Triss}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
