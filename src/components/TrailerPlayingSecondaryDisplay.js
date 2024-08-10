import { useSelector } from "react-redux";
import Top10Corousal from "./Top10Corousal";
import { dataBinding } from "../utils/algoForDataBinding";
import usePopularMoviesVideos from "../hooks/usePopularMoviesVideos";
import BoxCorousal from "./BoxCorousal";
import useNowPlayingVideos from "../hooks/useNowPlayingVideos";


const TrailerPlayingSecondaryDisplay = () => {
  const movies = useSelector((store) => store.top10Movies?.top10Movies);

  // Data Binding for Top 10 Movies
  let dataArray;
  if (movies.length > 0) {
    dataArray = dataBinding(movies);
  }

  // Now Playing movies from movies slice;
   const nowPlayingMovies = useSelector((store)=> store.nowPlaying?.nowPlayingMovies)


  // Popular movies
  const popularMovies = useSelector(
    (store) => store.popularMovies?.popularMovies
  );

 
  return (
    <div className="w-full relative bg-black top-0 lg:-top-[25vh]">
      
      <Top10Corousal dataArray={dataArray} />
     
      {/* Now Playng Slice Data */}
      <BoxCorousal headingName="Now Playing" moviesVideosData={useNowPlayingVideos} moviesData={nowPlayingMovies} storeLocation="nowPlaying.nowPlayingMoviesVideos"/>

      {/* Popular Movies Slice Data*/}
      <BoxCorousal headingName="Popular" moviesVideosData={usePopularMoviesVideos}  moviesData={popularMovies} storeLocation="popularMovies.popularMoviesVideos"/>

        
     
    </div>
  );
};

export default TrailerPlayingSecondaryDisplay;
