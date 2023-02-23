const redux = require('redux');
const createStore = redux.createStore 

/*
Three principles of redux 
    1) the global state of your application is stored as an object inside a single store.
    -Maintain application state in a single object which would be managed by redux store.

    2) The only way to change the state is to dispatch an action, an object that describes what happened.

    3) To specify how the state tree is updated based on actions, you write pure reducers.
*/

console.log("from index.js");


/*1) actions 
    an action is an object with a type as a property 
    an action creator is a function that returns the action object
*/

const CAKE_ORDERED = 'CAKE_ORDERED';

// action creator
function orderCake() {
    return {
        type:CAKE_ORDERED,
        quantity:1 
    }
}

//state
const initialState = {
    numOfCakes: 10,
    anotherProperties: 0
}

/* 2) Reducer
    specify how the  app's state chamges in response to the actions sent to the store.

    (previousState, action) => newState 
*/


const reducer = (state = initialState, action)=> {
    switch(action.type){
        case CAKE_ORDERED: 
            return {
                ...state,
                numOfCakes: state.numOfCakes-1 
            }
            default:
                return state
    }

}

/*3) Redux store
        i)Holds application state
        ii)Allows access to state via getState()
        iii)Allows state to be updated via dispatch(action)
        iv) Register listeners via subscribe(listner)
        v) Handle unregistering of listeners via function returned by subscribe(listener)
 */


const store =createStore(reducer);
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(()=> console.log('Updated state ', store.getState()))


store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe(); 

