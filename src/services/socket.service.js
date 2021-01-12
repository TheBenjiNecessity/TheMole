import io from 'socket.io-client';

const url = 'ws://localhost:8999';
const socket = io.connect(url);

const socketService = {
	joinRoom: (roomcode) => {
		socket.emit('join', roomcode);
	},

	createEvent: (type, cbFunc) => {
		socket.on(type, cbFunc);
	},

	destroyEvent: (type) => {
		socket.off(type);
	},

	sendMessageToRoom: (roomcode, message, playerName = '', ...args) => {
		if (!roomcode || !roomcode.length) {
			throw new Error('Roomcode cannot be empty');
		}

		let obj = { ...args };
		obj.roomcode = roomcode;

		if (playerName.length) {
			obj.playerName = playerName;
		}

		socket.emit(message, obj);
	}
};

export default socketService;
