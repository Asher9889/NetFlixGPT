import { useEffect, useState } from "react";
import { options, IMDB_BASE_API_URL } from "../utils/constant";

const useGPTMoviesToTMDB = (movies) => {
    const [movieVideos, setMovieVideos] = useState(null)

  useEffect(() => {
    if(movies){
        allVideosFromeachMovies()
    }
  }, [movies]);

  async function searchMoviesFromTMDB(id) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        options
      );
      const movies = await res.json();
      return movies;
    } catch (error) {
      console.log("Error caught During Api Call", error);
    }
  }

  function requestToTMDBForEachMovie() {
    const promiseArray =
      movies &&
      movies.map((movie) => searchMoviesFromTMDB(movie.results[0]?.id));
    return promiseArray;
  }

  async function allVideosFromeachMovies() {
    try {
      const promiseArray = requestToTMDBForEachMovie();
      const results = await Promise.all(promiseArray);
      setMovieVideos(results)
    } catch (error) {
      console.log("error caught", error);
    }
  }

  return movieVideos;
};

export default useGPTMoviesToTMDB;
