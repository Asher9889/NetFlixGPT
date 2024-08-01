import ContentWrapper from "./ContentWrapper";
import Header from "./Header";

const SignIn = () => {

  return (
    <section className="bg-black md:bg-formBg w-screen h-screen">
      <div className="absolute top-0 w-full h-full  bg-black opacity-[0.4]" />
      <div className="relative z-10">
        <ContentWrapper>
          <Header />
          <div className="md:w-2/5  md:mx-auto mt-[4%] md:mt-[2%] bg-black md:opacity-[0.7] text-white  px-3 md:p-16 rounded-md">
            <form className="flex flex-col gap-6 md:gap-8 font-netFlixRg ">
                <h1 className=" text-[2rem] lg:text-4xl font-semibold">Sign In</h1>
                <input type="email" placeholder="Email or mobile number" className=" h-14 text-lg px-4 rounded-md bg-[var(--emptyInputBox-color)] border-[1.5px] border-zinc-600" />
                <input type="text" placeholder="Password" className=" h-14 text-lg px-4 rounded-md bg-[var(--emptyInputBox-color)] border-[1.5px] border-zinc-600" />
                <button className="relative z-10 bg-[var(--red-color)] h-10 rounded-md hover:bg-[var(--red2-color)]"> Sign in</button>
                <button className="text-center hover:text-zinc-400 hover:underline">Forget Password?</button>
                <h6 className="text-zinc-400">New to Netflix ? <button className="text-white hover:underline">Sign up now.</button></h6>
            </form>

          </div>
        </ContentWrapper>
      </div>
    </section>
  );
};

export default SignIn;


