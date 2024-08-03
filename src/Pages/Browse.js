import { useEffect } from "react";
// import Header from "../components/Header";
import BrowserHeader from "../components/BrowserHeader";
import { auth } from "../utils/firebaseAuth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  
  return (
    <div className="w-screen">
      
      <BrowserHeader />
    </div>
  );
};

export default Browse;
