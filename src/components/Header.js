import { Link } from "react-router-dom";
import netFlixLogo from "../assests/netFlixLogo.png";
import { auth } from "../utils/firebaseAuth/firebase";
import logout from "../utils/firebaseAuth/logout";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const option = ["Hindi", "English"];

  const email = useSelector((store) => store.user.email);

  async function handleLogout() {
    try {
      const isLogout = await logout(auth);
      if (isLogout === undefined) {
        dispatch(removeUser());
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-screen flex flex-row justify-between items-center max-w-[1200px] mx-auto pt-4 lg:pt-0  pr-8">
      <Link to="/">
        <img className="w-[7rem] lg:w-48" src={netFlixLogo} alt="text" />
      </Link>
      <span className="flex flex-row gap-2 xs:gap-3  sm:gap-8  text-white">
        <select className="bg-black px-[4px] py-[6px] lg:px-4 rounded-md border-[2px] border-zinc-600">
          {option.map((lan) => (
            <option key={lan} className="bg-white text-black">
              {lan}
            </option>
          ))}
        </select>

        {!email  ? (
          <Link to="/login">
            <button className="bg-[var(--red-color)] text-md hover:bg-[var(--red2-color)] font-bold px-3 py-[3px] lg:px-4 lg:py-[6px] rounded-md">
              Sign In
            </button>
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-[var(--red-color)] text-md hover:bg-[var(--red2-color)] font-bold px-3 py-[3px] lg:px-4 lg:py-[6px] rounded-md"
          >
            Logout
          </button>
        )}
      </span>
    </div>
  );
};

export default Header;
