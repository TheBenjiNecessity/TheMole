import { ApiHelperService } from './api-helper.service';

import io from 'socket.io-client';

export class SocketService extends ApiHelperService {
	constructor() {
		super();

		this.connection = null;
		this.onMessageCB = null;

		this.socket = null;

		if (!SocketService.shared) {
			SocketService.shared = this;
		}
		return SocketService.shared;
	}

	createService(url, room) {
		this.socket = io.connect(url);
		this.joinRoom(room.roomcode);
	}

	joinRoom(room) {
		this.socket.emit('join', room);
	}

	createEvent(type, func) {
		this.socket.on(type, func);
	}

	sendMessageToRoom(message, room) {
		this.socket.emit(message, room);
	}
}

const shared = new SocketService();

export default shared;
