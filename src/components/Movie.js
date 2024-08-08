import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Movie = () => {
  const [videoKey, setVideoKey] = useState()

  const navigate = useNavigate();
  const {index} = useParams();
  const videos = useSelector(
    (store) => store.popularMovies?.popularMoviesVideos[index]
  );

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[videoKey])
  // console.log("videos is", videos)



  return (
    <div className="absolute h-fit inset-0 pt-10 bg-[rgba(0,0,0,0.8)] z-[100] overflow-y-scroll scrollbar">
      <div className="relative mx-auto w-[60vw] bg-[var(--black1-color)] h-[200vh] ">
      <span onClick={()=> navigate("/browse")} className="absolute h-10 w-10 right-0 top-0 p-2 hover:text-3xl rounded-full bg-zinc-600 hover:bg-zinc-800 text-white flex justify-center items-center cursor-pointer">
        <IoMdClose />
      </span>
        <div className="w-full aspect-video ">
          <iframe
            width="100%"
            className=""
            height="100%"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          {videos && videos.map((video, index)=> (

          <MovieCard key={video.id} video={video} index={index} setVideoKey={setVideoKey}/>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Movie;
