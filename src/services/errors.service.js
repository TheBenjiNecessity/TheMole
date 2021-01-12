const errorDict = {
	//TODO: l10n
	no_room_code_given: 'You must enter a room code',
	no_room_by_code: 'No room with that code exists',
	room_is_full: 'The room with that code is full',
	room_is_in_progress: 'The room with that code is already in progress',
	player_data_not_given: 'No player data given',
	name_not_given: 'Please enter a player name',
	room_already_has_player: 'The room with that code already has a player with that name'
};

const errorsService = {
	getErrorMessages(errors) {
		return errors.map((e) => errorDict[e.error]);
	}
};

export default errorsService;
