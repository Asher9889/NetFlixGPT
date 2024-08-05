import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../assests/signInBg.jpg";
import { IMDB_IMG_URL } from "../utils/constant";

const BoxCorousal = ({ movie }) => {


  let imgUrl = IMDB_IMG_URL + movie.poster_path;

  console.log(imgUrl);
  return (
    <div className="shrink-0 h-64">
      <LazyLoadImage
        className="h-full object-cover rounded-md "
        src={imgUrl} // use normal <img> attributes as props
        // width={image.width}
      />
      {/* <span>{image.caption}</span> */}
    </div>
  );
};

export default BoxCorousal;
