import { useSelector } from "react-redux";
import { generateNumber } from "../utils/constant";
import useFrontTrailerVideo from "../hooks/useFrontTrailerVideo";
import { useMemo, React, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";

const TrailerPlayingMainDisplay = () => {

  const [showMutedButton, setShowMutedButton] = useState(false);

  // Generating random Number to choose differnt Number EveryTime
  const index = useMemo(() => generateNumber(), []);

  console.log("index is: ", index)

  // getting movie from store
  const movie = useSelector((store) => (store.nowPlaying?.nowPlayingMovies[index]));

  console.log("Movie is : ", movie)
  console.log("movie id is", movie?.id)
  // adding single movie into store;
  // so that trailer can be shown

  useFrontTrailerVideo(movie?.id);

  const video = useSelector((store) => store.nowPlaying?.trailerMovie[0]);

  // to mute and unmute functionality 
  function toggleMute(){
    setShowMutedButton(!showMutedButton);
  };

  return (
    <section className="relative w-full lg:85vh aspect-video overflow-x-hidden overflow-hidden">
      <ReactPlayer
        className="scale-[1.5]"
        url={`https://www.youtube.com/watch?v=${video?.key}`}
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        controls={false}
        muted={showMutedButton}
        volume={showMutedButton ? 0 : 1}
      />
      <div className="absolute w-[40%] sm:w-[60%] lg:w-[40%] lg:flex lg:flex-col lg:gap-4 left-[4%] top-[30%] xs:top-[45%] sm:top-[40%] lg:top-[25%] text-white ">
        <h1 className=" text-sm sm:text-xl lg:leading-[3rem] lg:text-[3rem]  font-netFlixBd ">
          {movie?.original_title}
        </h1>
        <p className="hidden mt-2 md:block font-netFliRg text-sm lg:text-[1rem] ">
          {(movie?.overview)?.substring(0,400)}
        </p>
        <div className="flex flex-row w-[70vw] md:w-auto mt-10  lg:mt-4 gap-4  h-8 md:h-auto ">
          <button className="flex flex-row items-center gap-2 lg:gap-4 px-6 sm:py-2 lg:px-8 lg:py-3 bg-white text-black text-sm sm:text-lg lg:text-xl font-netFlixBd rounded-md">
            <FaPlay className="text-sm lg:text-xl" />
            Play
          </button>
          <button className="flex flex-row items-center gap-2 lg:gap-4  px-2 lg:px-8 sm:py-2 lg:py-3 text-sm sm:text-lg lg:text-xl bg-[var(--black2-color-button)]  text-white font-netFlixRg rounded-md">
            <IoInformationCircleOutline className="text-2xl lg:text-3xl" />
            More Info
          </button>
        </div>
      </div>
      <span onClick={toggleMute} className="absolute right-[10%] bottom-[10%] lg:bottom-[40%]   text-xl lg:text-4xl text-white w-8 h-8 lg:w-16 lg:h-16 rounded-full flex justify-center items-center border-[2px] border-white cursor-pointer">

     {showMutedButton ? <FaVolumeMute /> : <GoUnmute />}
      </span>
    </section>
  );
};

export default TrailerPlayingMainDisplay;
