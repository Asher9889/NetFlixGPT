import ContentWrapper from "./ContentWrapper";
import tv from "../assests/tv.png"

const videoUrl = "https://res.cloudinary.com/saurabhbackend/video/upload/v1723481751/video2_soilgn.webm"


const PramotionTv = ()=>{
    return (
        <section className="bg-black ">
            <div className="h-[8px] bg-[var(--gray-color-line)]" />
            <ContentWrapper>
                <div className="flex flex-col sm:flex-row py-10 sm:py-16 md:gap-2  px-[4%]">
                    <div className="font-netFlixBd sm:flex-1 text-white sm:flex sm:flex-col md:gap-2 justify-center items-start">
                        <h1 className="text-center sm:text-start text-[2rem] lg:text-[3rem]">Enjoy on your TV</h1>
                        <h3 className="text-center sm:text-start text-lg font-netFlixRg sm:text-[1.5rem]">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                    </div>

                    <div className="sm:flex-1 relative h-[400px] -mt-16 sm:-mt-0">
                        {/* <div className="relative"> */}
                            <div className="w-full h-full flex justify-center items-center">
                                <img className="absolute " src={tv} alt="tv"/>
                                <video className="flex justify-center items-center  " autoPlay control loop  muted>
                                    <source src={videoUrl} />
                                </video>
                            {/* </div> */}
                            
                        </div>
                        
                    </div>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default PramotionTv;