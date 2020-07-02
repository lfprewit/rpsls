import React, { Component } from 'react';
import { connect } from 'react-redux';

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const resultArray = [
    ['Tie','Lose','Win','Win','Lose'],
    ['Win','Tie','Lose','Lose','Win'],
    ['Lose','Win','Tie','Win','Lose'],
    ['Lose','Win','Lose','Tie','Win'],
    ['Win','Lose','Win','Lose','Tie']
];

// function gameTime () {
//     let compChoiceIndex = [Math.floor(Math.random() * 5)];
//     let compChoiceText = choices[compChoiceIndex];
//     let playerChoiceIndex = choices.indexOf(this.props.state.choice);
//     let gameResult = resultArray[playerChoiceIndex][compChoiceIndex];
//     let gameData = {    // Object Literal Property Value Shorthand
//         compChoiceText: compChoiceText,
//         gameResult: gameResult
//     };
//     this.props.gameTime(gameData);
// } 


export class Game extends Component {

    // gameTime = () => {
    //     let compChoiceIndex = [Math.floor(Math.random() * 5)];
    //     let compChoiceText = choices[compChoiceIndex];
    //     let playerChoiceIndex = choices.indexOf(this.props.state.choice);
    //     let gameResult = resultArray[playerChoiceIndex][compChoiceIndex];
    //     let gameData = {    // Object Literal Property Value Shorthand
    //         compChoiceText: compChoiceText,
    //         gameResult: gameResult
    //     };
    //     this.props.gameTime(gameData);
    // } 

    componentDidMount() {
        this.props.gameTime();
    }

    render() {
        return (
            
            <div>
                <h2>Results</h2>
                <h3>You chose {this.props.choice}</h3>
                <h3>Your opponent chose {this.props.compChoice}</h3>
                <h3>You </h3>

                
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
        gameTime: () => {
            let compChoiceIndex = [Math.floor(Math.random() * 5)];
            let compChoiceText = choices[compChoiceIndex];
            let playerChoiceIndex = choices.indexOf(this.props.state.choice);
            let gameResult = resultArray[playerChoiceIndex][compChoiceIndex];
            let gameData = {   
                compChoiceText: compChoiceText,
                gameResult: gameResult
            };
            return dispatch ({type: 'EXECUTE_GAME', payload: gameData});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
