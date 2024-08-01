import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import { Link } from "react-router-dom";

const SignUp = ()=>{
    return (
        <section>
            
            <header className=" border-b-zinc-300  border-b-[1px] py-2">
                <Header />
            </header>
            <ContentWrapper>
                <div className="px-4 md:w-3/5 lg:w-2/5 mx-auto mt-[3%] font-netFlixMd">
                    
                    <form className="w-full  flex flex-col gap-4">
                        <h1 className="text-[2rem] opacity-[0.8]">Welcome back! <br/>Joining Netflix is easy.</h1>
                        <p className="text-[1.3rem] font-netFlixRg opacity-[0.8]">Enter your password and you'll be watching in no time.</p>
                        <span>
                            <h5 className="text-[1.3rem] font-netFlixRg opacity-[0.8]">Email</h5>
                            <p className="opacity-[0.95]">abs@gmail.com</p>
                        </span>
                        <input className="w-full h-14 border-[1px] px-4 rounded-sm border-blue-500 font-netFlixRg text-lg" type="password" placeholder="Enter your password"/>
                        <Link className="text-[1rem] font-netFlixRg text-[var(--blue-color)] hover:underline">Forgot your password?</Link>
                        <button className="h-16 text-white rounded-md font-netFlixRg text-[1.6rem] bg-[var(--red-color)] hover:bg-[var(--red2-color)]">Next</button>
                    </form>

                </div>
            </ContentWrapper>
            
            
        </section>
    )
}

export default SignUp;