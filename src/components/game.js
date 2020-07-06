import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    

    render() {
        return (
            
            <div>
                <h2>Results</h2>
                <p>You chose {this.props.choice}</p>
                <p>Your opponent chose {this.props.compChoice}</p>
                <p>You {this.props.gameResults}</p>
                
                
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
