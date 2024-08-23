import BrowserHeader from "./BrowserHeader";
import cms from "../assests/comingSoon.jpg"
const Movies = ()=>{
    return (
        <div className="w-[100vw] h-[100vh]">
            <BrowserHeader />
            <img className="w-full h-full object-cover" src={cms} alt="coming soon"/>
        </div>
    )
}

export default Movies;