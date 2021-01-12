import React from 'react';

import './player-list-view.scss';

const PlayerListView = ({ player }) => <div className="player-view">{player.name}</div>;

export default PlayerListView;
