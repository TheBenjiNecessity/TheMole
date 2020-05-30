import { ApiHelperService } from './api-helper.service';

export class RoomService extends ApiHelperService {
    constructor() {
        super();
        if (!RoomService.shared) { RoomService.shared = this; }
        return RoomService.shared;
    }

    createRoom() {
        return this.post('create');
    }

    joinRoom(roomCode, player) {
        return this.put(`join/${roomCode}`, { player: player });
    }
}

const shared = new RoomService();

export default shared;