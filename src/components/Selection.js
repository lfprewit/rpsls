import React, { Component } from 'react';
import { connect } from 'react-redux';

class Selection extends Component {

    rock = () => {
        this.props.rock();
    }
    paper = () => {
        this.props.paper();
    }
    scissors = () => {
        this.props.scissors();
    }
    lizard = () => {
        this.props.lizard();
    }
    spock = () => {
        this.props.spock();
    }

    render() {
        return (
            <div>
                <h2>Choose wisely</h2>
                <h3>{this.props.choice}</h3>
                
                <button onClick={this.rock}>Rock</button>
                <button onClick={this.paper}>Paper</button>
                <button onClick={this.scissors}>Scissors</button>
                <button onClick={this.lizard}>Lizard</button>
                <button onClick={this.spock}>Spock</button>

                {/* <button value="Rock" onClick={e => this.userChoiceRock(e.target.value)}>Rock</button>
                <button value="Paper" onClick={e => this.userChoiceRock(e.target.value)}>Paper</button>
                <button value="Scissors" onClick={e => this.userChoiceRock(e.target.value)}>Scissors</button>
                <button value="Lizard" onClick={e => this.userChoiceRock(e.target.value)}>Lizard</button>
                <button value="Spock" onClick={e => this.userChoiceRock(e.target.value)}>Spock</button> */}
            </div>
        )
    }
}


//this is what maps the redux state to the game component as props you can use
function mapStateToProps(state) {
    return {
        choice: state.choice
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        rock: () => {
            return dispatch ({type: 'ROCK'});
        },
        paper: () => {
            return dispatch ({type: 'PAPER'});
        },
        scissors: () => {
            return dispatch ({type: 'SCISSORS'});
        },
        lizard: () => {
            return dispatch ({type: 'LIZARD'});
        },
        spock: () => {
            return dispatch ({type: 'SPOCK'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
