import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import BoxCorousalCard from "./BoxCorousalCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PiChatTeardropTextFill } from "react-icons/pi";

const BoxCorousal = () => {
  const [cardIndex, setCardIndex] = useState(null);
  const scrollRef = useRef();
  const cardRef = useRef();

  

  const popularMovies = useSelector(
    (store) => store.popularMovies?.popularMovies
  );



  function onMouseOverChangeCardIndex(index) {
    setCardIndex(index);
  }

  function onMouseOutChnageCardIndex() {
    setCardIndex(null);
    console.log("set null in index");
  }

  function handleRightScrollClick(){
    scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  }
  function handleLeftScrollClick(){
    scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  }

  return (
    <div className="relative   pt-[2%] ">
      <div onClick={handleLeftScrollClick} onMouseEnter={()=> cardRef.current.handleOnMouseLeave()} className="absolute z-20  left-0 bottom-[8px] w-[3.5%] h-[70%]  w-20 glass-effect cursor-pointer " >
        <span className="flex flex-row justify-center items-center w-full h-full">
          <MdOutlineKeyboardArrowLeft className="text-4xl text-white"/>
        </span>
      </div>
      <div>
        <h1 className="w-fit px-[4%] text-white font-netFlixMd text-[1.4rem] lg:text-[2rem]">
          Popular Movies
        </h1>
        <div ref={scrollRef} className="scrollbar  px-[4%]   flex flex-row gap-4 flex-nowrap overflow-x-scroll  pt-[4%] bg-yellow-900">
          {popularMovies &&
            popularMovies.map((movie, index) => (
              <BoxCorousalCard
              ref={cardRef}
                onMouseOutChnageCardIndex={onMouseOutChnageCardIndex}
                onMouseOverChangeCardIndex={() =>
                  onMouseOverChangeCardIndex(index)
                }
                movie={movie}
                index={index}
                cardIndex={cardIndex}
              />
            ))}
        </div>
      </div>
      <div onClick={handleRightScrollClick} className="absolute z-20  right-0 bottom-[8px] w-[3.5%] h-[70%]  w-20 glass-effect cursor-pointer " >
        <span className="flex flex-row justify-center items-center w-full h-full">
          <MdOutlineKeyboardArrowRight className="text-4xl text-white"/>
        </span>
      </div>
    </div>
  );
};

export default BoxCorousal;
