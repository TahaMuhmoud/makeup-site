import PropTypes from "prop-types";
import { Fragment, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { CgClose } from "react-icons/cg";
import { ShowFilterSidebarContext } from "../context/ShowFilterSidebarContext";
import { BiPlus, BiX } from "react-icons/bi";

function FilterSidebar({ filterHeaderSelects }) {
  const [showFilterSidebar, setShowFilterSidebar] = useContext(
    ShowFilterSidebarContext
  );
  const [isChecked, setIsChecked] = useState({
    selected: null,
    checked: false,
  });
  const [showOptions, setShowOptions] = useState({
    selected: null,
    show: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  let paramsObject = Object.create({});
  filterHeaderSelects.map((item) => {
    paramsObject = {
      ...paramsObject,
      [item.searchParam]: searchParams.get(item.searchParam),
    };
  });

  function handleOnChange(opt, searchParam) {
    if (opt !== "no-filter") {
      searchParams.set(searchParam, opt);
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(searchParam);
      setSearchParams(searchParams);
    }
  }
  return (
    <div
      className={`fixed z-50 top-0 w-full h-screen transition-all duration-700 ${
        showFilterSidebar ? "left-0" : "-left-full"
      }`}
    >
      <div
        className="absolute left-0 top-0 w-full h-full -z-10"
        onClick={() => setShowFilterSidebar(false)}
      ></div>
      <div
        className={`min-h-full min-w-full sm:min-w-72 lg:min-w-80 max-h-full max-w-full sm:max-w-72 lg:max-w-80 bg-white p-2`}
      >
        <div className="flex justify-end p-5">
          <CgClose
            cursor="pointer"
            onClick={() => setShowFilterSidebar(false)}
          />
        </div>
        <Button
          innerText={"clear filters"}
          className={"w-full rounded-lg"}
          disabled={searchParams.size == 0}
          onClick={() => {
            if (searchParams.size > 0) {
              Array.from(searchParams.keys()).forEach((param) =>
                searchParams.delete(param == "page" ? "" : param)
              );
              setSearchParams(searchParams);
            }
          }}
        />
        <ul className="w-full">
          {filterHeaderSelects.map((select, i) => (
            <Fragment key={i}>
              <li
                className="w-full px-3 py-5 cursor-pointer"
                onClick={() =>
                  setShowOptions((is) => {
                    return {
                      selected: i,
                      show: is.show && is.selected != i ? is.show : !is.show,
                    };
                  })
                }
              >
                <div className="flex items-center gap-3">
                  <div className="w-full text-xl">{select.label}</div>
                  {showOptions.selected == i && showOptions.show ? (
                    <BiX size={40} />
                  ) : (
                    <BiPlus size={40} />
                  )}
                </div>
              </li>
              {showOptions.selected == i && showOptions.show && (
                <ul className="px-5">
                  {select.options.map((opt, i) => (
                    <li
                      key={i}
                      className="hover:bg-three hover:text-two py-2 flex justify-between cursor-pointer"
                      onClick={() => {
                        handleOnChange(opt, select.searchParam);
                        setIsChecked((ischecked) => {
                          return {
                            selected: i,
                            checked:
                              ischecked.checked && ischecked.selected != i
                                ? ischecked.checked
                                : !ischecked.checked,
                          };
                        });
                      }}
                    >
                      <label htmlFor={opt} className="w-full cursor-pointer">
                        {opt}
                      </label>
                      <span
                        className={`w-4 h-4 ${
                          isChecked.selected == i && isChecked.checked
                            ? "bg-two"
                            : ""
                        } outline outline-black border-2 border-white rounded-full grid place-items-center`}
                      ></span>
                    </li>
                  ))}
                </ul>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

FilterSidebar.propTypes = {
  filterHeaderSelects: PropTypes.array,
};

export default FilterSidebar;
