import netFlixLogo from "../assests/netFlixLogo.png"

const Header = ()=>{
    return (
        <div className="w-screen max-w-[1200px] mx-auto   pt-4">
            <img className="w-32 lg:w-48" src={netFlixLogo} alt="text"/>
        </div>
    )
}

export default Header;