import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../assests/signInBg.jpg";
import { IMDB_IMG_URL } from "../utils/constant";
import { FaPlay } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoIosThumbsUp } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import dayjs from "dayjs";
import ReactPlayer from "react-player";

const BoxCorousalCard = forwardRef(({
  cardIndex,
  movie,
  index,
  onMouseOverChangeCardIndex,
  onMouseOutChnageCardIndex,
},ref)=> {

  const childRef = useRef()
    const [showDetails, setShowDetails] = useState(false);
    const [isVideoActive, setIsVideoActive] = useState(false);


    useImperativeHandle(ref, ()=>(
      {
      handleOnMouseLeave
      }
    ))
  
  
  
    let imgUrl = IMDB_IMG_URL + movie.poster_path;
    let backdropUrl = IMDB_IMG_URL + movie.backdrop_path;
    let videoUrl = movie.original_title;
  
    const timer = useRef(null);
    const videoTimer = useRef(null);
  
  
    function detectMob() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ];
  
      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    }
  
    function handleOnMouseEnter() {
  
      onMouseOverChangeCardIndex();
      // setIsHoverActive(true)
      timer.current = setTimeout(() => {
        setShowDetails(true)
        // console.log("show details :", true)
      }, 1000);
      videoTimer.current = setTimeout(()=> {
        setIsVideoActive(true)
        // console.log("Show video : ", true)
      }, 2000)
    }
    
    function handleOnMouseLeave() {
      
      console.log("Mouse Leave")
      setIsVideoActive(false);
      setShowDetails(false);
      onMouseOutChnageCardIndex();
      // setIsHoverActive(false);
      clearTimeout(timer.current);
      clearTimeout(videoTimer.current)
    }
  
    return (
      <div
        
        className="relative shrink-0 bg-red-900">
        <div 
          onMouseEnter={handleOnMouseEnter}
          
        
          className="shrink-0  h-auto cursor-pointer ">
          <LazyLoadImage
            className="h-full w-40 lg:w-52 object-cover rounded-md"
            src={imgUrl} // use normal <img> attributes as props
            // width={image.width}
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
              className={`absolute inset-0 -left-6 flex  w-72  z-50  flex flex-col gap-2  bg-zinc-900 text-white font-netFlixMd`}
            >
              <div>
                {!isVideoActive ? 
                <img
                className="w-72 object-cover"
                src={backdropUrl}
                alt="video image"
                /> : 
                <iframe 
                // width="100%"
                  className="w-full"
                  src="https://www.youtube.com/embed/tQ3Aahb_PDE" 
                  loading="lazy"
                  title="YouTube video player" frameborder="0" allow="autoplay" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                    <FaChevronDown />
                  </span>
                </div>
                <div>
                  <h1>{movie.original_title}</h1>
                  <h1 className="text-lg font-netFlixMd">
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
  
});

export default BoxCorousalCard;
