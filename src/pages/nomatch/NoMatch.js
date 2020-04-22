import React, { Component } from 'react';
import { NavBar } from '../../components/navbar';

class NoMatch extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return  (
            <div className="main">
                <NavBar title="The Mole"></NavBar>
                <div className="panel centered-panel centered-panel-medium">
                    No Match
                </div>
            </div>
        );
    }
}

export default NoMatch;