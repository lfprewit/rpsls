import React, { Component } from 'react';
import './component.css';

export default class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "ROCK, PAPER, SCiSSORS, LiZARD, SPOCK GAME"
        };
    }

    render() {
        return (
            <div>
                <h1 className="title">{this.state.title}</h1>
            </div>
        )
    }
}
