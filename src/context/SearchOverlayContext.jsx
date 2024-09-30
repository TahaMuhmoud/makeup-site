import PropTypes from "prop-types";
import { createContext, useState } from "react";

export let SearchOverlayContext = createContext();

const SearchOverlayContextProvider = ({ children }) => {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  return (
    <SearchOverlayContext.Provider
      value={[showSearchOverlay, setShowSearchOverlay]}
    >
      {children}
    </SearchOverlayContext.Provider>
  );
};
SearchOverlayContextProvider.propTypes = {
  children: PropTypes.any,
};
export default SearchOverlayContextProvider;
