import todoReducers from "./todoReducers";

import { combineReducers } from "redux";

const rootReucer = combineReducers({
    todoReducers
})

export default rootReucer;