import { combineReducers } from "redux";
import positionReducer from "./position";
import tasksReducer from "./tasks";

const allReducers = combineReducers({tasks: tasksReducer, position: positionReducer})

export default allReducers;