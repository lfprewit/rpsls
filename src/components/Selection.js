import React, { Component } from 'react';
import { connect } from 'react-redux';

class Selection extends Component {

    render() {
        return (
            <div>
                <h2>Choose wisely</h2>    
                <button onClick={() => this.props.userChoice("Rock")}>Rock</button>
                <button onClick={() => this.props.userChoice("Paper")}>Paper</button>
                <button onClick={() => this.props.userChoice("Scissors")}>Scissors</button>
                <button onClick={() => this.props.userChoice("Lizard")}>Lizard</button>
                <button onClick={() => this.props.userChoice("Spock")}>Spock</button>
                <h3>You chose {this.props.choice}</h3>
            
        
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
