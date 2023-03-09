import React, { useState } from "react";
import Players from "./Players";
import "./App.css";

function getRandomPhoto() {
	const photoArray = ["Arda", "Ferdi", "Messi", "Ronaldo", "Valencia"];
	return photoArray[Math.floor(Math.random() * photoArray.length)];
}

function App() {
	const [players, setplayers] = useState([]);
	const handleClick = () => {
		setplayers([...players, getRandomPhoto()]);
	};
	const playerList = players.map((player, index) => {
		return <Players key={index} playerName={player} />;
	});
	return (
		<div className="App">
			<button onClick={handleClick}>Get Random Player</button>
			<div className="playerList">{playerList}</div>
		</div>
	);
}

export default App;
