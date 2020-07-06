import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selection from './components/Selection';
import Game from './components/game.js';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Scoreboard from './components/Scoreboard';
//import { BrowserRouter as Router} from 'react-router-dom';

// store setup

const initialState = {
  name: 'Lance',
  choice: '',
  compChoice: '',
  gameResults: '',
  showMyComponent: false,
  showSomeOtherComponent: false,
  userScore: 0,
  compScore: 0,
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
        compChoice: payload.compChoiceText, //action.payload.compChoiceText???
        gameResults: payload.gameResults
      }
    case 'INSTRUCTIONS':
      return {
        ...state,
        instructionsActive: payload.instructionsActive
      }
    default:
      return state;
  }
}

const store = createStore(reducer);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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
