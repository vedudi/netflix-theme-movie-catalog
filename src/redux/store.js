import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./reducer/movieReducer";
import genreReducer from "./reducer/genreReducer";
import { thunk } from "redux-thunk";


const rootReducer=combineReducers({
movie:movieReducer,
genre:genreReducer,    
});
export default createStore(rootReducer, applyMiddleware(thunk));