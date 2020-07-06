import React, { Component } from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';

export class Selection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Rock, Paper, Scissors, Lizard, Spock Game"
        };
        this.choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.resultArray = [
            ['Tie','Lose','Win','Win','Lose'],
            ['Win','Tie','Lose','Lose','Win'],
            ['Lose','Win','Tie','Win','Lose'],
            ['Lose','Win','Lose','Tie','Win'],
            ['Win','Lose','Win','Lose','Tie']
        ];
        this.summaryArray = [
            ['','Paper covers rock.','Rock crushes scissors.','Rock crushes lizard.','Spock vaporizes rock.'],
            ['Paper covers rock.','','Scissors cut paper.','Lizard eats paper.','Paper disproves Spock.'],
            ['Rock crushes scissors.','Scissors cut paper.','','Scissors decapitate lizard.','Spock smashes scissors.'],
            ['Rock crushes lizard.','Lizard eats paper.','Scissors decapitate lizard.','','Lizard poisons Spock.'],
            ['Spock vaporizes rock.','Paper disproves Spock.','Spock smashes scissors.','Lizard poisons Spock','']
         ];
        this.summaryMessage = "";
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
        //this.gameSummary();
    }

    gameSummary = () => {
        console.log("made it here");
        let compChoiceIndex = this.choices.indexOf(this.props.compChoice);
        console.log(compChoiceIndex);//returning a -1
        let playerChoiceIndex = this.choices.indexOf(this.props.choice);
        let summaryMessage = this.summaryArray[playerChoiceIndex][compChoiceIndex];
        console.log(summaryMessage);
    }

    handleShow = ()=>{
        this.setState({
            isActive: true
        })
    }
  
    handleHide = () =>{
        this.setState({
            isActive: false
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>
                    {this.state.isActive ? <div><h2>Instructions</h2> <Instructions /></div> : <h2>Instructions</h2> }
                        <button onClick={this.handleShow}>Show</button>
                        <button onClick={this.handleHide}>Hide</button>
                </div>
                <h2>Choose wisely</h2>    
                <button onClick={() => this.gameExecution("Rock")}>Rock</button>
                <button onClick={() => this.gameExecution("Paper")}>Paper</button>
                <button onClick={() => this.gameExecution("Scissors")}>Scissors</button>
                <button onClick={() => this.gameExecution("Lizard")}>Lizard</button>
                <button onClick={() => this.gameExecution("Spock")}>Spock</button>
            </div>
        )
    }

}

//this is what maps the redux state to the Selection component as props you can use
function mapStateToProps(state) {
    return {
        //choice: state.choice
        ...state
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        userChoice: (choice) => {
            return dispatch ({type: 'USER_CHOICE', payload: choice})
        },
        gameTime: (gameData) => {
            return dispatch ({type: 'EXECUTE_GAME', payload: gameData});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
