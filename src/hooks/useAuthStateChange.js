import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseAuth/firebase";
import { onAuthStateChanged } from "firebase/auth";

function useAuthStateChange() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/browse')
      } else {
        navigate("/")
      }
    });
  }, []);
}

export default useAuthStateChange;
