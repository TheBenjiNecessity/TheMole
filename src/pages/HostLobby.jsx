import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../common/NavBar';

import GameController from '../controllers/game.controller';
import PlayerListView from '../common/PlayerListView';

/**
 * A page where players go when they create a game.
 * Lists players waiting in the game's lobby.
 */
const HostLobby = () => {
	let [ room, setRoom ] = useState({});
	let [ toGame, setToGame ] = useState(false);

	useEffect(() => {
		GameController.setListenForPlayerCB(listenForPlayers);
		GameController.setListenForPlayCB(listenForPlay);

		setRoom(GameController.getRoom());

		function listenForPlayers(obj) {
			setRoom(obj.room);
		}

		function listenForPlay(obj) {
			play();
		}

		return () => {
			GameController.stopListenForPlayerCB();
			GameController.stopListenForPlayCB();
		};
	}, []);

	function play() {
		setToGame(true);
	}

	if (toGame) {
		return <Redirect to="/HostGame" />;
	}

	return (
		<div className="main">
			<NavBar title="The Mole" />
			<div className="panel centered-panel centered-panel-medium">
				<div className="titla-message col-sm-12">Press "Start Game" to start the game</div>
				<hr />
				<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
					<label>Room Code:</label>
					<div className="room-code">{room ? room.roomcode : 'No Code'}</div>
				</div>
				<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
					<label>Players:</label>
					<div className="player-list">
						{room && room.players && room.players.length ? (
							room.players.map((p, i) => (
								<div key={i}>
									<PlayerListView name={p.name} />
								</div>
							))
						) : (
							<div />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HostLobby;
