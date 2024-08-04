import { useSelector } from "react-redux";
import { generateNumber } from "../utils/constant";
import useMovieVideo from "../hooks/useMovieVideo";
import { useMemo } from "react";

const TrailerPlayingMainDisplay = () => {
  const index = useMemo(() => generateNumber(), []);
  console.log(index);

  // getting movie from store
  const movie = useSelector((store) => store.movies?.movies[index]);

  // adding single movie into store;
  // so that trailer can be shown

  useMovieVideo(movie?.id);

  const video = useSelector((store) => store.movies.trailerMovie[0]);

  return (
    <div className="w-full bg-red-500 scale-[1.5]">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${video?.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      
    </div>
  );
};

export default TrailerPlayingMainDisplay;
