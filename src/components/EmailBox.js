import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";


const EmailBox = ()=>{
    return (
        <div className="pt-4 text-center ">
            <h4 className="text-xl pb-4  px-4">Ready to watch? Enter your email to create or restart your membership.</h4>
            <span className=" flex flex-col lg:flex-row gap-4 lg:gap-2 items-center pt-4">
                <input className="lg:w-7/12 lg:h-14 h-12  rounded-md px-4 text-lg bg-transparent border-[1px] border-green-600" type="text" placeholder="Email Address"/>
                <Link to="/signup" className="lg:h-14 h-12 lg:w-4/12 bg-[var(--red-color)] hover:bg-[var(--red2-color)] rounded-md text-xl lg:text-2xl px-2 font-netFlixBd tracking-[0.5px] flex flex-row items-center justify-center gap-2"><button className="flex flex-row items-center gap-4">Get Started <HiOutlineChevronRight /></button></Link>
            </span>
        </div>
    )
}

export default EmailBox;