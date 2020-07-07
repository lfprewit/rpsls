import React, { Component } from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';
import './component.css';

export class Selection extends Component {

    constructor(props) {
        super(props);
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
        let choiceIndexes = {
            player: playerChoiceIndex,
            computer: compChoiceIndex
        }
        this.props.userChoice(gameData);
        this.gameSummary(choiceIndexes);
        this.scoreUpdate(gameResult);
    }

    gameSummary = (choiceIndexes) => {
        let summaryMessage = this.summaryArray[choiceIndexes.player][choiceIndexes.computer];
        this.props.gameSummary(summaryMessage);
    }

    handleShow = ()=>{
        this.props.instructionState({instructionsActive: true});
    }
  
    handleHide = () =>{
        this.props.instructionState({instructionsActive: false});
    }

    scoreUpdate = (result) => {
        switch (result) {
            case 'Win':
                return this.props.youWin()
            case 'Lose':
                return this.props.youLose()
            case 'Tie':
                return this.props.youTie()
            default:
                return;
        }

    }

    //The below renders the instruction using a ternary operator.  Then renders the buttons for user selection. 
    render() {
        return (
            <div>
                <div>
                    {this.props.instructionsActive ? 
                        <div>
                            <h2 className="subtitle">INSTRUCTIONS</h2> 
                            <button className="body" onClick={this.handleHide}>Hide</button> 
                            <Instructions />
                        </div>
                        : 
                        <div>
                            <h2 className="subtitle">INSTRUCTIONS</h2>  
                            <button className="body" onClick={this.handleShow}>Show</button> 
                        </div>
                    }  
                </div>
                
                <h2 className="subtitle">CHOOSE WISELY</h2>    
                <button className="body" onClick={() => this.gameExecution("Rock")}>Rock</button>
                <button onClick={() => this.gameExecution("Paper")}>Paper</button>
                <button onClick={() => this.gameExecution("Scissors")}>Scissors</button>
                <button onClick={() => this.gameExecution("Lizard")}>Lizard</button>
                <button onClick={() => this.gameExecution("Spock")}>Spock</button>
            </div>
        )
    }

}

//Maps redux state to this components properties
function mapStateToProps(state) {
    return {
        ...state
    }
}

//maps these dispatches to this components properties so actions can be sent to the reducer?
const mapDispatchToProps = (dispatch) => {
    return {
        userChoice: (choice) => {
            return dispatch ({type: 'USER_CHOICE', payload: choice})
        },
        gameSummary: (message) => {
            return dispatch ({type: 'EXECUTE_GAME', payload: message})
        },
        instructionState: (stateChange) => {
            return dispatch ({type: 'INSTRUCTIONS', payload: stateChange})
        },
        youWin: () => {
            return dispatch ({type: 'YOU_WIN'})
        },
        youLose: () => {
            return dispatch ({type: 'YOU_LOSE'})
        },
        youTie: () => {
            return dispatch ({type: 'YOU_TIE'})
        }
    }
}

//connect function from react-redux, used to map state and dispatch to this components properties
export default connect(mapStateToProps, mapDispatchToProps)(Selection);
