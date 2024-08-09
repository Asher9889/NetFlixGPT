import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import appInfoReducers from "./appInfoSlice";
import nowPlayingReducers from "./nowPlayingSlice"
import top10MoviesReducers from "./top10MovieSlice";
import popularMoviesReducers from "./popularMovieSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        appInfo: appInfoReducers,
        nowPlaying: nowPlayingReducers,
        top10Movies: top10MoviesReducers,
        popularMovies: popularMoviesReducers,
    }
});


export default appStore;