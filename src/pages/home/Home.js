import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './home.scss';
import { NavBar } from '../../components/navbar';

import RoomService from '../../services/room.service';
import ErrorsService from '../../services/errors.service';
import SocketService from '../../services/socket.service';

import GameController from '../../controllers/game.controller';

import HRWithTitle from '../../components/hr-with-title/HRWithTitle';
import { FullScreenLoader } from '../../components/full-screen-loader';

/**
 * Summary: The first view that the user sees when opening the page.
 *
 * Description:
 *      Whenever the user first comes to the site, they are greeted with this
 * page. This page has a simple form that gives the user the ability to generate
 * a room for other players to join or for the player to join another room
 * already created.
 */
class Home extends Component {
	constructor(props) {
		super(props);

		this.onPlay = this.onPlay.bind(this);
		this.onHost = this.onHost.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = { name: '', roomcode: '', toGame: false, loading: false, toHostLobby: false };
	}

	// a listener for when the user clicks on the play button
	onPlay() {
		let { name, roomcode } = this.state;
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
					this.setState({ toGameLobby: true, toHostLobby: false });
				})
				.catch((error) => {
					let errorMessages = ErrorsService.getErrorMessages(error.errors);
					alert(errorMessages);
				});
		}
	}

	onHost() {
		this.setState({ loading: true });
		RoomService.createRoom().then((response) => {
			SocketService.createService(response.web_socket_url, response.room);
			GameController.setRoom(response.room);
			GameController.isHost = true;
			this.setState({ loading: false, roomcode: response.roomcode, toHostLobby: true, toGameLobby: false });
		});
	}

	onChange(event) {
		const name = event.target.name;
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState({ [name]: value });
	}

	render() {
		let { roomcode, toHostLobby, toGameLobby } = this.state;
		if (toHostLobby && (!roomcode || roomcode === '')) {
			let url = `/HostLobby?room=${roomcode}`;
			return <Redirect to={url} />;
		}

		if (toGameLobby && (!roomcode || roomcode === '')) {
			let url = `/GameLobby?room=${roomcode}`;
			return <Redirect to={url} />;
		}

		let roomInput = <input type="text" className="form-control" name="roomcode" onChange={this.onChange} />;

		if (this.state.roomcode) {
			roomInput = <label>{this.state.roomcode}</label>;
		}

		return (
			<div className="main">
				<NavBar title="The Mole" />
				<div className="panel centered-panel centered-panel-medium">
					<form>
						<div className="form-group pl-xs-0 pr-xs-0 mt-0">
							<label htmlFor="name">Player Name:</label>
							<input type="text" className="form-control" name="name" onChange={this.onChange} />
						</div>
						<div className="form-group pl-xs-0 pr-xs-0">
							<label htmlFor="roomcode">Room Code:</label>
							{roomInput}
						</div>
						<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
							<button type="button" className="button button-primary" onClick={this.onPlay}>
								Play
							</button>
						</div>
						<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
							<HRWithTitle>Or</HRWithTitle>
						</div>
						<div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
							<button type="button" className="button button-primary" onClick={this.onHost}>
								Host Room
							</button>
						</div>
					</form>
				</div>
				<FullScreenLoader loading={this.state.loading}>Loading</FullScreenLoader>
			</div>
		);
	}
}

export default Home;
