import apiHelperService from './api-helper.service';
import storageService from './storage.service';

const roomService = {
	createRoom: () => {
		return apiHelperService.post('room').then(({ room }) => {
			storageService.clearValues();
			storageService.setRoom(room);
			storageService.setIsHost(true);

			return room.roomcode;
		});
	},

	joinRoom: (roomCode, player) => {
		return apiHelperService.put(`room/${roomCode}/join`, { player: player }).then(({ room, player }) => {
			storageService.clearValues();
			storageService.setPlayer(player);
			storageService.setRoom(room);
			storageService.setIsHost(false);
		});
	},

	getRoom: (roomCode) => {
		return apiHelperService.get(`room/${roomCode}`);
	}
};

export default roomService;
