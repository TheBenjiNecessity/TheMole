import React from 'react';
import WelcomeView from './WelcomeView';
import EpisodeStartView from './EpisodeStartView';
import ChallengeView from './ChallengeView';
import ChallengeIntermissionView from './ChallengeIntermissionView';
import PreQuizIntermissionView from './PreQuizIntermissionView';
import QuizView from './QuizView';
import PostQuizIntermissionView from './PostQuizIntermissionView';
import ExecutionView from './ExecutionView';
import ExecutionWrapupView from './ExecutionWrapupView';
import Room from '../models/room.model';
import LobbyView from './LobbyView';
import roomSocketService from '../services/socket-services/room-socket.service';
import MoleRevealView from './MoleRevealView';

const GameView = ({ room, isHost }) => {
	function onNext(event) {
		roomSocketService.moveNext(room.roomcode);
	}

	function onAgreeNext(event) {
		roomSocketService.agreeToMoveNext(room.roomcode);
	}

	switch (room._state) {
		case Room.ROOM_STATES.LOBBY:
			return <LobbyView room={room} isHost={isHost} onNext={onNext} />;
		case Room.ROOM_STATES.WELCOME:
			return <WelcomeView room={room} onNext={onAgreeNext} />;
		case Room.ROOM_STATES.MOLE_REVEAL:
			return <MoleRevealView room={room} onNext={onAgreeNext} />;
		case Room.ROOM_STATES.EPISODE_START:
			return <EpisodeStartView room={room} />;
		case Room.ROOM_STATES.IN_CHALLENGE:
			return <ChallengeView room={room} />;
		case Room.ROOM_STATES.CHALLENGE_INTERMISSION:
			return <ChallengeIntermissionView room={room} />;
		case Room.ROOM_STATES.PRE_QUIZ_INTERMISSION:
			return <PreQuizIntermissionView room={room} />;
		case Room.ROOM_STATES.IN_QUIZ:
			return <QuizView room={room} />;
		case Room.ROOM_STATES.POST_QUIZ_INTERMISSION:
			return <PostQuizIntermissionView room={room} />;
		case Room.ROOM_STATES.EXECUTION:
			return <ExecutionView room={room} />;
		case Room.ROOM_STATES.EXECUTION_WRAPUP:
			return <ExecutionWrapupView room={room} />;
		default:
			return null;
	}
};

export default GameView;
