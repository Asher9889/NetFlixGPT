
import React from "react";
import SVG from "react-inlinesvg";

const Top10Corousal = ({svg, poster_path}) => {

  return (

      <div className="flex w-[350px] h-30 lg:w-96 flex-row  items-bottom cursor-pointer">
        <SVG
          src={svg}
          className=" w-[170px] lg:h-[170px] lg:w-[250px]"
       
          title="React"
        />
        <img className="w-[100px] lg:h-[170px] -ml-2 object-cover" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  />
      </div>
  );
};

export default Top10Corousal;
