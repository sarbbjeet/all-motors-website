import React, { useEffect, useState } from "react";

export default function getDeviceSize() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const hasWindow = false;
  const handleWindowResize = () => {
    hasWindow = typeof window !== "undefined";
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    setScreenSize({ width, height });
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [hasWindow]);

  return screenSize;
}
