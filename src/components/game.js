import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Game extends Component {
   
    render() {
        return (
            
            <div>
                <h2>Game Results</h2>
                <p>You chose {this.props.choice}.</p>
                <p>Your opponent chose {this.props.compChoice}.</p>
                <p><b>{this.props.gameMessage}</b></p>
                <p><b><i>You {this.props.gameResults}</i></b></p>
                
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
