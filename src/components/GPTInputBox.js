const GPTInputBox = () => {
  return (
    <div className="pt-[25%] md:pt-[10%]  flex flex-col items-center">
      <div className="w-[90%] md:w-[60%] lg:w-[50%]  flex flex-col md:flex-row gap-4 md:gap-2 justify-between rounded-lg py-4 px-6 md:p-12 bg-[rgba(0,0,0,0.8)]">
        <input
          className="flex-1 rounded-md px-4 py-2 text-lg md:text-xl"
          type="text"
        />
        <button className="md:w-[20%] py-2 bg-[var(--red-color)] hover:bg-[var(--red2-color)] rounded-md font-netFlixRg text-xl text-white ">
          Search
        </button>
      </div>
    </div>
  );
};


export default GPTInputBox;