import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const DarkModeContext = createContext();
function DarkModeContextProvider({ children }) {
  let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(isDark);
  window.matchMedia("(prefers-color-scheme: dark)").onchange = (e) => {
    setDarkMode(e.matches);
  };

  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default DarkModeContextProvider;
