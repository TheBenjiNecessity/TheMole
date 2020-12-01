import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import GameLobby from './pages/GameLobby';
import HostLobby from './pages/HostLobby';
import HostGame from './pages/HostGame';
import NoMatch from './pages/NoMatch';

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
