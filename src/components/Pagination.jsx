import PropTypes from "prop-types";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Button from "./Button";
import { PAGE_SIZE } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { getRangOfPage } from "../utils/helpers";

function Pagination({ numOfItems }) {
  const [searchParams, setSearchParams] = useSearchParams();

  let currPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const numPages = Math.ceil(numOfItems / PAGE_SIZE);

  const { from, to } = getRangOfPage(numOfItems, currPage, PAGE_SIZE);

  function handleNextOnClick() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
    searchParams.set("page", currPage < numPages ? currPage + 1 : currPage);
    setSearchParams(searchParams);
  }
  function handlePreviousOnClick() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
    searchParams.set("page", currPage > 1 ? currPage - 1 : currPage);
    setSearchParams(searchParams);
  }
  return (
    <div className="w-full p-4 flex flex-col gap-3 sm:flex-row justify-between items-center">
      <div className="">
        show from <span className="text-two text-xl">{from}</span> to{" "}
        <span className="text-two text-xl">{to}</span> from {numOfItems}
      </div>
      <div className="flex items-center gap-3">
        <Button
          leftIcon={<MdKeyboardDoubleArrowLeft size={25} />}
          className={"py-3 "}
          disabled={currPage == 1}
          onClick={handlePreviousOnClick}
        />
        <span className="text-two text-xl">{currPage}</span>
        <Button
          leftIcon={<MdKeyboardDoubleArrowRight size={25} />}
          className={"py-3"}
          disabled={currPage == numPages}
          onClick={handleNextOnClick}
        />
      </div>
    </div>
  );
}

Pagination.propTypes = {
  numOfItems: PropTypes.number,
};

export default Pagination;
