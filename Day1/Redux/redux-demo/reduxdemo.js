const redux  = require('redux'); //import redux

const conterReducer = (state ={counter:0}, action )=>{  // reducer function
    console.log("reducer");
    return {
        counter : state.counter+1
    };
}
const counterStore = redux.createStore(conterReducer);

const countSubscriber = ()=>{
    console.log("subscribe");
    const latestState = counterStore.getState();
    console.log(latestState);
}

counterStore.subscribe(countSubscriber); 
counterStore.dispatch({type:"increment"});
counterStore.dispatch({type:"increment"});
