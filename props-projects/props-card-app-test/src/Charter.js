const Charter = ({ charterImage, charterName, link, id }) => {
	const copyText = () => {
		navigator.clipboard.writeText(charterName);
		alert("Copied");
	};

	return (
		<div className="chartersBox">
			<a target="_blank" rel="noreferrer" href={link}>
				<img src={charterImage} alt={charterName} />
			</a>
			<p>{id}</p>
			<h2>{charterName}</h2>

			<button onClick={copyText}>Copy Charter Name</button>
		</div>
	);
};

export default Charter;
