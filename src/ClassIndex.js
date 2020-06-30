import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ClassBoard from './ClassComponents/ClassBoard.js';
import ClassScore from './ClassComponents/ClassScore.js';


// store setup -> VERIFY THIS 

const initialState = {
    score: 0,
    players: [
      {
        name: 'Test',
        class: 'Mage'
      },
      {
        name: 'Test2',
        class: 'Warrior'
      }
    ],
    inventory: [
      {
        count: 100,
        type: 'potion'
      }
    ]
  }

//if state is undefined, initialState will be used
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'YOU_WIN':
        return {
            ...state,
            score: state.score + action.payload.points
        }
    case 'YOU_LOSE':
        return {
            ...state,
            score: state.score + action.payload.points
        }
    default:
        return state;
  }
}

const store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ClassBoard />
        <ClassScore />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();