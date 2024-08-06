import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../assests/signInBg.jpg";
import { IMDB_IMG_URL } from "../utils/constant";
import { FaPlay } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoIosThumbsUp } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";

const BoxCorousal = ({
  cardIndex,
  movie,
  index,
  onMouseOverChangeCardIndex,
  onMouseOutChnageCardIndex,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHoverActive, setIsHoverActive] = useState(false);

  let imgUrl = IMDB_IMG_URL + movie.poster_path;
  let backdropUrl = IMDB_IMG_URL + movie.backdrop_path;
  let name = movie.original_title;

  const timer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timer.current); // Cleanup timer on component unmount
  }, []);

  function handleOnMouseEnter() {
    onMouseOverChangeCardIndex();
    // setIsHoverActive(true)
    timer.current = setTimeout(() => setShowDetails(true), 500);
  }
  function handleOnMouseLeave() {
    onMouseOutChnageCardIndex();
    // setIsHoverActive(false);
    clearTimeout(timer.current);
    setShowDetails(false);
  }

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className="relative shrink-0"
    >
      <div className="shrink-0  bg-red-500 h-auto">
        <LazyLoadImage
          className="h-full w-52 object-cover rounded-md"
          src={imgUrl} // use normal <img> attributes as props
          // width={image.width}
        />
        {/* <span>{image.caption}</span> */}
      </div>
      <AnimatePresence>
        {showDetails && cardIndex == +index && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
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
            className={`absolute inset-0 flex  w-72 z-30  flex flex-col gap-2  bg-zinc-900 text-white font-netFlixMd`}
          >
            <div>
              <img
                className="w-72 object-cover"
                src={backdropUrl}
                alt="video image"
              />
            </div>
            <div className="flex flex-col p-[2%] px-[4%]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row   gap-2">
                  <span className=" flex justify-center items-center bg-white h-8 w-8  p-0 rounded-full text-black">
                    <FaPlay />
                  </span>
                  <span className=" flex justify-center items-center h-8 w-8  p-0 rounded-full text-white border-[2px] border-zinc-500 text-xl">
                    <LuPlus />
                  </span>
                  <span className=" flex justify-center items-center h-8 w-8  p-0 rounded-full text-white border-[2px] border-zinc-500 text-xl">
                    <IoIosThumbsUp />
                  </span>
                </div>

                <span className=" flex justify-center items-center h-8 w-8  p-0 rounded-full text-white border-[2px] border-zinc-500 text-xl">
                  <FaChevronDown />
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoxCorousal;
