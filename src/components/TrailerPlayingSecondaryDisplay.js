import { useSelector } from "react-redux";
import Top10Corousal from "./Top10Corousal";
import { dataBinding } from "../utils/algoForDataBinding";
import BoxCorousal from "./BoxCorousal";
import usePopularMovie from "../hooks/usePopularMovie";
import { useRef, useState } from "react";


const TrailerPlayingSecondaryDisplay = ({ index }) => {
  const [cardIndex, setCardIndex] = useState(null);


  const movies = useSelector((store) => store.top10Movies?.top10Movies);

  const popularMovies = useSelector(
    (store) => store.popularMovies?.popularMovies
  );

  // Data Binding for Top 10 Movies
  let dataArray;
  if (movies.length > 0) {
    dataArray = dataBinding(movies);
  }

  // fetch Popular movie and update in store
  usePopularMovie();

  function onMouseOverChangeCardIndex(index) {
    setCardIndex(index);
  }

  function onMouseOutChnageCardIndex() {
    setCardIndex(null);
  }



  return (
    <section className="relative   lg:-top-28 lg:-pt-20 mt-6">
        <Top10Corousal dataArray={dataArray}/>

      <div className="relative z-30 h-96 mt-12">
        <h1 className="px-[4%] text-white font-netFlixMd text-[1.4rem] lg:text-[2rem] mb-2">
          Popular Movies{" "}
        </h1>
        <div className="scrollbar px-[4%]   flex flex-row gap-4 flex-nowrap ">
          {popularMovies &&
            popularMovies.map((movie, index) => (
              <BoxCorousal
                onMouseOutChnageCardIndex={onMouseOutChnageCardIndex}
                onMouseOverChangeCardIndex={() =>
                  onMouseOverChangeCardIndex(index)
                }
                movie={movie}
                index={index}
                cardIndex={cardIndex}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TrailerPlayingSecondaryDisplay;
