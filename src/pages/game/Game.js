import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import RoomService from '../../services/room.service';
import GameController from '../../controllers/game.controller';
import FullScreenLoader from '../../common/FullScreenLoader';

import './game.scss';

const Game = () => {
	let [ room, setRoom ] = useState({});
	let [ loading, setLoading ] = useState(false);
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
					this.setState({ loading: false, room: GameController.getRoom() });
				});
			} else {
				setToHome(true);
			}
		},
		[ room ]
	);

	if (toHome) {
		return <Redirect to="/" />;
	}

	if (room) {
		if (room.state === 'game-welcome') {
			return (
				<div>
					<h1>Welcome</h1>
					<div>This is the game room</div>
					<button type="button" className="button button-primary" onClick={this.onStartGame}>
						Start Game
					</button>
					<FullScreenLoader loading={loading}>Loading</FullScreenLoader>
				</div>
			);
		} else if (room.state === 'episode-start') {
			// TODO get episode and challenge
			return <div />;
		}
	} else {
		return <Redirect to="/" />;
	}
};

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
