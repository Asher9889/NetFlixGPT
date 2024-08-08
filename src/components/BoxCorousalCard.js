import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../assests/signInBg.jpg";
import { IMDB_IMG_URL } from "../utils/constant";
import { FaPlay } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoIosThumbsUp } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import dayjs from "dayjs";
import usePopularMovieVideo from "../hooks/usePopularMovieVideo";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BoxCorousalCard = forwardRef((
    {
      cardIndex,
      movie,
      index,
      onMouseOverChangeCardIndex,
      onMouseOutChnageCardIndex,
    },ref) => {

    const navigate = useNavigate();
    const childRef = useRef();

    const [showDetails, setShowDetails] = useState(false);
    const [isVideoActive, setIsVideoActive] = useState(false);
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    // addind card videos into store
    usePopularMovieVideo(movie.id);

    // subscribing store
    const videos = useSelector(
      (store) => store.popularMovies?.popularMoviesVideos[index]
    );
    const trailer = videos?.filter((video) => (video.type === "Trailer"));

   

    useImperativeHandle(ref, () => ({
      handleOnMouseLeave,
    }));

    let imgUrl = IMDB_IMG_URL + movie.poster_path;
    let backdropUrl = IMDB_IMG_URL + movie.backdrop_path;
    let movieID = console.log(movie.id);

    const timer = useRef(null);
    const videoTimer = useRef(null);

    let isMobile;
    useEffect(()=>{
      isMobile = isMobileDevice();
    }, [])
    console.log(isMobile)
    // checking device is mobile or other
    function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
  }

    const handleOnMouseEnter = useCallback(() => {
      if(!isMobile) return;
      setShowDetails(false);
      setIsVideoActive(false);
      clearTimeout(timer.current);
      clearTimeout(videoTimer.current);
      onMouseOverChangeCardIndex();
      // setIsHoverActive(true)
      timer.current = setTimeout(() => {
        setShowDetails(true);
        // console.log("show details :", true)
      }, 1000);
      videoTimer.current = setTimeout(() => {
        setIsVideoActive(true);
        // console.log("Show video : ", true)
      }, 2000);
    }, [onMouseOverChangeCardIndex]);

    const handleOnMouseLeave = useCallback(() => {
      if(!isMobile) return;
      setIsVideoActive(false);
      setShowDetails(false);
      onMouseOutChnageCardIndex();
      clearTimeout(timer.current);
      clearTimeout(videoTimer.current);
      console.log("Mouse Leave");
      // setIsHoverActive(false);
    }, [onMouseOverChangeCardIndex]);

    function handleCardClick(){
      navigate(`/browse/video/${index}`)
    }
    // console.log(videos)
    return (
      <div onClick={handleCardClick} className="relative shrink-0  py-6 ">
        <div
          className="shrink-0  h-auto cursor-pointer"
          onMouseEnter={handleOnMouseEnter}
        >
          <LazyLoadImage
            className="h-full w-40 lg:w-52 object-cover rounded-md"
            src={imgUrl}
          />
          {/* <span>{image.caption}</span> */}
        </div>
        <AnimatePresence>
          {showDetails && cardIndex === index && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
                opacity: {
                  duration: 0.3,
                },
              }}
              onMouseLeave={handleOnMouseLeave}
              className={`absolute top-8 -left-10 flex  h-72  z-[100]  flex flex-col gap-2  bg-zinc-900 text-white font-netFlixMd drop-shadow-xl rounded-md`}
            >
              <div>
                {
                  !isVideoActive ? (
                    <img
                      className="w-72 object-cover"
                      src={backdropUrl}
                      alt="video image"
                    />
                  ) : (
                    <iframe
                      // width="100%"
                      className="w-full"
                      src={`https://www.youtube.com/embed/${trailer[0].key}`}
                      loading="lazy"
                      title="YouTube video player"
                      frameborder="0"
                      allow="autoplay"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  )
                  // <iframe width="100%"  src="https://www.youtube.com/watch?tQ3Aahb_PDE" title="YouTube video player" frameborder="0" allow=" autoplay;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                }
              </div>
              <div className="flex flex-col h-48 gap-2 p-[2%] px-[4%]">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row   gap-2">
                    <span className=" flex justify-center items-center bg-white h-8 w-8  p-0 rounded-full text-black cursor-pointer">
                      <FaPlay />
                    </span>
                    <span className=" flex justify-center items-center h-8 w-8  p-0 rounded-full text-white border-[2px] border-zinc-500 text-xl cursor-pointer">
                      <LuPlus />
                    </span>
                    <span className=" flex justify-center items-center h-8 w-8  p-0 rounded-full text-white border-[2px] border-zinc-500 text-xl cursor-pointer">
                      <IoIosThumbsUp />
                    </span>
                  </div>

                  <span className=" flex justify-center items-center h-8 w-8  p-0 rounded-full text-white border-[2px] border-zinc-500 text-xl cursor-pointer">
                    <Link to={`/browse/video/${index}`}>
                      <FaChevronDown />
                    </Link>
                  </span>
                </div>
                <div>
                  <h1>{movie.original_title}</h1>
                  <h1 className="text-md font-netFlixMd">
                    Release Date:{" "}
                    {dayjs(movie?.release_date).format("DD-MMM-YYYY")}
                  </h1>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export default BoxCorousalCard;
