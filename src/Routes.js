import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/home';
import { NoMatch } from './pages/nomatch';

export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NoMatch} />
            </Switch>
        );
    };
}