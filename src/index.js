import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Selection from './components/Selection.js';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// store setup

const initialState = {
  choice: '',
  name: 'Lance'
}

//if state is undefined, initialState will be used
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ROCK':
      return {
          ...state,
          choice: 'Rock'
      }
    case 'PAPER':
      return {
          ...state,
          choice: 'Paper'
      }
      case 'SCISSORS':
    return {
        ...state,
        choice: 'Scissors'
    }
    case 'LIZARD':
    return {
        ...state,
        choice: 'Lizard'
    }
    case 'SPOCK':
    return {
        ...state,
        choice: 'Spock'
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
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
