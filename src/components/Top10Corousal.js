import { useRef } from "react";
import Top10Card from "./Top10Card";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Top10Corousal = ({ dataArray }) => {

  // const [pixelValue, setPixelValue] = useState(0)

  const scrollRef = useRef();
  // console.log(scrollRef)

  function handleLeftScroll(){
    // console.log("clicked")
    scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  }
  function handleRightScroll(){
    // console.log("clicked")
    scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  }


  return (
    <div className="w-full h-full relative py-4 ">
      <h1 className="px-[4%] text-white font-netFlixMd text-[1.4rem] lg:text-[2rem] pb-4">
        Top 10 Movies Today
      </h1>
      
      
      <div
        className="hidden md:block w-[4%]  flex flex-row justify-center items-center absolute z-30 left-0 bottom-0 text-4xl hover:text-5xl text-white glass-effect  cursor-pointer"
        style={{ height: "80%" }}
      >
        <span onClick={handleLeftScroll} className="flex flex-row justify-center items-center h-full ">
          <MdOutlineKeyboardArrowLeft />
        </span>
      </div>
      <div ref={scrollRef} className="w-full px-[4%] scrollbar flex flex-col gap-2 overflow-x-scroll ">
        
        {/* iss div ko scroll krna hai */}
        <div  className="relative w-full  flex flex-row flex-nowrap gap-4 items-bottom ">
          {dataArray &&
            dataArray.map((item, index) => (
              <Top10Card key={index} svg={item.svg} poster_path={item.poster_path} />
            ))}
        </div>
      </div>

      <div onClick={handleRightScroll}
        className="hidden md:block w-[4%]  flex flex-row justify-center items-center absolute z-30 right-0 bottom-0 text-4xl hover:text-5xl text-white glass-effect  cursor-pointer"
        style={{ height: "80%" }}
      >
        <span className="flex flex-row justify-center items-center h-full ">
          <MdOutlineKeyboardArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Top10Corousal;
