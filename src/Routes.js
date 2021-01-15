import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './locales/i18n';

import Home from './pages/Home';
import Game from './pages/Game';
import Test from './pages/Test';
import HostGame from './pages/HostGame';
import NoMatch from './pages/NoMatch';

import './App.scss';

export class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/HostGame" component={HostGame} />
				<Route path="/Game" component={Game} />
				<Route path="/Test" component={Test} />
				<Route exact path="/" component={Home} />
				<Route component={NoMatch} />
			</Switch>
		);
	}
}
