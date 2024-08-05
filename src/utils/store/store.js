import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice";
import top10MoviesReducers from "./top10MovieSlice"


const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        top10Movies: top10MoviesReducers,
    }
});


export default appStore;