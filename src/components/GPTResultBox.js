import { useSelector } from "react-redux";
import { IMDB_IMG_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const GPTResultBox = () => {
  const navigate = useNavigate();
  const movies = useSelector((store) => store.gptMovies?.gptMovieData);
  const showLoading = useSelector((store) => store.appInfo.loading);
  // console.log(movies);
  const type = "askgpt";

  function handleMovieClick(index) {
    navigate(`/askgpt/${type}/video/${index}`);
  }

  return (<>
  <div className="w-full flex justify-center relative  bottom-0  mt-[5%] ">
  {showLoading ? <div className="w-full h-full flex justify-center pt-20">
    <div className="loader"></div>
  </div> :  <div className="w-[100%]  ">
        <div className="flex px-[4%] flex-row flex-wrap justify-center gap-4 pt-8 pb-20 ">
         { movies?.map((movie, index) => (
          <img
            onClick={() => handleMovieClick(index)}
            key={index}
            className="h-[200px] lg:h-[300px] rounded-md shrink-0 cursor-pointer drop-shadow-xl"
            src={`${IMDB_IMG_URL}${
              movie.movie?.poster_path || movie.movie?.backdrop_path
            }`}
            alt="moviePhoto"
          />
          ))}
        </div>
      </div>}
    </div>
    </>
  );
};

export default GPTResultBox;
