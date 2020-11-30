export class Room {
	roomcode = null;
	state = 'lobby';
	players = [];
	episodes = [];

	agreedPlayers = [];
	raisedHands = {};

	constructor(roomcode) {
		this.roomcode = roomcode;
	}
}
