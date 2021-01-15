import React from 'react';

const WelcomeView = ({ room, onNextClick }) => {
	return (
		<div>
			<h1>Welcome</h1>
			<div>This is the game room</div>
			<button type="button" className="button button-primary" onClick={onNextClick}>
				Start Game
			</button>
		</div>
	);
};

export default WelcomeView;
