import { useEffect } from "react";
import { options } from "../utils/constant";
import { IMDB_BASE_API_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/store/trendingSlice";



const useNowPlaying = () => {
  

  const dispatch = useDispatch();


  useEffect(() => {
    fetchAllMoviesVideos();
  }, []);

  async function fetchAllMovies() {
    try {
      const res = await fetch(IMDB_BASE_API_URL + "/trending/movie/week", options);
      const allMovies = await res.json();
      return allMovies.results;
    }catch (error) {
      console.log("error happened")
    }
  }

  async function fetchVideo(id) {
    try {
      const res = await fetch(
        IMDB_BASE_API_URL + "/movie/" + id + "/videos",
        options
      );
      const data = await res.json();
      return data.results;
    } catch (error) {
      console.log("Error during fetchVideo ");
    }
  }

  async function fetchAllMoviesVideos() {
    try {
      // console.log("all movie data is fetching");
      const allMovieData = await fetchAllMovies();

      if (allMovieData) {
        // console.log(allMovieData);
        // console.log("ids is fetching");
        const ids = allMovieData?.map((m, i) => m.id);
        // console.log(ids);
        const allVideosApi = ids?.map((id, i) => fetchVideo(id));
        // console.log("all api is : ", allVideosApi);
        // console.log("Now all videos is fetching");
        const results = await Promise.all(allVideosApi);
        if (results) {
        //   console.log("All videos is; ", results);
          const finalData = allMovieData.map((movie, i) => ({
            ...movie,
            video: results[i],
          }));
        //   console.log(finalData);
        dispatch(addTrendingMovies(finalData));
         
        }
      }
    } catch (error) {
      console.log("error happened during Promise all call ", error);
    }
  }

  
};

export default useNowPlaying;
