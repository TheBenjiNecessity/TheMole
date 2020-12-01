import React from 'react';
import NavBar from '../../common/NavBar';

import './hostgame.scss';

const HostGame = () => {
	//function play() {}

	return (
		<div className="main">
			<NavBar title="The Mole" />
			<div className="panel centered-panel centered-panel-medium">Host room</div>
		</div>
	);
};

export default HostGame;

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
