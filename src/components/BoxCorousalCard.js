/* eslint-disable */

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMDB_IMG_URL } from "../utils/constant";
import { FaPlay } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoIosThumbsUp } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addWindowHeight } from "../utils/store/appInfoSlice";
import { useNavigate } from "react-router-dom";
import useIsMobileOrdesktop from "../hooks/useIsMobileOrDesktop";

const BoxCorousalCard = forwardRef(
  (
    {
      cardIndex,
      movie,
      index,
      onMouseOverChangeCardIndex,
      onMouseOutChnageCardIndex,
      headingName,
    },
    ref
  ) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const timer = useRef(null);
    const videoTimer = useRef(null);

    const [showDetails, setShowDetails] = useState(false);
    const [isVideoActive, setIsVideoActive] = useState(false);

    // checking mobile or desktop
    const isMobile = useIsMobileOrdesktop();

    // subscribing store
    // const videos = useSelector(
    //   (store) => store && store.popularMovies?.popularMoviesVideos[index]
    // );

    // used lodash library to access path otherwise it will search storeLocation
    // inside store object

    // for optimising redux

    // const selectVideos = createSelector(
    //     [(state, index) => get(state, `${storeLocation}[${index}]`, [])],
    //     (videos) => videos
    // );

    // const videos = useSelector((state) => selectVideos(state, index));

    const trailer = movie?.video?.filter((video) => video.type === "Trailer");

    useImperativeHandle(ref, () => ({
      handleOnMouseLeave,
    }));

    let imgUrl = IMDB_IMG_URL + movie.poster_path;
    let backdropUrl = IMDB_IMG_URL + movie.backdrop_path;
    const type = headingName?.toLowerCase();

    const handleOnMouseEnter = () => {
      if (isMobile === "Mobile") return;
      setShowDetails(false);
      setIsVideoActive(false);
      clearTimeout(timer.current);
      clearTimeout(videoTimer.current);
      onMouseOverChangeCardIndex();
      timer.current = setTimeout(() => {
        setShowDetails(true);
      }, 1000);
      videoTimer.current = setTimeout(() => {
        setIsVideoActive(true);
      }, 2000);
    };

    const handleOnMouseLeave = () => {
      if (isMobile === "Mobile") return;
      setIsVideoActive(false);
      setShowDetails(false);
      onMouseOutChnageCardIndex();
      clearTimeout(timer.current);
      clearTimeout(videoTimer.current);
    };

    function handlePopCardClick() {
      if (isMobile === "Mobile") return;

      handleOnMouseLeave();
      dispatch(addWindowHeight(window.scrollY));
      navigate(`/browse/${type}/video/${index}`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    function handleCardClick() {
      if (isMobile === "Desktop") return;
      dispatch(addWindowHeight(window.scrollY));
      navigate(`/browse/${type}/video/${index}`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

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
              className={`absolute top-8 -left-10  h-72  z-[100]  flex flex-col gap-2  bg-zinc-900 text-white font-netFlixMd drop-shadow-xl rounded-md overflow-hidden`}
            >
              <div>
                {
                  !isVideoActive ? (
                    <img className="w-72 object-cover" src={backdropUrl} />
                  ) : (
                    <iframe
                      // width="100%"
                      className="w-full"
                      src={`https://www.youtube.com/embed/${trailer[0]?.key}`}
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
                  <div className="relative box">
                    <span
                      onClick={handlePopCardClick}
                      className=" flex justify-center items-center h-8 w-8  p-0 rounded-full text-white border-[2px] border-zinc-500 text-lg cursor-pointer hover:text-xl hover:bg-zinc-800"
                    >
                      <FaChevronDown />
                    </span>
                    <span className="tooltip absolute -bottom-[80%] right-[8%] ">
                      <p className="text-xs px-2 py-[2px] rounded-md border-zinc-800 border-[1px] font-netFlixRg  text-zinc-500  hidden">
                        More
                      </p>
                    </span>
                  </div>
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
