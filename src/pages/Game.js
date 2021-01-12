import React, { useEffect, useState } from 'react';

import roomService from '../services/room.service';
import FullScreenLoader from '../common/FullScreenLoader';

import socketService from '../services/socket.service';
import GameView from '../components/GameView';
import storageService from '../services/storage.service';

const Game = ({ isHost }) => {
	let [ loading, setLoading ] = useState(false);

	useEffect(() => {
		socketService.createEvent('room-event', (room) => {
			storageService.setRoom(room);
		});
	}, []);

	useEffect(() => {
		const oldRoom = storageService.getRoom();
		if (oldRoom) {
			setLoading(true);
			roomService.getRoom(oldRoom.roomcode).then(({ room }) => {
				setLoading(false);

				storageService.setRoom(room);

				const player = storageService.getPlayer();
				if (player) {
					roomService.joinRoom(room.roomcode, storageService.getPlayer());
				}
			});
		}
	}, []);

	const room = storageService.getRoom();
	if (room) {
		return (
			<span>
				<GameView room={room} isHost={isHost} />
				<FullScreenLoader loading={loading}>Loading</FullScreenLoader>
			</span>
		);
	} else {
		return <span />;
	}
};

export default Game;
