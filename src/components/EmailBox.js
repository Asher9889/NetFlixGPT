import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmail } from "../utils/store/userSlice";
import { HiOutlineChevronRight } from "react-icons/hi";
import { VscError } from "react-icons/vsc";
import { emailValidation } from "../utils/validation";

const EmailBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [validEmail, setvalidEmail] = useState(null);
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
        setvalidEmail(inputValue);
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

  function handleClick() {
    if (validEmail !== null) {
      dispatch(addEmail(inputValue));
      navigate("/signup");
    } else {
      setShowMsg(true);
    }
  }

  return (
    <div className="pt-4 text-center ">
      <h4 className="text-xl pb-4  px-4">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-2  pt-4">
        <div className="w-4/5 md:w-7/12 relative flex flex-col sm:flex-row justify-center ">
          <input
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlue}
            value={inputValue}
            className="w-full  lg:h-14 h-12  rounded-md px-4 text-lg bg-transparent border-[1px] border-green-600"
            type="text"
            placeholder="Email Address"
          />
          {showMsg ? (
            <p className="absolute -bottom-[50%] left-[2%] text-start flex flex-row items-center gap-2 text-sm text-[var(--red4-color)]  font-sans">
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
        </div>

        <button
          className="lg:h-14 h-12 w-[70%] xs:w-[50%] sm:w-4/12 bg-[var(--red-color)] hover:bg-[var(--red2-color)] rounded-md text-xl lg:text-2xl px-2 font-netFlixBd tracking-[0.5px]  justify-center  flex flex-row items-center gap-2 md:gap-4 mt-6 sm:mt-0"
          onClick={handleClick}
        >
          Get Started <HiOutlineChevronRight />
        </button>
      </div>
    </div>
  );
};

export default EmailBox;
