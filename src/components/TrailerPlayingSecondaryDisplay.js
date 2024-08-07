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
    <div className="relative">
      <div>
        <Top10Corousal dataArray={dataArray} />
      </div>
      <div className="bg-gradient-to-b from-black to-[#1a1a1a]">
        <BoxCorousal />
        {/* <BoxCorousal />
        <BoxCorousal /> */}
      </div>
    </div>
  );
};

export default TrailerPlayingSecondaryDisplay;
