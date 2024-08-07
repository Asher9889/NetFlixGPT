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
    <section className="w-full h-auto relative">
      <header className="relative z-20">
        <BrowserHeader />
      </header>

      <main className="w-full    absolute top-0  overflow-hidden mb-6">
        <TrailerPlayingMainDisplay />
        <section className="w-full relative z-20 top-[5vh] lg:-top-[28vh] ">
          
          <TrailerPlayingSecondaryDisplay />
        </section>
        
      </main>
      
    </section>
  );
};

export default Browse;
