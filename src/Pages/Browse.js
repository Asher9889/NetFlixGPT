import { Outlet, useLocation, useParams } from "react-router-dom";
import BrowserHeader from "../components/BrowserHeader";
import TrailerPlayingMainDisplay from "../components/TrailerPlayingMainDisplay";
import TrailerPlayingSecondaryDisplay from "../components/TrailerPlayingSecondaryDisplay";
import useAuthStateChange from "../hooks/useAuthStateChange";
import useNowPlaying from "../hooks/useNowPlaying";
import useTop10Movie from "../hooks/useTop10Movie";
import usePopularMovie from "../hooks/usePopularMovie";
import { useEffect } from "react";

const Browse = () => {
  // hook constantly checking user loggedIn or not
  useAuthStateChange();

  //  loads all movies in Store
  useNowPlaying();
  

  // loads top 10 trending movie in store
  useTop10Movie();

  // fetch Popular movie and update in store
  usePopularMovie();

  const location = useLocation()
  const isOutletActive = location.pathname === "/browse";

  console.log("isOutletActive :", isOutletActive)

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
    <section className="w-full">
      <BrowserHeader />

      <TrailerPlayingMainDisplay />

      
        <Outlet />
      
     
      <TrailerPlayingSecondaryDisplay />
      
    </section>
  );
};

export default Browse;
