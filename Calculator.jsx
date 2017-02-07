"use strict";
const createStore = require('redux').createStore;

function calculator(state = 0, action){
	switch(action.type){
		case 'ADD':
			return state + action.number
		case 'MULTIPLY':
			return state * action.number
		case 'SUBTRACT':
			return state - action.number
		case 'DIVIDE':
			return state / action.number
		case 'CLEAR':
			return 0;
	}
}

let store = createStore(calculator);
function printState(){ console.log( store.getState() ) };
store.subscribe(printState);

store.dispatch({ type: "ADD", number: 5}); //state is now 5
store.dispatch({ type: "MULTIPLY", number: 2}); //state is now 10
store.dispatch({ type: "SUBTRACT", number: 3}); //state is now 7
store.dispatch({ type: "DIVIDE", number: 2}); //state is now 3.5
store.dispatch({ type: "CLEAR"}); //state is now 0