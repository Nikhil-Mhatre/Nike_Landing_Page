import { useCallback, useEffect, useState } from "react";

const useResize = () => {
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth < 1024 ? true : false
  );

  const handleMobileView = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleMobileView);

    return () => {
      window.removeEventListener("resize", handleMobileView);
    };
  }, [handleMobileView]);

  return isMobileView;
};

export default useResize;
