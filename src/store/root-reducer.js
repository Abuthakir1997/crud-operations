import { combineReducers } from "redux";
import countReducer from "./user/count.reducer";

const rootreducers = combineReducers({
    count: countReducer
});

export default rootreducers;