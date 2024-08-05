import { useSelector } from "react-redux";
import Top10Corousal from "./Top10Corousal";
import { dataBinding } from "../utils/algoForDataBinding";

const TrailerPlayingSecondaryDisplay = () => {
  const movies = useSelector((store) => store.top10Movies?.top10Movies);

  let dataArray;
  if (movies.length > 0) {
    dataArray = dataBinding(movies);
  }
  console.log(dataArray);

  return (
    <div className="h-full ">
      <div className="scrollbar h-full flex flex-row gap-6 flex-nowrap overflow-x-scroll">
        { dataArray && dataArray.map((item)=> (
            <Top10Corousal svg={item.svg} poster_path={item.poster_path}/>
        ))}
      </div>
      TrailerPlayingSecondaryDisplay
    </div>
  );
};

export default TrailerPlayingSecondaryDisplay;
