import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";


const initialState = {};

const reducer = combineReducers({
    expenses: expenseReducer
});




const store = createStore(reducer, initialState)

//createStore takes two arguments reducer and initialState

export default store;