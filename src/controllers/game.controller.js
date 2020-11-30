import SocketService from '../services/socket.service';

const MOLEROOMSTORAGEKEY = 'mole-room';
const MOLEPLAYERSTORAGEKEY = 'mole-player';
const MOLEWSURLSTORAGEKEY = 'mole-ws-url';

class GameController {
	player = null;
	room = null;
	isHost = false;
	wsUrl = null;

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
		SocketService.createEvent('move-next', cb);
	}

	stopListenForPlayerCB() {
		SocketService.destroyEvent('add-player');
	}

	stopListenForPlayCB() {
		SocketService.destroyEvent('move-next');
	}

	setCurrentPlayer(player) {
		this.player = player;
		window.localStorage.setItem(MOLEPLAYERSTORAGEKEY, JSON.stringify(this.player));
	}

	getCurrentPlayer() {
		if (!this.player) {
			this.player = JSON.parse(window.localStorage.getItem(MOLEPLAYERSTORAGEKEY));
		}

		return this.player;
	}

	setRoom(room) {
		this.room = room;
		window.localStorage.setItem(MOLEROOMSTORAGEKEY, JSON.stringify(this.room));
	}

	getRoom() {
		if (!this.room) {
			this.room = JSON.parse(window.localStorage.getItem(MOLEROOMSTORAGEKEY));
		}

		return this.room;
	}

	setWSUrl(url) {
		this.wsUrl = url;
		window.localStorage.setItem(MOLEWSURLSTORAGEKEY, this.wsUrl);
	}

	getWSUrl() {
		if (!this.wsUrl) {
			this.wsUrl = window.localStorage.getItem(MOLEWSURLSTORAGEKEY);
		}

		return this.wsUrl;
	}

	startPlay() {
		SocketService.sendMessageToRoom('start-game', this.room.roomcode);
	}

	// onMessage(obj) {
	//     if (obj.action === 'add-player') {
	//         this.listenForPlayers(obj.room);
	//     }
	// }
}

const shared = new GameController();

export default shared;
