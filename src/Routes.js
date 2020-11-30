import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/home';
import { Game } from './pages/game';
import { GameLobby } from './pages/game-lobby';
import { HostLobby } from './pages/host-lobby';
import { HostGame } from './pages/hostgame';
import { NoMatch } from './pages/nomatch';

import './App.scss';

export class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/HostGame" component={HostGame} />
				<Route path="/GameLobby" component={GameLobby} />
				<Route path="/HostLobby" component={HostLobby} />
				<Route path="/Game" component={Game} />
				<Route exact path="/" component={Home} />
				<Route component={NoMatch} />
			</Switch>
		);
	}
}
