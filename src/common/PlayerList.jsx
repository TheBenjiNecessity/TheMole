import React from 'react';
import PlayerListView from './PlayerListView';

const PlayerList = ({ players }) => {
	if (!players || !players.length) {
		return null;
	}

	return players.map((player) => <PlayerListView key={player.name} player={player} />);
};

export default PlayerList;
