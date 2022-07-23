import React, { useEffect, useRef, useState } from "react";

export default function getDeviceSize() {
  const windowSize = useRef(0);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const hasWindow = false;
  // const handleWindowResize = () => {
  //   hasWindow = typeof window !== "undefined";

  //   const width = hasWindow ? window.innerWidth : null;
  //   const height = hasWindow ? window.innerHeight : null;
  //   setScreenSize({ width, height });
  // };

  windowSize.current = ({ target: { innerWidth, innerHeight } }) => {
    setScreenSize({ width: innerWidth, height: innerHeight });
  };
  useEffect(() => {
    // component is mounted and window is available
    //handleWindowResize();
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", windowSize.current);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", windowSize.current);
  }, []);

  return screenSize;
}
