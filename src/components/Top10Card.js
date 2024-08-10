import React from "react";
import SVG from "react-inlinesvg";

const Top10Card = ({ svg, poster_path }) => {
  return (
    
      

      <div className="relative  shrink-0 flex flex-row  items-bottom ">
        <SVG
          src={svg}
          className="h-[180px] w-[100px] lg:h-[200px] lg:w-[200px]"
          title="React"
        />
        <img
          className="h-[180px] lg:-ml-6 lg:h-[200px] object-cover  cursor-pointer"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="img"
        />
      </div>
   
  );
};

export default Top10Card;
