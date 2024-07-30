import { HiOutlineChevronRight } from "react-icons/hi";


const EmailBox = ()=>{
    return (
        <div className="pt-4">
            <h4 className="text-xl pb-4">Ready to watch? Enter your email to create or restart your membership.</h4>
            <span className="flex flex-row gap-2 items-center pt-4">
                <input className="w-7/12 h-14 rounded-md px-4 text-lg bg-transparent border-[1px] border-green-600" type="text" placeholder="Email Address"/>
                <button className="h-14 w-4/12 bg-[var(--red-color)] hover:bg-[var(--red2-color)] rounded-md text-2xl px-2 font-netFlixBd tracking-[0.5px] flex flex-row items-center justify-center gap-2">Get Started <HiOutlineChevronRight /></button>
            </span>
        </div>
    )
}

export default EmailBox;