import { useSelector, useDispatch } from "react-redux";
import { removeWindowHeight } from "../utils/store/appInfoSlice"
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Movie = () => {
  const [videoKey, setVideoKey] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { index, type } = useParams();

  // List of videos
  const videos = useSelector(
    (store) => {
      if(type === "now playing"){
        return store.nowPlaying?.nowPlayingMoviesVideos[index]
      }else if(type === "popular"){
        return store.popularMovies?.popularMoviesVideos[index]
      }
    }
  );

  const windowHeight = useSelector((store) => store.appInfo?.windowHeight);

  // Filtering trailer from list of videos
  const trailer = videos?.filter((video) => video?.type === "Trailer");

  useEffect(() => {
    setVideoKey(trailer[0]?.key);
  }, []);

  useEffect(() => {
    console.log("runs")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {
      window.scrollTo({
        top: windowHeight,
        behavior: "smooth",
      });
    };
  }, [videoKey]);

  // Framer Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute  inset-0 pt-10 bg-[rgba(0,0,0,0.8)] z-[100]"
    >
      <div className="relative mx-auto w-[90vw] lg:w-[60vw] bg-[var(--black1-color)] h-[200vh] ">
        <span
          onClick={() => {
            navigate("/browse")
            dispatch(removeWindowHeight())
          }}
          className="absolute h-10 w-10 right-0 top-0 p-2 hover:text-3xl rounded-full bg-zinc-600 hover:bg-zinc-800 text-white flex justify-center items-center cursor-pointer"
        >
          <IoMdClose />
        </span>
        <div className="w-full aspect-video ">
          <iframe
            width="100%"
            className=""
            height="100%"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="overflow-y-scroll h-[50%] scrollbar bg-[var(--primary-bg-color)]">
          {videos &&
            videos.map((video, index) => (
              <MovieCard
                activeCardIndex={activeCardIndex}
                setActiveCardIndex={() => setActiveCardIndex(index)}
                key={video.id}
                video={video}
                index={index}
                setVideoKey={setVideoKey}
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Movie;
