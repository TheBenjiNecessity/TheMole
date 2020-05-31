import io from 'socket.io-client';

import GameController from '../controllers/game.controller';

export class SocketService {
	constructor() {
		this.connection = null;
		this.onMessageCB = null;

		this.socket = null;

		this.createService();

		if (!SocketService.shared) {
			SocketService.shared = this;
		}
		return SocketService.shared;
	}

	createService(url, room) {
		if (url && room) {
			this.socket = io.connect(url);
			this.joinRoom(room.roomcode);
			return true;
		} else {
			let gRoom = GameController.getRoom();
			let gUrl = GameController.getWSUrl();

			if (gRoom && gUrl) {
				this.socket = io.connect(gUrl);
				this.joinRoom(gRoom.roomcode);
				return true;
			} else {
				return false;
			}
		}
	}

	joinRoom(room) {
		if (this.socket) {
			this.socket.emit('join', room);
			return true;
		} else {
			return false;
		}
	}

	createEvent(type, func) {
		if (this.socket) {
			this.socket.on(type, func);
			return true;
		} else {
			return false;
		}
	}

	destroyEvent(type) {
		if (this.socket) {
			this.socket.off(type);
			return true;
		} else {
			return false;
		}
	}

	sendMessageToRoom(message, room) {
		if (this.socket) {
			this.socket.emit(message, room);
			return true;
		} else {
			return false;
		}
	}
}

const shared = new SocketService();

export default shared;
