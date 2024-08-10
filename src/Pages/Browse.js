import { Outlet, useLocation } from "react-router-dom";
import BrowserHeader from "../components/BrowserHeader";
import TrailerPlayingMainDisplay from "../components/TrailerPlayingMainDisplay";
import TrailerPlayingSecondaryDisplay from "../components/TrailerPlayingSecondaryDisplay";
import useAuthStateChange from "../hooks/useAuthStateChange";
import { useEffect } from "react";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTrending from "../hooks/useTrending"
import useUpcoming from "../hooks/useUpcoming"
const Browse = () => {
  

  // hook constantly checking user loggedIn or not
  useAuthStateChange();



  // fetch now playing movies then particular video && combined all data
  useNowPlaying();

  // fetching data same for popular movies
  usePopular();

  // fetching trending movies and same as above
  useTrending();

  // fetching upcoming videos
  useUpcoming()

  const location = useLocation()
  const isOutletActive = location.pathname === "/browse";

  // console.log("isOutletActive :", isOutletActive)

  useEffect(()=>{
    if(isOutletActive){
      document.body.style.overflow = "auto"
    } else{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      document.body.style.overflow = "hidden"
    }

    // when unmounts body get it bydefault value
    return ()=>{
      document.body.style.overflow = "auto"
    }
  },[isOutletActive])

  return (
    <section className="w-full bg-black">
      <BrowserHeader />

      <TrailerPlayingMainDisplay />

      
      <Outlet />
      
     
      <TrailerPlayingSecondaryDisplay />
      
    </section>
  );
};

export default Browse;
