const redux = require('redux'); //Node.js syntax
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer - the only thing that can update state in the end we pass it first beacuse it is closely connected to creation function. NEVER MUTTATE ANY DATA
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    } 
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    } 
    return state;
};

//Recives a function with 2 arguments, first is current state m second one is a action. It need to retun one thing

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscribe(() => {
    console.log('[Subscription', store.getState());
});

//subscirbe takes an argument a function which will be executed when ever state is updated, when action reach a reducer. In function body we can execute any code we want on state updatres. It will be executed whener a action is dispatched and mutate the store. thats why its before action.


// Action / Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

//dispatch takes a argument, and it's a action which sould be javascript object which need to have a type property. Convenction is to use UPPERCASE and be descriptive while also being short about what we are doing when its disaptched.
