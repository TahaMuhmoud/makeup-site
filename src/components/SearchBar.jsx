import PropTypes from "prop-types";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchOverlayContext } from "../context/SearchOverlayContext";

function SearchBar({ onChange }) {
  const [, setShowSearchOverlay] = useContext(SearchOverlayContext);
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full h-full rounded-full p-2 shadow-black-half shadow-[0px_4px_1px] outline-none bg-three"
        onFocus={() => setShowSearchOverlay(true)}
        onChange={(e) => onChange(e)}
      />
      <FaSearch className="absolute right-2 top-2" />
    </div>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

export default SearchBar;
