import React, { Component } from 'react';

import './nav-bar.scss';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        return  (
            <nav className="nav-bar panel panel-primary">
                 <div className="left-column"></div>
                <div className="title center-column">{this.props.title}</div>
                <div className="right-column">
                    <button className="button icon-button icon-button-light menu-button">
                        <i className="material-icons menu">menu</i>
                    </button>
                </div>
            </nav>
        );
    };
}

export default NavBar;