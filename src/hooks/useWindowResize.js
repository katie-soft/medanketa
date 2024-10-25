import { useEffect, useState } from "react";
export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (windowSize.width === 0) {
      setWindowSize({ width: window.outerWidth, height: window.outerHeight });
    }

    const windowSizeHandler = () => {
      setWindowSize({ width: window.outerWidth, height: window.outerHeight });
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, [windowSize.width]);

  return { width: windowSize.width, height: windowSize.height };
};

export default useWindowResize;
