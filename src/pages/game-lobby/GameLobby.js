import React, { useEffect, useState } from 'react';

import './game-lobby.scss';
import NavBar from '../../common/NavBar';

import RoomService from '../../services/room.service';
import GameController from '../../controllers/game.controller';

import { Redirect } from 'react-router-dom';
import PlayerListView from '../../common/PlayerListView';
import FullScreenLoader from '../../common/FullScreenLoader';

const GameLobby = () => {
	let [ room, setRoom ] = useState({});
	let [ loading, setLoading ] = useState(false);
	let [ toGame, setToGame ] = useState(false);
	let [ toHome, setToHome ] = useState(false);

	useEffect(
		() => {
			setRoom(GameController.getRoom());

			if (room) {
				setLoading(true);
				RoomService.getRoom(room.roomcode).then((response) => {
					GameController.setRoom(response.room);
					setLoading(false);
					setRoom(GameController.getRoom());

					GameController.setListenForPlayerCB(listenForPlayers);
					GameController.setListenForPlayCB(listenForPlay);
				});
			} else {
				setToHome(true);
			}

			return () => {
				GameController.stopListenForPlayerCB();
				GameController.stopListenForPlayCB();
			};

			function listenForPlayers(obj) {
				GameController.setRoom(obj.room);
				setRoom(obj.room);
			}

			function listenForPlay(obj) {
				play(false);
			}
		},
		[ room ]
	);

	function onPlay() {
		play(true);
	}

	function play(local) {
		if (local) {
			//send socket message to others
			GameController.startPlay();
		}

		setToGame(true);
	}

	if (toGame) {
		return <Redirect to="/Game" />;
	}

	if (toHome) {
		return <Redirect to="/" />;
	}

	return (
		<div className="main">
			<NavBar title="The Mole" />
			<div className="panel centered-panel centered-panel-medium">
				<div className="start-button-bar col-sm-12">
					<button type="button" className="button button-primary" onClick={onPlay}>
						Start Game
					</button>
				</div>
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
			<FullScreenLoader loading={loading}>Loading</FullScreenLoader>
		</div>
	);
};

export default GameLobby;
