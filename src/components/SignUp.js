/* eslint-disable */

import { useEffect, useRef, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser} from "../utils/store/userSlice"
import { passwordValidation } from "../utils/validation";
import { VscError } from "react-icons/vsc";
import { PiEyeSlash } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { authUsingEmailAndPassword } from "../utils/firebaseAuth/passwordAuth";
import { auth } from "../utils/firebaseAuth/firebase";


const SignUp = ()=>{

    const [password, setPassword] = useState(null)
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const [showEmptyMsg, setShowEmptyMsg] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [userPassword, setUserPassword] = useState(null);
    const [firebaseError, setFirebaseError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Subscribing Email from store to signUp page 
    const email = useSelector((store)=> store.user.email)

    const nameRef = useRef(null);
    const dispatch = useDispatch();
    const naviagte = useNavigate();
    
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
            setLoading(false)
            setShowEmptyMsg(true)
        }else{
            if(password === null) return;
            const isPasswordValid = passwordValidation(password);
            if(!isPasswordValid){
                setShowEmptyMsg(false);
                setShowErrorMsg(true);
            }else{
                setShowErrorMsg(false)
                // setting verified password
                setUserPassword(password)
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

    // for password showing and hiding in input
    function handleShowPassword(e){
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    // Singup Logic
    async function handleSignUp(e){
        try {
            setLoading(true)
            e.preventDefault();
            const user = await authUsingEmailAndPassword(auth, email, userPassword, nameRef.current.value)
            // onAuthStateChange from firebase automatic redirect us to browse page
            
            /*const loggedInUser = await loginWithEmailAndPassword(auth, email, userPassword)
            if(loggedInUser){
                dispatch(addName(loggedInUser.user.displayName))
                dispatch(addEmail(loggedInUser.user.email))
                naviagte("/browse");
            }
           */
        } catch (error) {
            setLoading(false)
            dispatch(removeUser());
            setFirebaseError(error.message);
            console.log(error);
        }

    }

    return (
        <section>
            
            <header className=" border-b-zinc-300  border-b-[1px] py-2">
                <Header />
            </header>
            <ContentWrapper>
                <div className="px-4 md:w-3/5 lg:w-2/5 mx-auto mt-[3%] font-netFlixMd">
                    
                    <form   className="w-full  flex flex-col gap-4">
                        <h1 className="text-[2rem] opacity-[0.8]">Welcome back! <br/>Joining Netflix is easy.</h1>
                        <p className="text-[1.1rem] font-netFlixRg opacity-[0.8]">Enter your password and you'll be watching in no time.</p>
                        <span>
                            <h5 className="text-[1.1rem] font-netFlixRg opacity-[0.8]">Email</h5>
                            <p className="opacity-[0.95]">{email}</p>
                        </span>
                        <input ref={nameRef} className="w-full h-14 border-[1px] px-4 rounded-sm border-blue-500 font-netFlixRg text-lg" type="text" placeholder="Enter your Name"/>
                        <div>
                            <span className="w-full h-14 border-[1px] px-4 rounded-sm border-blue-500 font-netFlixRg text-lg  flex flex-row justify-between">
                                <input
                                    
                                    onChange={handlePasswordChange} 
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className="w-2/3 border-none outline-none" type={showPassword ? "text" : "password"} placeholder="Enter your password"
                                />
                                <button onClick={handleShowPassword} className="text-[1.5rem]">{showPassword ?   <LiaEyeSolid /> : <PiEyeSlash />}</button>
                            </span>
                            <p className="text-sm text-[var(--red4-color)]  font-sans">
                                {showEmptyMsg ? (<span className="flex  items-center gap-2"><VscError /> Password is required </span>) : (showErrorMsg ? "Capital letter, symbol and number is required" : <span className="opacity-0">i am hidden</span>)}
                                {/* {firebaseError && <span className="flex  items-center"> Please fill all the details</span>} */}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 -mt-4">
                            <Link className="text-[1rem] font-netFlixRg mt-2 text-[var(--blue-color)] hover:underline">Forgot your password?</Link>
                            <button onClick={handleSignUp} className="h-16 text-white rounded-md font-netFlixRg text-[1.6rem] bg-[var(--red-color)] hover:bg-[var(--red2-color)] flex flex-row justify-center items-center gap-6">
                            {loading && <div className="signup-loader"></div>}
                                Sign up
                            </button>
                           
                        
                        </div>
                    </form>

                </div>
            </ContentWrapper>
            
            
        </section>
    )
}

export default SignUp;