import BrowserHeader from "../components/BrowserHeader";
import TrailerPlayingMainDisplay from "../components/TrailerPlayingMainDisplay";
import useAuthStateChange from "../hooks/useAuthStateChange";
import useNowPlaying from "../hooks/useNowPlaying";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  
   // hook constantly checking user loggedIn or not
   useAuthStateChange();

  //  loads all movies in Store
   useNowPlaying();

  
  return (
    <div className="w-screen relative">
      <BrowserHeader />
      {/* <TrailerPlayingMainDisplay /> */}
      
    </div>
  );
};

export default Browse;
