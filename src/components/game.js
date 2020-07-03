import React, { Component } from 'react';
import { connect } from 'react-redux';






export class Game extends Component {



    render() {
        return (
            
            <div>
                <h2>Results</h2>
                <h3>You chose {this.props.choice}</h3>
                <h3>Your opponent chose {this.props.compChoice}</h3>
                <h3>You {this.props.gameResults}</h3>

                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gameTime: (gameData) => {
            return dispatch ({type: 'EXECUTE_GAME', payload: gameData});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
