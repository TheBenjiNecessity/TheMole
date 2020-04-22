import React, { Component } from 'react';

import './game.scss';
import { NavBar } from '../../components/navbar';

class Game extends Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this);

        this.state = { name: '', roomcode: '' };
    }

    play() {

    }

    render() {

        return  (
            <div className="main">
                <NavBar title="The Mole"></NavBar>
                <div className="panel centered-panel centered-panel-medium">
                    test
                </div>
            </div>
        );
    };
}

export default Game;