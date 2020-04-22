import React, { Component } from 'react';

import './home.scss';
import { NavBar } from '../../components/navbar';

import RoomService from '../../services/room.service';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this);
        this.generate = this.generate.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = { name: '', roomcode: '', toGame: false };
    }

    play() {
        let { name, roomcode } = this.state;
        let errorMessages = 'Errors:\n';
        if (!name || name === '') { //TODO check if name is taken
            errorMessages += 'You must enter a name.\n';
        }

        if (!roomcode || roomcode === '') { //TODO check if room code exists, check if room has space
            errorMessages += 'You must enter a room code.\n';
        }

        if (errorMessages && errorMessages !== 'Errors:\n') {
            alert(errorMessages);
        } else {
            this.setState({toGame: true});
        }
    }

    generate() {
        RoomService.getRoom().then(response => {
            this.setState({roomcode: response.room})
        });
    }

    onChange(event) {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [name]: value });
    }

    render() {
        if (this.state.toGame && this.state.roomcode && this.state.roomcode !== '') {
            let link = "/Game?room=" + this.state.roomcode;
            return <Redirect to={link} />
        }

        let nameInput = (<input type="text" className="form-control" name="name" onChange={this.onChange}/>);
        let roomInput = (<input type="text" className="form-control" name="roomcode" onChange={this.onChange}/>);

        return  (
            <div className="main">
                <NavBar title="The Mole"></NavBar>
                <div className="panel centered-panel centered-panel-medium">
                    <form>
                        <div className="row">
                            <div className="form-group pl-xs-0 pr-xs-0 mt-0">
                                <label htmlFor="name">Your Player Name:</label>
                                {nameInput}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group input-group pl-xs-0 pr-xs-0">
                                <label htmlFor="roomcode">Enter Room Code:</label>
                                {this.state.roomcode ? <label>{this.state.roomcode}</label> : roomInput}
                                <button type="button" className="button button-secondary" onClick={this.generate}>Generate Code</button>
                            </div>
                        </div>
                        <hr />
                        <div className="form-group pl-xs-0 pr-xs-0 mt-xs-0">
                            <div className="panel centered-panel">
                                <button type="button" className="button button-primary" onClick={this.play}>Play</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;