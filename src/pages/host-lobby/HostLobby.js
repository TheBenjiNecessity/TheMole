import React, { Component } from 'react';

import './host-lobby.scss';
import { NavBar } from '../../components/navbar';

import GameController from '../../controllers/game.controller';

class HostLobby extends Component {
    constructor(props) {
        super(props);

        this.listenForPlayers = this.listenForPlayers.bind(this);
        this.listenForPlay = this.listenForPlay.bind(this);
        this.play = this.play.bind(this);

        this.state = { room: null, toGame: false };
    }

    componentDidMount() {
        GameController.setListenForPlayerCB(this.listenForPlayers);
        GameController.setListenForPlayCB(this.listenForPlay);

        //get room at start?
    }

    componentWillUnmount() {
        GameController.setListenForPlayerCB(null);
        GameController.setListenForPlayCB(null);
    }

    listenForPlayers(obj) {
        this.setState({room: obj.room});
    }

    listenForPlay(obj) {
        //this.setState({room: obj.room});
        this.play(false);
    }

    play(local) {
        if (local) {
            //send socket message to others
        }

        this.setState({toGame: true});
    }

    getPlayerView(player, key) {
        return (
            <div key={key}>
                <PlayerListView player={player}/>
            </div>
        );
    }

    listPlayerViews() {
        return this.state.room.players.map((p, i) => this.getPlayerView(p, i));
    }

    render() {
        let { toGame } = this.state;

        if (toGame) {
            return <Redirect to="/Game" />
        }

        return  (
            <div className="main">
                <NavBar title="The Mole"></NavBar>
                <div className="panel centered-panel centered-panel-medium">
                    {room.roomcode}

                    {this.listPlayerViews()}
                </div>
            </div>
        );
    };
}

export default HostLobby;
