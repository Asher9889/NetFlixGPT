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
    <div className="w-full relative  bg-red-800 ">
      <div className="relative z-20">
        <BrowserHeader />
      </div>

      <div className="w-full z-20  absolute top-0  bg-blue-800 overflow-hidden">
        <TrailerPlayingMainDisplay />
      </div>
      <div className="w-full h-[30vh] top-[50vh] xs:top-[30vh] sm:top-[50vh] md:top-[60vh] lg:top-[80vh]  relative z-20 bottom-0  bg-green-800">
        <TrailerPlayingSecondaryDisplay />
      </div>
    </div>
  );
};

export default Browse;
