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
  // trending movies
  const trendingMovies = useSelector((store)=> store.trendingMovies?.trendingMovies)
 

  // Subscribing upcoming movie store
  const upcomingMovies = useSelector((store)=> store.upcomingMovies?.upcomingMovies)
  
  
  
  return (
    <div className="w-full relative bg-black top-0 lg:-top-[25vh]">
      
      <Top10Corousal dataArray={dataArray} />
     
      {/* Now Playing Slice Data */}
      <BoxCorousal 
        headingName="Now Playing"
        moviesData={nowPlayingMovies} 
      />

      {/* Popular Movies Slice Data*/}
      <BoxCorousal 
        headingName="Popular" 
        moviesData={popularMovies} 
      />

      {/* trending movies Slice */}
      <BoxCorousal 
        headingName="Trending" 
        moviesData={trendingMovies} 
      />

      {/* upcoming movies Slice */}
      <BoxCorousal 
        headingName="Upcoming" 
        moviesData={upcomingMovies} 
      />

        
     
    </div>
  );
};

export default TrailerPlayingSecondaryDisplay;
