import SocketService from '../services/socket.service';

class GameController {
    player = null;
    room = null;
    isHost = false;

    constructor() { }

    setListenForPlayerCB(cb) {
        SocketService.createEvent('add-player', cb)
    }

    setListenForPlayCB(cb) {
        SocketService.createEvent('play', cb)
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