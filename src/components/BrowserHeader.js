import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import netFlixLogo from "../assests/netFlixLogo.png";
import userLogo from "../assests/user.png";
import yellowUser from "../assests/yellowUser.png";
import childLogo from "../assests/childLogo.png";
import { TbHomeShare } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import logout from "../utils/firebaseAuth/logout";
import { auth } from "../utils/firebaseAuth/firebase";
import BrowseMenu from "./BrowseMenu";
import { useSelector } from "react-redux";
import useAuthStateChange from "../hooks/useAuthStateChange"

const BrowserHeader = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showBrowseMenu, setShowBrowseMenu] = useState(false);

  const name = useSelector(store => store.user?.name)

  const menuItems = [{name: "Home", path: "/browse"}, {name:"TV Shows", path: "/browse/tvshow"}, {name:"Movies", path: "/browse/movies"}, {name:"New & Popular", path: "/browse/popular"}, {name: "Ask Ai", path: "/askgpt"} ]

  // constently checking user is login or not
  useAuthStateChange();

  // handling Drop Down Menu Visibility
  function handleMouseEnter() {
    setShowDropDown(true);
  }
  function handleMouseLeave() {
    setShowDropDown(false);
  }
  function handleClickOnArrow() {
    setShowBrowseMenu(false);
    setShowDropDown(!showDropDown);
  }
  // handling browse menu for mobile
  function handleClickOnBrowse() {
    setShowDropDown(false);
    setShowBrowseMenu(!showBrowseMenu);
  }

  // handling logout : Already handled error in main file
  async function handleLogout() {
    await logout(auth);
  }

 

  return (
    <div className="w-full absolute z-20 top-0 flex flex-row justify-between items-center px-[3%] lg:pt-[1%] bg-gradient-to-b from-zinc-900">
      <div className="relative flex flex-row items-center gap-10 ">
        <Link to="/browse">
          <img  className="w-28" src={netFlixLogo} alt="netflixLogo" />
        </Link>
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-8 text-[14px]">
          {menuItems.map((e)=>(
             <li key={e.name}>
             <NavLink to={e.path} className={(p)=> p.isActive ? "text-white" : "text-zinc-300" }>{e.name}</NavLink>
           </li>
          ))}
          </ul>
        </div>
        <span
          onClick={handleClickOnBrowse}
          className="lg:hidden  flex flex-row items-center gap-0 -ml-4 font-netFlixRg text-sm  text-white"
        >
          Browse
          <IoMdArrowDropdown className="text-4xl" />
        </span>
        {/* for mobile browse */}
        <AnimatePresence>
          {showBrowseMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "330px", opacity: 1 }}
              exit={{ height: 0 }}
              className="absolute top-[120%] w-[60vw] max-w-[300px] bg-[var(--black-color-dropDown)] rounded-md"
            >
              <BrowseMenu />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative mr-[2%]">
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-md w-8" src={userLogo} alt="userLogo" />
          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" hidden lg:block "
          >
            <IoMdArrowDropdown className="text-xl text-white hover:rotate-[180deg]" />
          </span>
          {/* For Mobile */}
          <motion.span onClick={handleClickOnArrow} className="lg:hidden">
            <IoMdArrowDropdown className="text-2xl text-white hover:rotate-[180deg]" />
          </motion.span>
        </div>

        <AnimatePresence>
          {showDropDown && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "300px", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`dropDownMENU  w-[60vw]  sm:max-w-[300px]  bg-[var(--black-color-dropDown)] absolute top-[150%]  right-[3%]  rounded-md`}
            >
              <div className="flex flex-col gap-3 px-3 py-4">
                <span className="flex flex-row text-white text-sm items-center gap-2">
                  <img src={yellowUser} className="rounded-md" alt="userLogo" />
                  <Link>
                    <p className="hover:underline">{name}</p>
                  </Link>
                </span>
                <span className="flex flex-row text-white text-sm items-center gap-2">
                  <img src={childLogo} className="rounded-md" alt="userLogo" />
                  <Link>
                    <p className="hover:underline">Children</p>
                  </Link>
                </span>
                <div className="flex flex-col text-white text-sm mt-[2%] gap-3">
                  <span className="flex flex-row items-center gap-2">
                    <FaPencilAlt className="text-xl w-8 text-zinc-400" />
                    <Link>
                      <p className="hover:underline">Manage Profiles</p>
                    </Link>
                  </span>
                  <span className="flex flex-row items-center gap-2">
                    <TbHomeShare className="text-2xl w-8 text-zinc-400" />
                    <Link>
                      <p className="hover:underline">Transfer Profiles</p>
                    </Link>
                  </span>
                  <span className="flex flex-row items-center gap-2">
                    <FaRegUser className="text-2xl w-8 text-zinc-400" />
                    <Link>
                      <p className="hover:underline">Account</p>
                    </Link>
                  </span>
                  <span className="flex flex-row items-center gap-2">
                    <IoMdHelpCircleOutline className="text-3xl w-8 text-zinc-400" />
                    <Link>
                      <p className="hover:underline">Help Center</p>
                    </Link>
                  </span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-white text-sm border-t-[1px] py-2 hover:underline"
              >
                Sign out of Netflix
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BrowserHeader;
