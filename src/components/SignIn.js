import Header from "./Header";
import EmailBox from "./EmailBox"

const SignIn = () => {
  return (
    <div className="relative w-screen h-screen bg-signInBg">
        <div className="bg-black  opacity-[0.75] absolute  w-screen h-screen" />
        
        <div className="absolute top-0 right-0 z-10 bg-red-500">
            <Header />
        </div>
        <div className="relative w-full h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-netFlixBd tracking-[1px]">Unlimited movies, TV shows and more</h1>
            <h3 className="text-netFlixMd pt-4 text-3xl ">Watch anywhere. Cancel anytime.</h3>
            <EmailBox />
        </div>
    </div>
  );
};

export default SignIn;
