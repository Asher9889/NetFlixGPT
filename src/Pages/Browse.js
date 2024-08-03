import { useEffect } from "react";
import Header from "../components/Header";
import { auth } from "../utils/firebaseAuth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Browse = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(!user){
                navigate("/")
            }
        })
    })
    return (
        <div>
            <Header />
        </div>
    )
}

export default Browse;