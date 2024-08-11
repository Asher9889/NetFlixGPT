import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseAuth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import { addEmail, addName } from "../utils/store/userSlice";

function useAuthStateChange() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        dispatch(addEmail(user.email))
        dispatch(addName(user.displayName))
        navigate("/browse")
      } else {
        navigate("/")
      }
    })
    // i am adding these beacuse of eslint
    // also for good coding practise.
  }, [dispatch, navigate, addEmail, addName]);
}

export default useAuthStateChange;
