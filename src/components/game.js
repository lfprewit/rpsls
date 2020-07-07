import React, { Component } from 'react';
import { connect } from 'react-redux';
import './component.css';

export class Game extends Component {
   
    render() {
        return (
            
            <div>
                <h2 className="subtitle">GAME RESULTS</h2>
                <div className="body">
                    <p>You chose {this.props.choice}.</p>
                    <p>Your opponent chose {this.props.compChoice}.</p>
                    <p><b>{this.props.gameMessage}</b></p>
                    <h3><b><i>You {this.props.gameResults}</i></b></h3>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Game);
