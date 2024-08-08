import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion} from "framer-motion";

const Movie = () => {
  const [videoKey, setVideoKey] = useState();

  const navigate = useNavigate();
  const { index } = useParams();
  const videos = useSelector(
    (store) => store.popularMovies?.popularMoviesVideos[index]
  );
  const trailer = videos?.filter((video) => video.type === "Trailer");
  useEffect(() => {
    setVideoKey(trailer[0].key);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [videoKey, setVideoKey]);
  // console.log("videos is", videos)

  // Framer Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.2, ease: "easeIn" } }
  };
  return (
    <motion.div
    variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
     className="absolute xs:h-[90vh] lg:h-fit inset-0 pt-10 bg-[rgba(0,0,0,0.8)] z-[100] overflow-y-scroll scrollbar">
      <div className="relative mx-auto w-[90vw] lg:w-[60vw] bg-[var(--black1-color)] h-[200vh] ">
        <span
          onClick={() => navigate("/browse")}
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
        <div className="overflow-y-scroll scrollbar bg-[var(--primary-bg-color)]">
          {videos &&
            videos.map((video, index) => (
              <MovieCard
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
