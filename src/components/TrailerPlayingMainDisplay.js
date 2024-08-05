import { useSelector } from "react-redux";
import { generateNumber } from "../utils/constant";
import useMovieVideo from "../hooks/useMovieVideo";
import { useMemo, React } from "react";
import ReactPlayer from 'react-player/lazy'
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
    <div className="w-full h-full  aspect-video bg-pink-800 ">
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
        <div className="absolute text-white shadow-xl left-[4%] w-[35vw] top-[25%] text-white bg-transparent">
            <h1 className="text-[3rem]  font-netFlixBd">{movie?.original_title}</h1>
            <p className="font-netFliRg text-[1rem]">{movie?.overview}</p>
            <div className="flex flex-row mt-4 gap-4">
                <button className="flex flex-row items-center gap-4 px-8 py-3 bg-white text-black text-xl font-netFlixBd rounded-md">
                    <FaPlay />
                    Play
                </button>
                <button className="flex flex-row items-center gap-4 px-8 py-3 bg-[var(--black-color-button)] text-white text-black text-xl font-netFlixBd rounded-md">
                    <IoInformationCircleOutline className="text-3xl"/>
                    More Info
                </button>
                
            </div>
        </div>
      
    </div>
  );
};

export default TrailerPlayingMainDisplay;
