import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selection from './components/Selection';
import Game from './components/game.js';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Scoreboard from './components/Scoreboard';
import Title from './components/Title';
//import { BrowserRouter as Router} from 'react-router-dom';

// store setup

const initialState = {
  name: 'Lance',//build out component to ask user name
  choice: '',
  compChoice: '',
  gameResults: '',
  gameMessage: '',
  userScore: 0,
  compScore: 0,
  tieGame: 0,
  instructionsActive: false
}
//if state is undefined, initialState will be used
const reducer = (state = initialState, action) => {
  let {payload} = action;
  switch(action.type) {
    case 'USER_CHOICE':
      return {
        ...state,
        choice: payload.choice,
        compChoice: payload.compChoice,
        gameResults: payload.gameResult
      }
    case 'EXECUTE_GAME':
      return {
        ...state,
        gameMessage: payload
      }
    case 'INSTRUCTIONS':
      return {
        ...state,
        instructionsActive: payload.instructionsActive
      }
    case 'YOU_WIN':
      return {
        ...state,
        userScore: state.userScore + 1
      }
    case 'YOU_LOSE':
      return {
        ...state,
        compScore: state.compScore + 1
      }
    case 'YOU_TIE':
      return {
        ...state,
        tieGame: state.tieGame + 1
      }
    default:
      return state;
  }
}

const store = createStore(reducer);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Title />
        <Selection />
        <Game />
        <Scoreboard />
        
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
