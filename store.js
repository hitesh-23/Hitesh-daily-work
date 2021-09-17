import { createStore } from "redux";

import rootReucer from "./reducers/index";

const store = createStore(rootReucer);

export default store;