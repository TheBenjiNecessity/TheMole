import React, { Component } from 'react';

import './game-lobby.scss';
import { NavBar } from '../../components/navbar';

import GameController from '../../controllers/game.controller';

import '../../extensions';

class GameLobby extends Component {
    constructor(props) {
        super(props);

        this.onPlay = this.onPlay.bind(this);
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

    onPlay() {
        // tell room that game has started
        // go to game
        this.play(true);
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
            <div key={key} >
                <PlayerListView player={player}/>
            </div>
        );
    }

    listPlayerViews() {
		if (!this.state.room || !this.state.room.players.length) return null;

        return this.state.room.players.map((p, i) => this.getPlayerView(p, i));
    }

    render() {
		let { room, toGame } = this.state;

        if (toGame) {
            return <Redirect to="/Game" />
        }

        return  (
            <div className="main">
                <NavBar title="The Mole"></NavBar>
                <div className="panel centered-panel centered-panel-medium">
					{room ? room.roomcode : ''}

                    {this.listPlayerViews()}

                    <button type="button" className="button button-primary" onClick={this.onPlay}>Start Game</button>
                </div>
            </div>
        );
    };
}

export default GameLobby;

/**
 * => Home
 *  - Generate room code => room created on server
 *  - Create websocket => socket created and added to room
 * => Game Lobby
 *  - Set up listener for players from server => whenever player is added to room, send add-player message to room with room object
 *  - whenever lobby receives add-player event, reset room
 */