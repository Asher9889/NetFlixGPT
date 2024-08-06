import { useSelector } from "react-redux";
import { generateNumber } from "../utils/constant";
import useMovieVideo from "../hooks/useMovieVideo";
import { useMemo, React } from "react";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const TrailerPlayingMainDisplay = () => {
  const index = useMemo(() => generateNumber(), []);

  // getting movie from store
  const movie = useSelector((store) => store.movies?.movies[index]);

  // adding single movie into store;
  // so that trailer can be shown

  useMovieVideo(movie?.id);

  const video = useSelector((store) => store.movies.trailerMovie[0]);

  return (
    <div className="w-full lg:85vh h-full  aspect-video bg-green-800 ">
      <ReactPlayer
        className="scale-[1.4]"
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${video?.key}`}
        loop="true"
        playing={true}
        muted={true}
        controls="false"
        volume="0.5"
      />
      <div className="absolute w-[40%] left-[4%] top-[8%] lg:top-[20%] text-white">
        <h1 className=" text-sm  lg:leading-[3rem] lg:text-[3rem]  font-netFlixBd ">
          {movie?.original_title}
        </h1>
        <p className="hidden mt-2 md:block font-netFliRg text-sm lg:text-[1rem] ">
          {movie?.overview}
        </p>
        <div className="flex flex-row w-[70vw] md:w-auto mt-14 xs:mt-24 lg:mt-4 gap-4  h-8 md:h-auto ">
          <button className="flex flex-row items-center gap-2 lg:gap-4 px-6  lg:px-8 lg:py-3 bg-white text-black text-sm lg:text-xl font-netFlixBd rounded-md">
            <FaPlay className="text-sm lg:text-xl" />
            Play
          </button>
          <button className="flex flex-row items-center  bg-yellow-800 lg:gap-4  px-2 lg:px-8 lg:py-3 bg-white text-black text-sm lg:text-xl bg-[var(--black-color-button)]  text-black font-netFlixBd rounded-md">
            <IoInformationCircleOutline className="text-2xl lg:text-3xl" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerPlayingMainDisplay;
