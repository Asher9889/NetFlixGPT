import { useDispatch } from "react-redux";
import { addWindowHeight, removeAddMoviesVideos } from "../utils/store/appInfoSlice";
import { useEffect } from "react";

const MovieCard = ({video, index, setVideoKey, activeCardIndex, setActiveCardIndex}) => {

  const dispatch = useDispatch()

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  },[activeCardIndex])

  
  return (
    <div onClick={()=> {
        setVideoKey(video.key)
        setActiveCardIndex()
        dispatch(addWindowHeight(window.scrollY))
        }} className={` ${activeCardIndex === index ? "bg-zinc-600" : ""} px-[4%] py-[5%] flex flex-row gap-4 text-white cursor-pointer`}>
      
      <div className="flex items-center text-lg font-bold text-white">
        {(index + 1)}
      </div>
      <div>
        <img className="w-40 aspect-video" src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}/>
      </div>
      <div className="text-xl font-netFlixBd">
        <p>{(video.name?.substring(0,12))}...</p>
        <p>{video.type}</p>
      </div>
     
      
    </div>
  );
};

export default MovieCard;
