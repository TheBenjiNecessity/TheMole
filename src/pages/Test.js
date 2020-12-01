import React, { Component } from 'react';

import SocketService from '../services/socket.service';

/**
 * Summary: The first view that the user sees when opening the page.
 *
 * Description:
 *      Whenever the user first comes to the site, they are greeted with this
 * page. This page has a simple form that gives the user the ability to generate
 * a room for other players to join or for the player to join another room
 * already created.
 */
class Test extends Component {
	constructor(props) {
		super(props);

		this.onConnect = this.onConnect.bind(this);
		this.onTest = this.onTest.bind(this);

		this.state = {};
	}

	onConnect() {
		SocketService.createService('ws://192.168.1.146:8999', { room: { roomcode: 'ABCD' } });

		setTimeout(function() {
			SocketService.joinRoom({ room: { roomcode: 'ABCD' } });
		}, 1000);

		SocketService.createEvent('start-game', function(event) {
			console.log('event', event);
		});
	}

	onTest() {
		SocketService.sendMessageToRoom('start-game', 'ABCD');
	}

	onChange(event) {
		const name = event.target.name;
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="main">
				<button type="button" className="button button-primary" onClick={this.onConnect}>
					Connect
				</button>
				<button type="button" className="button button-primary" onClick={this.onTest}>
					Test
				</button>
			</div>
		);
	}
}

export default Test;
