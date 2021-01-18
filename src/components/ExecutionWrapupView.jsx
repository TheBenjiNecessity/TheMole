import React from 'react';
import NextPanel from '../common/NextPanel';

const ExecutionWrapupView = ({ room, onNext }) => {
	return (
		<NextPanel titleText="Welcome" nextButtonText="Start Game" onNext={onNext}>
			<div>TODO: text describing the game</div>
		</NextPanel>
	);
};

export default ExecutionWrapupView;
