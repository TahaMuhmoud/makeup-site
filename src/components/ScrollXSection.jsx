import PropTypes from "prop-types";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
function ScrollXSection({ header, items, itemOnClick }) {
  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <div className="w-full overflow-x-hidden px-4 lg:px-20 container">
      <div className="section-header text-two flex flex-col items-center pb-5 text-center">
        {header}
      </div>
      <div
        className="scrollbar flex gap-5 p-5 overflow-x-scroll"
        {...events}
        ref={ref}
      >
        {items.map((item) => (
          <div
            key={item}
            className="min-w-40 aspect-square rounded-lg p-1 grid place-items-center text-xl text-center font-black italic bg-three cursor-pointer overflow-hidden
             hover:text-two hover:outline hover:outline-two hover:outline-2 hover:animate-incScale select-none"
            onClick={() => itemOnClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

ScrollXSection.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array.isRequired,
  itemOnClick: PropTypes.func,
};

export default ScrollXSection;
