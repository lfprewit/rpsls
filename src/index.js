import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game.js';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// store setup

const initialState = {
  choice: null
}

//if state is undefined, initialState will be used
function reducer (state = initialState, action) {
  switch(action.type) {
    case 'ROCK':
      return {//this is definitely wrong
        newState : {
          ...state,
          choice: 'Rock'
        } 
      }
    case 'PAPER':
      return {//this is definitely wrong
        newState : {
          ...state,
          choice: 'Paper'
        } 
      }
    
    default:
      return state;
  }
}

const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Game />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
