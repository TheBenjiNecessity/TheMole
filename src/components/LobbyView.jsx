import React from 'react';
import { useTranslation } from 'react-i18next';
import NextPanel from '../common/NextPanel';

import PlayerListView from '../common/PlayerListView';

const LobbyView = ({ room, onNext }) => {
	return (
		<NextPanel titleText="Lobby" nextButtonText="Start" onNext={onNext}>
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label>Room Code:</label>
				<div className="room-code">{room ? room.roomcode : 'No Code'}</div>
			</div>
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label>Players:</label>
				<div className="player-list">
					{room && room._players && room._players.length ? (
						room._players.map((player) => <PlayerListView key={player.name} player={player} />)
					) : (
						<div />
					)}
				</div>
			</div>
		</NextPanel>
	);
};

export default LobbyView;
