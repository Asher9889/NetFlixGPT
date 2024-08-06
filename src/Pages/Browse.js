import BrowserHeader from "../components/BrowserHeader";
import TrailerPlayingMainDisplay from "../components/TrailerPlayingMainDisplay";
import TrailerPlayingSecondaryDisplay from "../components/TrailerPlayingSecondaryDisplay";
import useAuthStateChange from "../hooks/useAuthStateChange";
import useNowPlaying from "../hooks/useNowPlaying";
import useTop10Movie from "../hooks/useTop10Movie";


const Browse = () => {
  // hook constantly checking user loggedIn or not
  useAuthStateChange();



  //  loads all movies in Store
  useNowPlaying();

  // loads top 10 trending movie in store
  useTop10Movie();



  return (
    <div className="w-full h-auto relative bg-zinc-900">
      <div className="relative z-20">
        <BrowserHeader />
      </div>

      <div className="w-full    absolute top-0  overflow-hidden bg-black pb-16">
        <TrailerPlayingMainDisplay />
        <div className="w-full relative z-20 top-[5vh] lg:-top-[24vh]  lg:-bottom-4  bg-gradient-b from-zinc-900 ">
          
          <TrailerPlayingSecondaryDisplay />
        </div>
        
      </div>
      
    </div>
  );
};

export default Browse;
