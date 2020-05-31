import SocketService from '../services/socket.service';

class GameController {
	player = null;
	room = null;
	isHost = false;

	constructor() {
		if (!GameController.shared) {
			GameController.shared = this;
		}
		return GameController.shared;
	}

	setListenForPlayerCB(cb) {
		SocketService.createEvent('add-player', cb);
	}

	setListenForPlayCB(cb) {
		SocketService.createEvent('play', cb);
	}

	stopListenForPlayerCB() {
		SocketService.destroyEvent('add-player');
	}

	stopListenForPlayCB() {
		SocketService.destroyEvent('play');
	}

	setCurrentPlayer(player) {
		this.player = player;
	}

	setRoom(room) {
		this.room = room;
	}

	// onMessage(obj) {
	//     if (obj.action === 'add-player') {
	//         this.listenForPlayers(obj.room);
	//     }
	// }
}

const shared = new GameController();

export default shared;
