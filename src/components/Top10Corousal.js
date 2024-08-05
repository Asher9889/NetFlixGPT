import svg1 from "../assests/1.svg";
import React from "react";
import SVG from "react-inlinesvg";

const Top10Corousal = ({svg, poster_path}) => {
  const mysvg = "svg1";

  return (

      <div className="flex w-96 flex-row  items-bottom bg-red-500">
        <SVG
          src={svg}
          height={170}
          width={250}
          title="React"
        />
        <img className="h-[170px] -ml-2" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  />
      </div>
  );
};

export default Top10Corousal;
