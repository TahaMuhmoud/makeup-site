import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ShowFilterSidebarContext = createContext();
function ShowFilterSidebarContextProvider({ children }) {
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  return (
    <ShowFilterSidebarContext.Provider
      value={[showFilterSidebar, setShowFilterSidebar]}
    >
      {children}
    </ShowFilterSidebarContext.Provider>
  );
}

ShowFilterSidebarContextProvider.propTypes = {
  children: PropTypes.any,
};

export default ShowFilterSidebarContextProvider;
