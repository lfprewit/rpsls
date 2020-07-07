import React, { Component } from 'react'
import { connect } from 'react-redux';
import './component.css';

export class Scoreboard extends Component {

    render() {
        return (
            <div>
                <h2 className="subtitle">SCOREBOARD</h2>
                <p className="body">Player: {this.props.userScore}  |  Computer: {this.props.compScore}  |  Tie: {this.props.tieGame}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Scoreboard)