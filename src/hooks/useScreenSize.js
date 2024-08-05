import { useState, useEffect } from "react";
import { MAX_SCREEN_WIDTH } from "../utils/consts";

const useScreenSize = () => {
  const [width, setWidth] = useState(
    Math.min(window.innerWidth, MAX_SCREEN_WIDTH)
  );

  const handleResize = () => {
    setWidth(Math.min(window.innerWidth, MAX_SCREEN_WIDTH));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width: width, maxWidth: MAX_SCREEN_WIDTH };
};

export default useScreenSize;
