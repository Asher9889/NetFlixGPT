import { useEffect, useRef, useState } from "react";
import useGemini from "../hooks/useGemini";
import useGPTMovies from "../hooks/useGPTMovies";
import useGPTMoviesToTMDB from "../hooks/useGPTMoviesToTMDB";
import { addGPTDataToSlice } from "../utils/store/gptMoviesSlice";
import { useDispatch } from "react-redux";
import { changeLoading } from "../utils/store/appInfoSlice";


const GPTInputBox = () => {
  const [inputvalue, setInputvalue] = useState(null);

  const dispatch = useDispatch();
  const inputRef = useRef();

  // it will ask movie to GEMINI
  const data = useGemini(inputvalue);

  // now converting response in json along with & fetch movies from TMDB
  const res = useGPTMovies(data);

  // now fetching videos for each movies
  const movieVideos = useGPTMoviesToTMDB(res);

  function handleSearchClick() {
    if (inputRef.current.value === "") return;
    dispatch(changeLoading(true));
    console.log(inputRef.current.value);
    setInputvalue(inputRef.current.value);
  }

  function handleComingData() {
    console.log("This data going to put in store ", movieVideos);
    let gptMovies = [];
    if (res && movieVideos && res.length === movieVideos.length) {
      for (let i = 0; i < res.length; i++) {
        gptMovies.push({
          movie: res[i]?.results[0],
          video: movieVideos[i]?.results,
        });
      }
    }
    dispatch(addGPTDataToSlice(gptMovies));
  }

  useEffect(() => {
    handleComingData();
  }, [inputRef, handleSearchClick]);

  return (
    <div className="pt-[25%] md:pt-[10%]  flex flex-col items-center">
      <div className="w-[90%] md:w-[60%] lg:w-[50%]  flex flex-col md:flex-row gap-4 md:gap-2 justify-between rounded-lg py-4 px-6 md:p-12 bg-[rgba(0,0,0,0.8)]">
        <input
          ref={inputRef}
          className="flex-1 rounded-md px-4 py-2 text-lg md:text-xl"
          type="text"
          required
        />
        <button
          onClick={handleSearchClick}
          className="md:w-[20%] py-2 bg-[var(--red-color)] hover:bg-[var(--red2-color)] rounded-md font-netFlixRg text-xl text-white "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GPTInputBox;
