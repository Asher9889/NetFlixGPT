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
    <div className="w-screen relative bg-red-500">
      <div className="relative z-10">
        <BrowserHeader />
      </div>

      <div className="w-full h-[100vh] absolute top-0 overflow-x-hidden ">
        <TrailerPlayingMainDisplay />
        <TrailerPlayingSecondaryDisplay />

      </div>
      
    </div>
  );
};

export default Browse;
