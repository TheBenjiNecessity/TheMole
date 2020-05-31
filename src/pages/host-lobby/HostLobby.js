import React, { Component } from 'react';

import './host-lobby.scss';
import { NavBar } from '../../components/navbar';

import GameController from '../../controllers/game.controller';
import { PlayerListView } from '../../components/player-list-view';
import { Redirect } from 'react-router-dom';

class HostLobby extends Component {
	constructor(props) {
		super(props);

		this.listenForPlayers = this.listenForPlayers.bind(this);
		this.listenForPlay = this.listenForPlay.bind(this);
		this.play = this.play.bind(this);

		this.state = { room: null, toGame: false };
	}

	componentDidMount() {
		GameController.setListenForPlayerCB(this.listenForPlayers);
		GameController.setListenForPlayCB(this.listenForPlay);

		this.setState({ room: GameController.getRoom() });
	}

	componentWillUnmount() {
		GameController.stopListenForPlayerCB();
		GameController.stopListenForPlayCB();
	}

	listenForPlayers(obj) {
		this.setState({ room: obj.room });
	}

	listenForPlay(obj) {
		this.play();
	}

	play() {
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
		let { toGame, room } = this.state;

		if (toGame) {
			return <Redirect to="/Game" />;
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
						<div className="player-list">{this.listPlayerViews()}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HostLobby;
