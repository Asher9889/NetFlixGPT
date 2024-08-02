import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmail } from "../utils/store/userSlice";
import { HiOutlineChevronRight } from "react-icons/hi";
import { VscError } from "react-icons/vsc";
import { emailValidation } from "../utils/validation";

const EmailBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [validEmail, setvalidEmail] = useState(null)
  const [showError, setShowError] = useState(false);
  const [showEmptyInput, setShowEmptyInput] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    validateEmailString();
  }, [inputValue]);

  function handleChange(e) {
    // console.log(e.target.value)
    setInputValue(e.target.value);
  }

  function validateEmailString() {
    console.log("i am executing");
    if (inputValue === "") {
      setShowEmptyInput(true);
    } else {
      setShowEmptyInput(false);
      const isValidEmail = emailValidation(inputValue);
      if (isValidEmail === false) {
        setShowMsg(true);
        setShowError(true);
      } else {
        setvalidEmail(inputValue)
        setShowError(false);
        setShowMsg(false);
      }
    }
  }

  function handleFocus() {
    setShowMsg(true);
  }

  function handleBlue() {
    setShowMsg(false);
  }


  function handleClick(){
    if(validEmail !== null){
      dispatch(addEmail(inputValue))
      navigate("/signup")
    }else{
      setShowMsg(true)
    }
  }

  return (
    <div className="pt-4 text-center ">
      <h4 className="text-xl pb-4  px-4">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <span className="relative flex flex-col lg:flex-row gap-4 lg:gap-2 items-center pt-4">
        <input
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlue}
          value={inputValue}
          className="lg:w-7/12 lg:h-14 h-12  rounded-md px-4 text-lg bg-transparent border-[1px] border-green-600"
          type="text"
          placeholder="Email Address"
        />

        <button
          className="lg:h-14 h-12 lg:w-4/12 bg-[var(--red-color)] hover:bg-[var(--red2-color)] rounded-md text-xl lg:text-2xl px-2 font-netFlixBd tracking-[0.5px] flex flex-row items-center justify-center gap-2 flex flex-row items-center gap-4"
           onClick={handleClick}
        >
          Get Started <HiOutlineChevronRight />
        </button>
        {showMsg ? (
          <p className="absolute -bottom-[40%] left-[2%] text-start flex flex-row items-center gap-2 text-sm text-[var(--red4-color)]  font-sans">
            <VscError />
            {showEmptyInput
              ? "Email is required"
              : showError
              ? "Please enter a valid email address."
              : ""}
          </p>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default EmailBox;
