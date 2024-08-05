import { useSelector } from "react-redux";
import Top10Corousal from "./Top10Corousal";
import { dataBinding } from "../utils/algoForDataBinding";
import BoxCorousal from "./BoxCorousal";

const TrailerPlayingSecondaryDisplay = () => {
  const movies = useSelector((store) => store.top10Movies?.top10Movies);

  let dataArray;
  if (movies.length > 0) {
    dataArray = dataBinding(movies);
  }
  console.log(dataArray);

  return (
    <div className="relative  lg:-top-28 h-full lg:-pt-20 mt-6">
      <h1 className="px-[4%] text-white font-netFlixMd text-[1.4rem] lg:text-[2rem] mb-2">Top 10 Movies Today</h1>
      <div className=" scrollbar h-full flex flex-row gap-6 flex-nowrap overflow-x-scroll">
        { dataArray && dataArray.map((item)=> (
            <Top10Corousal svg={item.svg} poster_path={item.poster_path}/>
        ))}
      </div>
      <div className="mt-4">
      <BoxCorousal />
      </div>
    </div>
  );
};

export default TrailerPlayingSecondaryDisplay;
