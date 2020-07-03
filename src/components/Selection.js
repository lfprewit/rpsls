import React, { Component } from 'react';
import { connect } from 'react-redux';

class Selection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Rock, Paper, Scissors, Lizard, Spock Game"
        }
        this.resultArray = [
            ['Tie','Lose','Win','Win','Lose'],
            ['Win','Tie','Lose','Lose','Win'],
            ['Lose','Win','Tie','Win','Lose'],
            ['Lose','Win','Lose','Tie','Win'],
            ['Win','Lose','Win','Lose','Tie']
        ];
        this.choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    }

    gameExecution = (choice) => {
            let compChoiceIndex = [Math.floor(Math.random() * 5)];
            let compChoiceText = this.choices[compChoiceIndex];
            let playerChoiceIndex = this.choices.indexOf(choice);
            let gameResult = this.resultArray[playerChoiceIndex][compChoiceIndex];
            let gameData = {   
                choice: choice,
                compChoice: compChoiceText,
                gameResult: gameResult
            };
            this.props.userChoice(gameData);
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>Choose wisely</h2>    
                <button onClick={() => this.gameExecution("Rock")}>Rock</button>
                <button onClick={() => this.gameExecution("Paper")}>Paper</button>
                <button onClick={() => this.gameExecution("Scissors")}>Scissors</button>
                <button onClick={() => this.gameExecution("Lizard")}>Lizard</button>
                <button onClick={() => this.gameExecution("Spock")}>Spock</button>
                <h3>You chose {this.props.choice}</h3>
                <button>Continue</button>
            </div>
        )
    }

}

//this is what maps the redux state to the Selection component as props you can use
function mapStateToProps(state) {
    return {
        choice: state.choice
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        userChoice: (choice) => {
            return dispatch ({type: 'USER_CHOICE', payload: choice})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
