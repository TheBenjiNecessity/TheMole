import React, { Component } from 'react';

import './hr-with-title.scss';

class HRWithTitle extends Component {
    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        let containerClass = 'hr-container';

        if (this.props.className) {
            containerClass += ' ' + this.props.className;
        }

        if (this.props.vertical) {
            containerClass += ' vertical';
        }

        return  (
            <div className={containerClass}>
                <div className="hr-left"><hr/></div>
                <div className="hr-center">{this.props.children}</div>
                <div className="hr-right"><hr/></div>
            </div>
        );
    };
}

export default HRWithTitle;