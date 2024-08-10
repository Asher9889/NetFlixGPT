import { useSelector } from "react-redux";
import Top10Corousal from "./Top10Corousal";
import { dataBinding } from "../utils/algoForDataBinding";
import BoxCorousal from "./BoxCorousal";



const TrailerPlayingSecondaryDisplay = () => {
  const nowPlayingMovies = useSelector((store) => store.nowPlaying?.nowPlayingMovies);
  const top10Movies = nowPlayingMovies?.slice(0,10)
  // Data Binding for Top 10 Movies
  let dataArray;
  if (top10Movies.length > 0) {
    dataArray = dataBinding(top10Movies);
  }

  // Now Playing movies from movies slice;
  //  const nowPlayingMovies = useSelector((store)=> store.nowPlaying?.nowPlayingMovies)


  // Popular movies
  const popularMovies = useSelector(
    (store) => store.popularMovies?.popularMovies
  );

 
  return (
    <div className="w-full relative bg-black top-0 lg:-top-[25vh]">
      
      <Top10Corousal dataArray={dataArray} />
     
      {/* Now Playing Slice Data */}
      <BoxCorousal 
        headingName="Now Playing"
        moviesData={nowPlayingMovies} 
        storeLocation="nowPlaying.nowPlayingMoviesVideos"
      />

      {/* Popular Movies Slice Data*/}
      {/* <BoxCorousal 
        headingName="Popular" 
        moviesVideosData={usePopularMoviesVideos}  
        moviesData={popularMovies} 
        storeLocation="popularMovies.popularMoviesVideos"
      /> */}

        
     
    </div>
  );
};

export default TrailerPlayingSecondaryDisplay;
