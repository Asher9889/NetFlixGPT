import { useSelector, useDispatch } from "react-redux";
import noImg from "../assests/noYtImg.jpg"
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState, useMemo, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";


const Movie = () => {
  const [videoKey, setVideoKey] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const movieContainerRef = useRef(null);
  const navigate = useNavigate();
  const { index, type } = useParams();

  // List of videos
  const videos = useSelector(
      (store) => {
        if(type === "now playing"){
          return store.nowPlaying?.nowPlayingMovies[index]
        }else if(type === "popular"){
          return store.popularMovies?.popularMovies[index]
        }
      }
    );

   

  const windowHeight = useSelector((store) => store.appInfo?.windowHeight);

  // Filtering trailer from list of videos
  const trailer = videos?.video?.filter((video) => video?.type === "Trailer");


    useEffect(()=>{
      setVideoKey(trailer[0].key)
    },[])


  // useEffect(() => {
  //   if (trailer?.length > 0) {
  //     setVideoKey(trailer[0]?.key);
  //   } else {
  //     setVideoKey(null); // or handle the case where no trailer is found
  //   }
  // }, [trailer]);
  

  useEffect(() => {
    if(movieContainerRef.current){
      movieContainerRef.current.scrollTo({
      top:0,
      behavior: "smooth"
    })}

    window.scrollTo({
      top:0,
      behavior: "smooth"
    })}, [videoKey, activeCardIndex]);

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
      className="absolute  inset-0 pt-10 bg-[rgba(0,0,0,0.8)] z-[100] overflow-y-scroll"
      ref={movieContainerRef}
    >
      <div className="relative mx-auto w-[90vw] lg:w-[60vw] bg-[var(--black1-color)] h-[200vh] ">
        <span
          onClick={() => {
            navigate("/browse")
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
            src={`${videoKey ? `https://www.youtube.com/embed/${videoKey}` : {noImg}} `}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="scrollbar bg-[var(--primary-bg-color)]">
          {
            videos?.video?.map((video, index) => (
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
