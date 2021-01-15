const K_MOLE_ROOM_STORAGE = 'k-mole-room';
const K_MOLE_PLAYER_STORAGE = 'k-mole-player';

const storageService = {
	getPlayer: () => {
		const playerString = window.sessionStorage.getItem(K_MOLE_PLAYER_STORAGE);
		return typeof playerString === 'string' ? JSON.parse(playerString) : null;
	},

	setPlayer: (player) => {
		window.sessionStorage.setItem(K_MOLE_PLAYER_STORAGE, JSON.stringify(player));
	},

	getRoom: () => {
		const roomString = window.sessionStorage.getItem(K_MOLE_ROOM_STORAGE);
		return typeof roomString === 'string' ? JSON.parse(roomString) : null;
	},

	setRoom: (room) => {
		window.sessionStorage.setItem(K_MOLE_ROOM_STORAGE, JSON.stringify(room));
	},

	clearValues: () => {
		window.sessionStorage.removeItem(K_MOLE_PLAYER_STORAGE);
		window.sessionStorage.removeItem(K_MOLE_ROOM_STORAGE);
	}
};

export default storageService;
