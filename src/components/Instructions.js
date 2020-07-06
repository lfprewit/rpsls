import React, { Component } from 'react'


export class Instructions extends Component {

    render() {
        return (
            <div>
                
                <p>Rock, Paper, Scissors, but now with Lizard and Spock</p>
                <ul>
                    <li>rock crushes lizard</li>
                    <li>rock crushes scissors</li>
                    <li>paper covers rock</li>
                    <li>paper disproves spock</li>
                    <li>scissors cuts paper</li>
                    <li>scissors decapitates lizard</li>
                    <li>lizard eats paper</li>
                    <li>lizard poisons spock</li>
                    <li>spock smashes scissors</li>
                    <li>spock vaporizes rock</li>
                </ul>
            </div>
        )
    }
}


export default (Instructions);