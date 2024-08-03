import { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import { loginWithEmailAndPassword } from "../utils/firebaseAuth/passwordLogin";
import { auth } from "../utils/firebaseAuth/firebase";
import { removeUser } from "../utils/store/userSlice";
import { useDispatch } from "react-redux";
import { PiEyeSlash } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";

const SignIn = () => {
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginError, setShowLoginError] = useState(null);
  const [loading, setloading] = useState(false);

  // const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  useEffect(()=>{
    setTimeout(()=>{
      setShowLoginError(null)
    },5000)
  },[passwordFocus])

  async function handleLogin(e) {
    try {
      e.preventDefault();
      if((passwordRef.current.value || emailRef.current.value) === "") {
        return setShowLoginError("Please fill all details")
      }
      setloading(true)
      await loginWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

    } catch (error) {
      dispatch(removeUser());
      setShowLoginError(error.message);
    }
  }

  function handlePasswordFocus() {
    setPasswordFocus(true);
  }

  function handlePasswordBlur() {
    setPasswordFocus(false);
  }

  function handleShowPassword(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <section className="bg-black md:bg-formBg w-screen h-screen overflow-x-hidden">
      <div className="absolute top-0 w-full h-full  bg-black opacity-[0.4]" />
      <div className="relative z-10">
        <ContentWrapper>
          <Header />
          <div className="md:w-2/5  md:mx-auto mt-[4%] md:mt-[2%] bg-black md:opacity-[0.7] text-white  px-3 md:p-16 rounded-md">
            <form className="flex flex-col gap-8 md:gap-8 font-netFlixRg ">
              <h1 className=" text-[2rem] lg:text-4xl font-semibold">
                Sign In
              </h1>
              <input
                ref={emailRef}
                type="email"
                placeholder="Email or mobile number"
                className="  h-16 text-lg px-4 rounded-md bg-[var(--emptyInputBox-color)] border-[1.5px] border-zinc-600 "
              />

              <div
                className={`flex flex-row items-center w-full  h-16 text-lg px-4 rounded-md bg-[var(--emptyInputBox-color)] border-[1.5px] border-zinc-600 ${
                  passwordFocus ? "outline outline-1 outline-white" : ""
                }`}
              >
                <input
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-14 bg-[var(--emptyInputBox-color)] outline-none border-none"
                />
                <button onClick={handleShowPassword} className="text-xl">
                  {showPassword ? <LiaEyeSolid /> : <PiEyeSlash />}
                </button>
              </div>
              <button
                onClick={handleLogin}
                className="relative flex flex-row justify-center items-center text-center z-10 bg-[var(--red-color)] h-10 rounded-md hover:bg-[var(--red2-color)] mt-4"
              >
                <p className="absolute -top-[100%] left-[2%] text-sm text-[var(--red4-color)]  font-sans">{showLoginError ? showLoginError : null}</p>
                {loading ? <p className="w-8 h-8 border-4 border-l-transparent border-r-transparent border-red-900 rounded-full loading"></p> : "Sign in"}
              </button>
              <button className="text-center hover:text-zinc-400 hover:underline">
                Forget Password?
              </button>
              <h6 className="text-zinc-400">
                New to Netflix ?
                <button className="text-white hover:underline">
                  Sign up now.
                </button>
              </h6>
            </form>
          </div>
        </ContentWrapper>
      </div>
    </section>
  );
};

export default SignIn;
