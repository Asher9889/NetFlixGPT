import { MdOutlineHome } from "react-icons/md";
import { PiTelevisionDuotone } from "react-icons/pi";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineListAlt } from "react-icons/md";
const BrowseMenu = ()=>{
    return (
        <div className="w-full max-w-[300px] flex flex-col gap-4 text-white px-3 py-4 font-netFlixBd">
            <span className=" flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < MdOutlineHome className="text-2xl"/> 
                <p className="text-lg">Home</p>
            </span>
            <span className="flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < PiTelevisionDuotone className="text-2xl"/> 
                <p className="text-lg">Tv Shows</p>
            </span>
            <span className="flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < BiCameraMovie className="text-2xl"/> 
                <p className="text-lg">Movies</p>
            </span>
            <span className="flex flex-row items-center gap-4 py-2 px-2 border-b-[1px] border-zinc-200">
                < MdOutlineListAlt className="text-2xl"/> 
                <p className="text-lg">My List</p>
            </span>
        </div>
    )
}

export default BrowseMenu;