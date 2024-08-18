import { MdOutlineHome } from "react-icons/md";
import { PiTelevisionDuotone } from "react-icons/pi";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineListAlt } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BrowseMenu = ()=>{

    const navigate = useNavigate()

    return (
        <ul className="w-full max-w-[300px] flex flex-col gap-4 text-white px-3 py-4 font-netFlixMd">
            <li className=" flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < MdOutlineHome className="text-2xl opacity-70"/> 
                <p className="text-lg">Home</p>
            </li>
            <li className="flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < PiTelevisionDuotone className="text-2xl opacity-70"/> 
                <p className="text-lg">Tv Shows</p>
            </li>
            <li className="flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < BiCameraMovie className="text-2xl opacity-70"/> 
                <p className="text-lg">Movies</p>
            </li>
            <li className="flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < MdOutlineListAlt className="text-2xl opacity-70"/> 
                <p className="text-lg">My List</p>
            </li>
            <li onClick={()=>navigate("/askgpt")} className="flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < FaBrain className="text-2xl opacity-70"/> 
                <p className="text-lg">Ask AI</p>
            </li>
        </ul>
    )
}

export default BrowseMenu;