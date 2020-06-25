import React, { Component } from 'react';

class Game extends Component {

    constructor (props) {
        super(props);

        this.state = {
            selection: null,
            game: 'rpsls'
        };
    }

    userChoiceRock (ch) {
        var choice = ch;

        this.setState({
            ...this.state, selection: choice
        })
    }    

 

    render() {
        return (
            <div>
                <h2>Choose wisely</h2>
                <h3>{this.state.selection}</h3>
                
                <button value="Rock" onClick={e => this.userChoiceRock(e.target.value)}>Rock</button>
                <button value="Paper" onClick={e => this.userChoiceRock(e.target.value)}>Paper</button>
                <button value="Scissors" onClick={e => this.userChoiceRock(e.target.value)}>Scissors</button>
                <button value="Lizard" onClick={e => this.userChoiceRock(e.target.value)}>Lizard</button>
                <button value="Spock" onClick={e => this.userChoiceRock(e.target.value)}>Spock</button>
            </div>
        )
    }
}


export default Game;
