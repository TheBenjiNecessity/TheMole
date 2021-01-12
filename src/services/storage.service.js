const K_MOLE_ROOM_STORAGE = 'k-mole-room';
const K_MOLE_PLAYER_STORAGE = 'k-mole-player';
const K_MOLE_IS_HOST_STORAGE = 'k-mole-is-host';

const storageService = {
	getPlayer: () => {
		return JSON.parse(window.localStorage.getItem(K_MOLE_PLAYER_STORAGE));
	},

	setPlayer: (player) => {
		window.localStorage.setItem(K_MOLE_PLAYER_STORAGE, JSON.stringify(player));
	},

	getRoom: () => {
		return JSON.parse(window.localStorage.getItem(K_MOLE_ROOM_STORAGE));
	},

	setRoom: (room) => {
		window.localStorage.setItem(K_MOLE_ROOM_STORAGE, JSON.stringify(room));
	},

	getIsHost: () => {
		return JSON.parse(window.localStorage.getItem(K_MOLE_IS_HOST_STORAGE));
	},

	setIsHost: (isHost) => {
		window.localStorage.setItem(K_MOLE_IS_HOST_STORAGE, JSON.stringify(isHost));
	},

	clearValues: () => {
		window.localStorage.removeItem(K_MOLE_PLAYER_STORAGE);
		window.localStorage.removeItem(K_MOLE_PLAYER_STORAGE);
		window.localStorage.removeItem(K_MOLE_IS_HOST_STORAGE);
	}
};

export default storageService;
