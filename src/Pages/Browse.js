import { Outlet } from "react-router-dom";
import BrowserHeader from "../components/BrowserHeader";
import TrailerPlayingMainDisplay from "../components/TrailerPlayingMainDisplay";
import TrailerPlayingSecondaryDisplay from "../components/TrailerPlayingSecondaryDisplay";
import useAuthStateChange from "../hooks/useAuthStateChange";
import useNowPlaying from "../hooks/useNowPlaying";
import useTop10Movie from "../hooks/useTop10Movie";
import usePopularMovie from "../hooks/usePopularMovie";

const Browse = () => {
  // hook constantly checking user loggedIn or not
  useAuthStateChange();

  //  loads all movies in Store
  useNowPlaying();
  

  // loads top 10 trending movie in store
  useTop10Movie();

  // fetch Popular movie and update in store
  usePopularMovie();

  // 

  return (
    <section className="w-full">
      <BrowserHeader />

      <TrailerPlayingMainDisplay />

      <Outlet />
     
      <TrailerPlayingSecondaryDisplay />
      
    </section>
  );
};

export default Browse;
