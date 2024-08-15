import BrowserHeader from "../components/BrowserHeader";
import GPTInputBox from "../components/GPTInputBox";
import GPTResultBox from "../components/GPTResultBox";

const GPT = () => {
  return (
    <div className="w-full text-xl  bg-signInBg  ">
      <BrowserHeader />
      <GPTInputBox />
      <GPTResultBox />
      
    </div>
  );
};

export default GPT;
