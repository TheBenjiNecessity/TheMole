import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './full-screen-loader.scss';

class FullScreenLoader extends Component {
    element = null;

    constructor(props) {
        super(props);

        this.state = { };
    }

    componentDidMount() {
        var full_screen_loader = document.createElement('div');
        full_screen_loader.id = "full-screen-loader";
        document.body.appendChild(full_screen_loader);

        this.element = full_screen_loader;
        this.componentDidUpdate();
    }

    componentWillUnmount() {
        document.body.removeChild(this.element);
    }

    componentDidUpdate() {
        let className = "full-screen-loader";

        if (this.props.loading) {
            className += " loading";
        }

        ReactDOM.render(
            <div className={className}>
                <div className="loading-element">
                    <i className="fas fa-circle-notch"></i>
                    {this.props.children}
                </div>
            </div>
        , this.element);
    }

    render() {
        return null;
    }
}

export default FullScreenLoader;