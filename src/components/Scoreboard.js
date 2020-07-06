import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Scoreboard extends Component {

    render() {
        return (
            <div>
                <h2>Scoreboard</h2>
                <p>Player: {this.props.userScore} | Computer: {this.props.compScore}</p>
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