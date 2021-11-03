import { combineReducers } from "redux";
import songReducer from "./song";

const rootReducers = combineReducers({
    songs: songReducer,
})

export default rootReducers