import { Link, useLocation } from "react-router-dom";
import netFlixLogo from "../assests/netFlixLogo.png";
import { auth } from "../utils/firebaseAuth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addName, addEmail } from "../utils/store/userSlice"
import { useDispatch } from "react-redux";


const Header = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const option = ["Hindi", "English"];




  const isloginPage = (location.pathname !== "/login" && "/signup");
  

// when ever header component render it get checked user present or not
// if yes redirect to browse page

  /* eslint-disable */
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(addEmail(user.email))
          dispatch(addName(user.displayName))
            navigate("/browse")

        }
      })
  },[navigate])
  /* eslint-enable */


  return (
    <div className="w-screen flex flex-row justify-between items-center max-w-[1200px] mx-auto pt-4 lg:pt-0  pr-8">
      <Link to="/">
        <img className="w-[7rem] lg:w-48" src={netFlixLogo} alt="text" />
      </Link>
      {isloginPage  &&  <div className="flex flex-row gap-2 xs:gap-3  sm:gap-8  text-white">
        {/* <select className="bg-black px-[4px] py-[4px] lg:px-4 rounded-md border-[2px] border-zinc-600">
          {option.map((lan) => (
            <option key={lan} className="bg-white text-black">
              {lan}
            </option>
          ))}
        </select> */}

        
          <Link to="/login">
            <button className="bg-[var(--red-color)] text-md hover:bg-[var(--red2-color)] font-bold px-3 py-[3px] lg:px-4 lg:py-[6px] rounded font-netFlixRg">
              Sign In
            </button>
          </Link>
        
      </div>}
    </div>
  );
};

export default Header;
//  i am doing it