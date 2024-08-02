import { useEffect, useRef, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { passwordValidation } from "../utils/validation";
import { VscError } from "react-icons/vsc";

const SignUp = ()=>{

    const [password, setPassword] = useState(null)
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const [showEmptyMsg, setShowEmptyMsg] = useState(false)

    const email = useSelector((store)=> store.user.email)

    const nameRef = useRef(null);
    
    useEffect(()=>{
        handlePasswordValidation()
    }, [password])

    // Handling password input
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    // Handling password validation
    function handlePasswordValidation(){
        if(password === ""){
            setShowEmptyMsg(true)
            // setShowErrorMsg(true)
        }else{
            const isPasswordValid = passwordValidation(password);
            if(!isPasswordValid){
                setShowEmptyMsg(false);
                setShowErrorMsg(true);
            }else{
                setShowErrorMsg(false)
            }
        }
    }

    // For handling onFocus
    function handleFocus(){
        setShowEmptyMsg(true);
    }

    // for handling onBlur
    function handleBlur(){
        setShowEmptyMsg(false);
        setShowErrorMsg(false)
    }


    return (
        <section>
            
            <header className=" border-b-zinc-300  border-b-[1px] py-2">
                <Header />
            </header>
            <ContentWrapper>
                <div className="px-4 md:w-3/5 lg:w-2/5 mx-auto mt-[3%] font-netFlixMd">
                    
                    <form className="w-full  flex flex-col gap-4">
                        <h1 className="text-[2rem] opacity-[0.8]">Welcome back! <br/>Joining Netflix is easy.</h1>
                        <p className="text-[1.1rem] font-netFlixRg opacity-[0.8]">Enter your password and you'll be watching in no time.</p>
                        <span>
                            <h5 className="text-[1.1rem] font-netFlixRg opacity-[0.8]">Email</h5>
                            <p className="opacity-[0.95]">{email}</p>
                        </span>
                        <input ref={nameRef} className="w-full h-14 border-[1px] px-4 rounded-sm border-blue-500 font-netFlixRg text-lg" type="text" placeholder="Enter your Name"/>
                        <div>
                            <input
                            onChange={handlePasswordChange} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="w-full h-14 border-[1px] px-4 rounded-sm border-blue-500 font-netFlixRg text-lg" type="password" placeholder="Enter your password"
                            />
                            <p className="text-sm text-[var(--red4-color)]  font-sans">
                                {showEmptyMsg ? (<span className="flex  items-center gap-2"><VscError /> Password is required </span>) : (showErrorMsg ? "Capital letter and symbol is required" : <span className="opacity-0">i am hidden</span>)}
                                
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 -mt-4">
                            <Link className="text-[1rem] font-netFlixRg mt-2 text-[var(--blue-color)] hover:underline">Forgot your password?</Link>
                            <button className="h-16 text-white rounded-md font-netFlixRg text-[1.6rem] bg-[var(--red-color)] hover:bg-[var(--red2-color)]">Next</button>
                        
                        </div>
                    </form>

                </div>
            </ContentWrapper>
            
            
        </section>
    )
}

export default SignUp;