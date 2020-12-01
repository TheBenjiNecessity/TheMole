import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import NavBar from '../common/NavBar';

import RoomService from '../services/room.service';
import ErrorsService from '../services/errors.service';
import SocketService from '../services/socket.service';

import GameController from '../controllers/game.controller';

import HRWithTitle from '../common/HRWithTitle';
import FullScreenLoader from '../common/FullScreenLoader';

/**
 * Summary: The first view that the user sees when opening the page.
 *
 * Description:
 *      Whenever the user first comes to the site, they are greeted with this
 * page. This page has a simple form that gives the user the ability to generate
 * a room for other players to join or for the player to join another room
 * already created.
 */
const Home = () => {
	let [ name, setName ] = useState('');
	let [ roomcode, setRoomcode ] = useState('');
	let [ loading, setLoading ] = useState(false);
	let [ toHostLobby, setToHostLobby ] = useState(false);
	let [ toGameLobby, setToGameLobby ] = useState(false);

	function onPlay() {
		let errorMessages = 'Errors:\n';
		if (!name || name === '') {
			errorMessages += 'You must enter a name.\n';
		}

		if (!roomcode || roomcode === '') {
			errorMessages += 'You must enter a room code.\n';
		}

		if (errorMessages && errorMessages !== 'Errors:\n') {
			alert(errorMessages);
		} else {
			let player = { name: name };
			RoomService.joinRoom(roomcode, player)
				.then((response) => {
					SocketService.createService(response.web_socket_url, response.room);
					GameController.setCurrentPlayer(response.player);
					GameController.setRoom(response.room);
					GameController.setWSUrl(response.web_socket_url);

					setToGameLobby(true);
					setToHostLobby(false);
				})
				.catch((error) => {
					if (error.errors) {
						let errorMessages = ErrorsService.getErrorMessages(error.errors);
						alert(errorMessages);
					} else {
						let errorMessage = error.error ? error.error : error.message;
						alert(errorMessage);
					}
				});
		}
	}

	function onHost() {
		setLoading(true);
		RoomService.createRoom().then((response) => {
			SocketService.createService(response.web_socket_url, response.room);
			GameController.setRoom(response.room);
			GameController.setWSUrl(response.web_socket_url);
			GameController.isHost = true;

			setLoading(false);
			setRoomcode(response.room.roomcode);
			setToHostLobby(true);
			setToGameLobby(false);
		});
	}

	function onPlayerNameChange(event) {
		setName(event.target.value);
	}

	function onRoomCodeChange(event) {
		setRoomcode(event.target.value);
	}

	if (toHostLobby && !(!roomcode || roomcode === '')) {
		return <Redirect to={`/HostLobby?room=${roomcode}`} />;
	}

	if (toGameLobby && !(!roomcode || roomcode === '')) {
		return <Redirect to={`/GameLobby?room=${roomcode}`} />;
	}

	return (
		<div className="main">
			<NavBar title="The Mole" />
			<div className="panel centered-panel centered-panel-medium">
				<form>
					<div className="form-group pl-xs-0 pr-xs-0 mt-0">
						<label htmlFor="name">Player Name:</label>
						<input type="text" className="form-control" name="name" onChange={onPlayerNameChange} />
					</div>
					<div className="form-group pl-xs-0 pr-xs-0">
						<label htmlFor="roomcode">Room Code:</label>
						<input type="text" className="form-control" name="roomcode" onChange={onRoomCodeChange} />
					</div>
					<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
						<button type="button" className="button button-primary" onClick={onPlay}>
							Play
						</button>
					</div>
					<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
						<HRWithTitle>Or</HRWithTitle>
					</div>
					<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
						<button type="button" className="button button-primary" onClick={onHost}>
							Host Room
						</button>
					</div>
				</form>
			</div>
			<FullScreenLoader loading={loading}>Loading</FullScreenLoader>
		</div>
	);
};

export default Home;
