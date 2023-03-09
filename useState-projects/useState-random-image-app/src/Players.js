import "./App.css";
import Arda from "./images/arda.webp";
import Ferdi from "./images/ferdi.webp";
import Messi from "./images/messi.webp";
import Ronaldo from "./images/ronaldo.webp";
import Valencia from "./images/valencia.webp";

const courseMap = {
	Arda,
	Ferdi,
	Messi,
	Ronaldo,
	Valencia,
};

const Players = ({ playerName }) => {
	return (
		<div className="playerBox">
			<img src={courseMap[playerName]} alt={playerName} />
		</div>
	);
};

export default Players;
