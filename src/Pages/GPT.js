import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BrowserHeader from "../components/BrowserHeader";
import GPTInputBox from "../components/GPTInputBox";
import GPTResultBox from "../components/GPTResultBox";

const GPT = () => {
  const location = useLocation();
  const isOutletActive = location.pathname === "/askgpt";

  // console.log("isOutletActive :", isOutletActive)

  useEffect(() => {
    if (isOutletActive) {
      document.body.style.overflow = "auto";
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      document.body.style.overflow = "hidden";
    }

    // when unmounts body get it bydefault value
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOutletActive]);
  return (
    <div className="w-full min-h-[100vh] text-xl min-h-[100vh]  bg-signInBg ">
      <div className="bg-gradient-to-b from-black">
        <BrowserHeader />
        <GPTInputBox />
        <GPTResultBox />
      </div>

      <Outlet />
    </div>
  );
};

export default GPT;
