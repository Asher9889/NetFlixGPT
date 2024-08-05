import BrowserHeader from "../components/BrowserHeader";
import TrailerPlayingMainDisplay from "../components/TrailerPlayingMainDisplay";
import TrailerPlayingSecondaryDisplay from "../components/TrailerPlayingSecondaryDisplay";
import useAuthStateChange from "../hooks/useAuthStateChange";
import useNowPlaying from "../hooks/useNowPlaying";

const Browse = () => {
  // hook constantly checking user loggedIn or not
  useAuthStateChange();

  //  loads all movies in Store
  useNowPlaying();

  return (
    <div className="w-full h-[200vh] relative overflow-x-hidden">
      <div className="relative z-20">
        <BrowserHeader />
      </div>

      <div className="w-full absolute top-0  bg-blue-800 overflow-hidden">
        <TrailerPlayingMainDisplay />
      </div>
      <div className="w-full h-[100vh] absolute bottom-0  bg-green-800 overflow-hidden">
        <TrailerPlayingSecondaryDisplay />
      </div>
    </div>
  );
};

export default Browse;
