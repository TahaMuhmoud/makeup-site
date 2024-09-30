import PropTypes from "prop-types";
import { FiFilter } from "react-icons/fi";
import { useContext, useState } from "react";
import { ShowFilterSidebarContext } from "../context/ShowFilterSidebarContext";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const SORT = ["no-sort", "price asc", "price desc"];

function FilterHeader({ haveFilteOptions }) {
  const [showFilterSidebar, setShowFilterSidebar] = useContext(
    ShowFilterSidebarContext
  );

  const [showSortOptions, setShowSortOptions] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  let sortVal = searchParams.get("sort") ? searchParams.get("sort") : "no-sort";

  function handleOnClickSort(sort) {
    searchParams.set("sort", sort);
    searchParams.delete(sort === "no-sort" ? "sort" : "");
    setSearchParams(searchParams);
  }

  return (
    <div className="min-h-20 flex sm:items-center flex-col gap-y-5 sm:flex-row justify-between pb-7 sm:p-0">
      {haveFilteOptions && (
        <div
          className="w-fit p-3 flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setShowFilterSidebar((is) => !is)}
        >
          <FiFilter size={25} />
          <span className="sm:text-xl">
            {showFilterSidebar ? "Hide " : "Show "}Filter
          </span>
        </div>
      )}
      <div
        className="w-fit flex items-center gap-2 cursor-pointer select-none"
        onClick={() => {}}
      >
        <div className="relative h-full min-w-60">
          <div
            className={`absolute top-1/2 -translate-y-5 z-50 ${
              showSortOptions ? "border-[1px] border-black bg-three" : ""
            } py-1 px-4 rounded-lg`}
          >
            <div
              className={`flex items-center gap-2 ${
                showSortOptions ? "border-b-[1px]" : ""
              } border-black`}
              onClick={() => setShowSortOptions((is) => !is)}
            >
              <span className="sm:text-xl">Sort Order :</span>
              <span className="text-light text-two">{sortVal}</span>
              {showSortOptions ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </div>
            {showSortOptions && (
              <div className="w-full">
                <ul className="w-full">
                  {SORT.map((item, i) => (
                    <li
                      key={i}
                      className="hover:text-lg py-2"
                      onClick={() => handleOnClickSort(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

FilterHeader.propTypes = {
  haveFilteOptions: PropTypes.bool,
};

export default FilterHeader;
