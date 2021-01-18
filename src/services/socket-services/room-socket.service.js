import socketService from '../socket.service';
import storageService from '../storage.service';

const roomSocketService = {
	moveNext: (roomcode) => {
		socketService.sendMessageToRoom(roomcode, 'move-next');
	},

	agreeToMoveNext: (roomcode) => {
		socketService.sendMessageToRoom(roomcode, 'agree-to-move-next', storageService.getPlayer().name);
	},

	quizDone: (roomcode, quizAnswers) => {
		socketService.sendMessageToRoom(roomcode, 'quiz-done', storageService.getPlayer().name, quizAnswers);
	}
};

export default roomSocketService;
