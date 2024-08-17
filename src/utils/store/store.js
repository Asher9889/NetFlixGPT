import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import appInfoReducers from "./appInfoSlice";
import nowPlayingReducers from "./nowPlayingSlice"
import top10MoviesReducers from "./top10MovieSlice";
import popularMoviesReducers from "./popularMovieSlice";
import trendingReducers from "./trendingSlice";
import upcomingReducers from "./upcomingSlice";
import gptMoviesReducers from "./gptMoviesSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        appInfo: appInfoReducers,
        top10Movies: top10MoviesReducers,
        nowPlaying: nowPlayingReducers,
        popularMovies: popularMoviesReducers,
        trendingMovies: trendingReducers,
        upcomingMovies: upcomingReducers,
        gptMovies: gptMoviesReducers
    }
});


export default appStore;