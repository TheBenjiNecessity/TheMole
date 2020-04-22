import { ApiHelperService } from './api-helper.service';

export class RoomService extends ApiHelperService {
    roomApiUrl = 'host';

    constructor() {
        super();
        if (!RoomService.shared) { RoomService.shared = this; }
        return RoomService.shared;
    }
    
    getRoom() {
        return this.get(this.roomApiUrl);
    }
}

const shared = new RoomService();

export default shared;