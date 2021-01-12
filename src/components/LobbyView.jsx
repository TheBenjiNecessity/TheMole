import React from 'react';
import PlayerListView from '../common/PlayerListView';

const LobbyView = ({ room, titleMessage, isHost }) => {
	function onStartClick(event) {}

	return (
		<div className="panel centered-panel centered-panel-medium">
			<div className="title-message col-sm-12">{titleMessage}</div>
			<hr />
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label>Room Code:</label>
				<div className="room-code">{room ? room.roomcode : 'No Code'}</div>
			</div>
			<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
				<label>Players:</label>
				<div className="player-list">
					{room && room.players && room.players.length ? (
						room.players.map((player) => <PlayerListView key={player.name} player={player} />)
					) : (
						<div />
					)}
				</div>
			</div>
			{!isHost && (
				<React.Fragment>
					<hr />
					<div>
						<button onClick={onStartClick}>Start</button>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default LobbyView;
