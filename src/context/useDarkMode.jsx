import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return [darkMode, setDarkMode];
}
