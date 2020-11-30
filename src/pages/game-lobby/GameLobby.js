import React, { Component } from 'react';

import './game-lobby.scss';
import { NavBar } from '../../components/navbar';

import RoomService from '../../services/room.service';
import GameController from '../../controllers/game.controller';

import { Redirect } from 'react-router-dom';
import { PlayerListView } from '../../components/player-list-view';
import { FullScreenLoader } from '../../components/full-screen-loader';

class GameLobby extends Component {
	constructor(props) {
		super(props);

		this.onPlay = this.onPlay.bind(this);
		this.listenForPlayers = this.listenForPlayers.bind(this);
		this.listenForPlay = this.listenForPlay.bind(this);
		this.play = this.play.bind(this);

		this.state = { room: null, toGame: false, toHome: false };
	}

	componentDidMount() {
		let room = GameController.getRoom();
		if (room) {
			this.setState({ loading: true });
			RoomService.getRoom(room.roomcode).then((response) => {
				GameController.setRoom(response.room);
				this.setState({ loading: false, room: GameController.getRoom() });

				GameController.setListenForPlayerCB(this.listenForPlayers);
				GameController.setListenForPlayCB(this.listenForPlay);
			});
		} else {
			this.setState({ toHome: true });
		}
	}

	componentWillUnmount() {
		GameController.stopListenForPlayerCB();
		GameController.stopListenForPlayCB();
	}

	onPlay() {
		this.play(true);
	}

	listenForPlayers(obj) {
		GameController.setRoom(obj.room);
		this.setState({ room: obj.room });
	}

	listenForPlay(obj) {
		this.play(false);
	}

	play(local) {
		if (local) {
			//send socket message to others
			GameController.startPlay();
		}

		this.setState({ toGame: true });
	}

	getPlayerView(player, key) {
		return (
			<div key={key}>
				<PlayerListView name={player.name} />
			</div>
		);
	}

	listPlayerViews() {
		if (this.state.room && this.state.room.players && this.state.room.players.length) {
			return this.state.room.players.map((p, i) => this.getPlayerView(p, i));
		} else {
			return <div />;
		}
	}

	render() {
		let { room, toGame, toHome } = this.state;

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
						<button type="button" className="button button-primary" onClick={this.onPlay}>
							Start Game
						</button>
					</div>
					<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
						<label>Room Code:</label>
						<div className="room-code">{room ? room.roomcode : 'No Code'}</div>
					</div>
					<div className="form-group pl-xs-0 pr-xs-0 mt-0 col-sm-6">
						<label>Players:</label>
						<div className="player-list">{this.listPlayerViews()}</div>
					</div>
				</div>
				<FullScreenLoader loading={this.state.loading}>Loading</FullScreenLoader>
			</div>
		);
	}
}

export default GameLobby;
