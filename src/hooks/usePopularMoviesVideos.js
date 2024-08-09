import { useDispatch } from "react-redux";
import { addMoviesVideos, removeAddMoviesVideos } from "../utils/store/popularMovieSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const usePopularMoviesVideos  = (id) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchVideos();
    return ()=>{
      dispatch(removeAddMoviesVideos);
    }
  }, [])
  async function fetchVideos() {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      options
    );
    const data = await res.json();
    dispatch(addMoviesVideos(data.results));
  }
};


export default usePopularMoviesVideos;