import { useState } from "react";

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState(
    window.innerWidth >= 1022 ? "desktop" : "mobile"
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) setWindowSize("desktop");
    else setWindowSize("mobile");
  });

  return windowSize;
}
