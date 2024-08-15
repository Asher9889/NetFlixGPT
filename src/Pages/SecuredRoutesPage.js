import BrowserHeader from "../components/BrowserHeader"
import Browse from "../components/Browse"
import GPT from "./GPT"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"


const SecuredRoutesPage = ()=>{
    const location = useLocation();


    return (
        <div>
            <BrowserHeader />
            <Browse />
            

        </div>
    )
}

export default SecuredRoutesPage;