import { useState } from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  let width = window.innerWidth;
  let height = window.innerHeight;

  window.addEventListener("scroll", () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  });

  return { ...scroll, w: width, h: height };
}
