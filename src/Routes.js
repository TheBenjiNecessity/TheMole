import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/home';
import { Game } from './pages/game';
import { NoMatch } from './pages/nomatch';

import './App.scss';

export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/Game" component={Game} />
                <Route exact path="/" component={Home} />
                <Route component={NoMatch} />
            </Switch>
        );
    };
}