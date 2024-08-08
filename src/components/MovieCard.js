
const MovieCard = ({video, index, setVideoKey}) => {
  return (
    <div onClick={()=> {
        setVideoKey(video.key)
        console.log("clicked")
        }} className=" px-[4%] py-[5%] flex flex-row gap-4 text-white cursor-pointer">
      <div className="flex items-center text-lg font-bold text-white">
        {(index + 1)}
      </div>
      <div>
        <img className="w-40" src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}/>
      </div>
      <div className="text-xl font-netFlixBd">
        <p>{video.name}</p>
        <p>{video.type}</p>
      </div>

      
    </div>
  );
};

export default MovieCard;
