import { useDispatch } from "react-redux";
import { addMoviesVideos } from "../utils/store/popularMovieSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovieVideo = (id) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchVideos();
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


export default usePopularMovieVideo;