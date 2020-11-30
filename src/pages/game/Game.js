import React, { Component } from 'react';

import RoomService from '../../services/room.service';
import GameController from '../../controllers/game.controller';

import './game.scss';
import NavBar from '../../common/NavBar';
import FullScreenLoader from '../../common/FullScreenLoader';
import { Redirect } from 'react-router-dom';

class Game extends Component {
	constructor(props) {
		super(props);

		this.play = this.play.bind(this);
		this.onStartGame = this.onStartGame.bind(this);

		this.state = { room: null, toHome: false };
	}

	componentDidMount() {
		let room = GameController.getRoom();
		if (room) {
			this.setState({ loading: true });
			RoomService.getRoom(room.roomcode).then((response) => {
				GameController.setRoom(response.room);
				this.setState({ loading: false, room: GameController.getRoom() });
			});
		} else {
			this.setState({ toHome: true });
		}
	}

	onStartGame() {}

	play() {}

	getWelcome() {
		return (
			<div>
				<h1>Welcome</h1>
				<div>This is the game room</div>
				<button type="button" className="button button-primary" onClick={this.onStartGame}>
					Start Game
				</button>
				<FullScreenLoader loading={this.state.loading}>Loading</FullScreenLoader>
			</div>
		);
	}

	getRoleDesignationPage() {
		return (
			<div>
				<h1>Welcome</h1>
				<div>This is the game room</div>
			</div>
		);
	}

	render() {
		let { room } = this.state;

		if (this.state.toHome) {
			return <Redirect to="/" />;
		}

		if (room) {
			if (room.state === 'game-welcome') {
				return this.getWelcome();
			} else if (room.state === 'episode-start') {
				// TODO get episode and challenge
			}
		}

		return (
			<div className="main">
				<NavBar title="The Mole" />
				<div className="panel centered-panel centered-panel-medium">Game test</div>
			</div>
		);
	}
}

export default Game;

/**
 * Presentation
 *      - Start of game
 *          - intro to game
 *      - Episode
 *          - intro to episode
 *          - Challenge
 *              - Ask for players to assign roles
 *              - Tell players what the game is about
 *              - start the game
 *              - game ends
 *              - tell players whether or not they were successful
 *              - tell players pot standing
 *          - ...
 *          - Challenge
 *          - Tell players pot standing
 *          - Quiz
 *              - Quiz intro
 *              - Present Quiz
 *                  - Start button
 *                  - Question
 *                      - Display question text and choices
 *                      - on choice button click, go to next question
 *                  - ...
 *                  - Question
 *                  - Finish button
 *          - Episode lobby
 *              - wait for other players to finish
 *          - Quiz results
 *              - results intro
 *              - show results for player
 *              - ...
 *              - show results for player
 *              - show eliminated player
 *              - go to Episode lobby
 *          - Episode lobby
 *              - start new episode
 *      - Last Episode (only final player and mole)
 *          - intro to episode
 *          - Final Challenge
 *          - Show results
 *              - end game button (go back to game lobby with same room)
 *      - Game Lobby
 *          - start button (with 'play again' text)
 */
