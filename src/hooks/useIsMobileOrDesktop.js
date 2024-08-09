import { useEffect, useState } from "react";

const useIsMobileOrdesktop = () => {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(()=>{
        setIsMobile(checkingDevice())
    }, [])

  function checkingDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        
      return "Mobile";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "Mobile";
    }

    return "Desktop";
  }

  return isMobile;

};

export default useIsMobileOrdesktop;
