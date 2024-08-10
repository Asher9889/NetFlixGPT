import { useDispatch } from "react-redux";
import { addvideoListHeight } from "../utils/store/appInfoSlice";

const MovieCard = ({video, index, setVideoKey, activeCardIndex, setActiveCardIndex}) => {
  const dispatch = useDispatch()


  return (
    <div onClick={()=> {
        setVideoKey(video.key)
        setActiveCardIndex()
        dispatch(addvideoListHeight(window.screenY))
        }} className={` ${activeCardIndex === index ? "bg-zinc-600" : ""} px-[4%] py-[5%] flex flex-row gap-4 text-white cursor-pointer`}>
      
      <div className="flex items-center text-lg font-bold text-white">
        {(index + 1)}
      </div>
      <div>
        <img className="w-40 aspect-video" src={`https://img.youtube.com/vi/${video?.key}/maxresdefault.jpg`} alt="movie-card"/>
      </div>
      <div className=" font-netFlixBd">
        <p className="md:hidden text-sm">{(video?.name?.substring(0,20))}...</p>
        <p className="hidden md:block md:text-lg">{(video?.name)}</p>
        <p>{video?.type}</p>
      </div>
     
      
    </div>
  );
};

export default MovieCard;
