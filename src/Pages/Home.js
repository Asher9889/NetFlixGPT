
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import PramotionTv from "../components/PramotionTv";


const Home = ()=>{
    return (
        <section className="w-screen bg-black">
            <Landing />
            <PramotionTv />
            <Footer />
        </section>
    )
}

export default Home;