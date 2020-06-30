import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ClassScore extends Component {
    render() {
        return (
            <div>
                <h2>ScoreBoard</h2> 
                <span>{this.props.score}</span> <br/>
                <span>Player 1: {this.props.players[0].name}</span> <br/>
                <span>Points</span><br/>
                {this.props.points}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps) (ClassScore);
