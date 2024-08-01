import { Link } from "react-router-dom";
import netFlixLogo from "../assests/netFlixLogo.png"

const Header = ()=>{

    const option = ["Hindi", "English"]
    return (
        <div className="w-screen flex flex-row justify-between items-center max-w-[1200px] mx-auto pt-4 lg:pt-0  pr-8">
            <Link to="/"><img className="w-[7rem] lg:w-48" src={netFlixLogo} alt="text"/></Link>
            <span className="flex flex-row gap-2 xs:gap-3  sm:gap-8  text-white">
                <select className="bg-black px-[4px] py-[6px] lg:px-4 rounded-md border-[2px] border-zinc-600" >
                    {option.map((lan)=> <option className="bg-white text-black">{lan}</option>)}
                </select>
                <Link to="/login"><button className="bg-[var(--red-color)] text-md hover:bg-[var(--red2-color)] font-bold px-3 py-[3px] lg:px-4 lg:py-[6px] rounded-md">Sign In</button></Link>
            </span>
        </div>
    )
}

export default Header;