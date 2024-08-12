import { Link } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";

const Footer = () => {
  return (
    <footer className="pb-14 ">
      <div className="h-[8px] bg-[var(--gray-color-line)]" />
      <ContentWrapper>
        <div className="text-sm px-[4%] text-white bg-[#000] mt-14 opacity-80">
          <p className="text-base">
            Questions? Call <span className="underline">000-800-919-1694</span>
          </p>
          <div className="flex flex-col gap-4 sm:gap-0  sm:flex-row  mt-6 underline">
            
            <div className="flex flex-1 flex-row justify-between ">
              <div className="flex flex-col flex-1  gap-4 ">
                <Link className="">FAQ</Link>
                <Link>Investor Relations</Link>
                <Link>Privacy</Link>
                <Link>Speed Test</Link>
              </div>
              <div className="flex flex-1  flex-col  gap-4">
                <Link>Help Centre</Link>
                <Link>Jobs</Link>
                <Link>Cookie Preferences</Link>
                <Link>Legal Notices</Link>
              </div>
              <div className="flex-1/2" />
            </div>

           
           
            <div className="flex flex-1 flex-row justify-between ">
              <div className="flex flex-col flex-1  gap-4 ">
                <Link>Account</Link>
                <Link>Ways to Watch</Link>
                <Link>Corporate Information</Link>
                <Link>Only on Netflix</Link>
              </div>
              <div className="flex flex-col flex-1  gap-4">
                <Link>Media Centre</Link>
                <Link>Terms of Use</Link>
                <Link>Contact Us</Link>
              </div>
              <div className="flex-1/2 " />
            </div>
           
            
          </div>
        <h1 className="text-base mt-4">Netflix India</h1>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
