import React, { Component } from 'react';

import './player-list-view.scss';

class PlayerListView extends Component {
	element = null;

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <div className="player-view">{this.props.name}</div>;
	}
}

export default PlayerListView;
