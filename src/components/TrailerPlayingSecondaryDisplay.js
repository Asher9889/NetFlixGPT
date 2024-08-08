import { useSelector } from "react-redux";
import Top10Corousal from "./Top10Corousal";
import { dataBinding } from "../utils/algoForDataBinding";
import BoxCorousal from "./BoxCorousal";
import usePopularMovie from "../hooks/usePopularMovie";

const TrailerPlayingSecondaryDisplay = () => {
  const movies = useSelector((store) => store.top10Movies?.top10Movies);

  // Data Binding for Top 10 Movies
  let dataArray;
  if (movies.length > 0) {
    dataArray = dataBinding(movies);
  }

  // fetch Popular movie and update in store
  usePopularMovie();

  return (
    <div className="w-full relative bg-black top-0 lg:-top-[25vh]">
      
        <Top10Corousal dataArray={dataArray} />
     
    
        <BoxCorousal />
        
     
    </div>
  );
};

export default TrailerPlayingSecondaryDisplay;
