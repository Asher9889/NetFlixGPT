import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerMovie } from "../utils/store/nowPlayingSlice";
import { useEffect } from "react";

const useFrontTrailerVideo = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== undefined) {
      console.log("I am useEffect")
      findVideos();
    }
  }, [id]);

  async function findVideos() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos",
        options
      );
      const data = await res.json();

      const video = data?.results?.filter(
        (video) => video.type === "Trailer"
      );
      dispatch(addTrailerMovie(video));
    } catch (error) {
      console.log("error during useMovieHook fetch call");
    }
  }
};

export default useFrontTrailerVideo;
