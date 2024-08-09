import { useSelector } from "react-redux";
import Top10Corousal from "./Top10Corousal";
import { dataBinding } from "../utils/algoForDataBinding";

import BoxCorousal from "./BoxCorousal";



const TrailerPlayingSecondaryDisplay = () => {
  const movies = useSelector((store) => store.top10Movies?.top10Movies);

  // Data Binding for Top 10 Movies
  let dataArray;
  if (movies.length > 0) {
    dataArray = dataBinding(movies);
  }

   // Now Playing movies from movies slice;
   const nowPlayingMovies = useSelector((store)=> store.movies?.movies)


  // Popular movies
  const popularMovies = useSelector(
    (store) => store.popularMovies?.popularMovies
  );

 
  return (
    <div className="w-full relative bg-black top-0 lg:-top-[25vh]">
      
      <Top10Corousal dataArray={dataArray} />
     
      {/* Now Playng Slice Data */}
      {/* <BoxCorousal movieData={nowPlayingMovies}/> */}

      {/* Popular Movies Slice Data*/}
      <BoxCorousal  moviesData={popularMovies}/>

        
     
    </div>
  );
};

export default TrailerPlayingSecondaryDisplay;
