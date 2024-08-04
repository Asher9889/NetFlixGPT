import { useEffect } from "react";
import { options } from "../utils/constant";
import { addMovies } from "../utils/store/moviesSlice";
import { useDispatch } from "react-redux";

function useNowPlaying() {
  const dispatch = useDispatch();

  // eslint-disable-next-line 
  useEffect(() => {
    fetchMovies();
  });
  // eslint-disable-next-line 
  // no need to add empty array beacuse of secure route browse page only 
  //  renders once

  function fetchMovies() {
    try {
      fetch("https://api.themoviedb.org/3/movie/now_playing", options)
        .then((res) => res.json())
        .then((data) => dispatch(addMovies(data.results)));
    } catch (error) {
      console.log(error);
    }
  }
}

export default useNowPlaying;
