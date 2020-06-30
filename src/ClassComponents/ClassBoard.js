import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ClassBoard extends Component {

    win = () => {
        this.props.win();
    }

    lose = () => {
        this.props.lose();
    }

    render() {
        return (
            <div>
                <h1>GameBoard</h1>
                <button onClick={this.win}>You Win</button>
                <button onClick={this.lose}>You Lose</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        win : () => {
            return dispatch ({type: 'YOU_WIN', payload: {points: 100}});
        },
        lose : () => {
            return dispatch ({type: 'YOU_LOSE', payload: {points: 50}});
        },
    }
}

export default connect(mapDispatchToProps)(ClassBoard);
