import React, { useEffect, useRef, useState } from "react";
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
    // console.log("set null in index");
  }

  function handleRightScrollClick() {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  }
  function handleLeftScrollClick() {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  }

  return (
    <div className="relative py-10">
      <div >
        <h1 className="w-fit px-[4%] text-white font-netFlixMd text-[1.4rem] lg:text-[2rem]">
          Popular Movies
        </h1>
        <div
          ref={scrollRef}
          className="scrollbar h-fit  px-[4%]   flex flex-row gap-4 flex-nowrap overflow-x-scroll"
        >
          <div
            onClick={handleLeftScrollClick}
            onMouseEnter={() => cardRef.current.handleOnMouseLeave()}
            className="hidden lg:block absolute z-20  left-0  w-[4%]  h-[70%]  glass-effect cursor-pointer"
          >
            <span className="flex flex-row justify-center items-center w-full h-full">
              <MdOutlineKeyboardArrowLeft className="text-4xl hover:text-5xl text-white" />
            </span>
          </div>
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
          <div
            onClick={handleRightScrollClick}
            onMouseEnter={() => cardRef.current.handleOnMouseLeave()}
            className="hidden lg:block absolute z-20  right-0  w-[4%] h-[70%] cursor-pointer glass-effect"
          >
            <span className="flex flex-row justify-center w-full h-full items-center">
              <MdOutlineKeyboardArrowRight className="text-4xl hover:text-5xl text-white" />
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BoxCorousal;
