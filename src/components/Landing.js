import Header from "./Header";
import EmailBox from "./EmailBox";

const Landing = () => {
  return (
    <div className="relative w-full overflow-x-hidden   bg-signInBg bg-cover pb-10">
      <div className="bg-black  opacity-[0.75] absolute  w-full h-full" />

      <header className="absolute z-10 w-full px-3">
        <Header />
      </header>
      <main className="relative  text-center w-full h-full flex flex-col justify-center items-center text-white px-6 pt-[40%] xs:pt-[30%] lg:pt-[25%] xl:pt-[15%] ">
        <h1 className="text-[2rem] xs:text-[2rem] leading-[2.5rem]  lg:text-5xl font-netFlixBd  lg:tracking-[1px]">
          Unlimited movies, TV shows and more
        </h1>
        <h3 className="text-netFlixMd pt-[10%] lg:pt-4    text-xl lg:text-3xl ">
          Watch anywhere. Cancel anytime.
        </h3>
        <EmailBox />
      </main>
    </div>
  );
};

export default Landing;
