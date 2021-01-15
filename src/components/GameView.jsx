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
import socketService from '../services/socket.service';
import storageService from '../services/storage.service';

const GameView = ({ room, isHost }) => {
	function onNext(event) {
		socketService.sendMessageToRoom(room.roomcode, 'move-next', storageService.getPlayer().name);
	}

	switch (room._state) {
		case Room.ROOM_STATES.LOBBY:
			return <LobbyView room={room} isHost={isHost} onNext={onNext} />;
		case Room.ROOM_STATES.WELCOME:
			return <WelcomeView />;
		case Room.ROOM_STATES.EPISODE_START:
			return <EpisodeStartView />;
		case Room.ROOM_STATES.IN_CHALLENGE:
			return <ChallengeView />;
		case Room.ROOM_STATES.CHALLENGE_INTERMISSION:
			return <ChallengeIntermissionView />;
		case Room.ROOM_STATES.PRE_QUIZ_INTERMISSION:
			return <PreQuizIntermissionView />;
		case Room.ROOM_STATES.IN_QUIZ:
			return <QuizView />;
		case Room.ROOM_STATES.POST_QUIZ_INTERMISSION:
			return <PostQuizIntermissionView />;
		case Room.ROOM_STATES.EXECUTION:
			return <ExecutionView />;
		case Room.ROOM_STATES.EXECUTION_WRAPUP:
			return <ExecutionWrapupView />;
		default:
			return null;
	}
};

export default GameView;
