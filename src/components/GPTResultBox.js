import { useSelector } from "react-redux";
import { IMDB_IMG_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const GPTResultBox = () => {
  const navigate = useNavigate()
  const movies = useSelector((store) => store.gptMovies?.gptMovieData);
  console.log(movies);
  const type = "askgpt"

  function handleMovieClick(index){
    navigate(`/askgpt/${type}/video/${index}`)
  }

  return (
    <div className="w-full flex justify-center px-[4%]  mt-[5%] bg-[rgba(0,0,0,0.8)] pb-20">
      <div className="w-[100%] pt-4">
        <div className="flex flex-row flex-wrap justify-center gap-4">{movies &&
          movies.map((movie, index) => (
            
              <img
                onClick={()=>handleMovieClick(index)}
                key={index}
                className="h-[200px] lg:h-[300px] rounded-md shrink-0 cursor-pointer"
                src={`${IMDB_IMG_URL}${movie.movie?.poster_path || movie.movie?.backdrop_path}`}
                alt="moviePhoto"
              />
           
          ))}
          </div>
      </div>
    </div>
  );
};

export default GPTResultBox;
