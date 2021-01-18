import React from 'react';
import NextPanel from '../common/NextPanel';
import storageService from '../services/storage.service';

const MoleRevealView = ({ room, onNext }) => {
	const player = storageService.getPlayer();
	return (
		<NextPanel onNext={onNext}>
			<p>DO NOT READ ALOUD!</p>
			<p>{player.isMole ? 'You are the mole' : 'You are not the mole'}</p>
		</NextPanel>
	);
};

export default MoleRevealView;
