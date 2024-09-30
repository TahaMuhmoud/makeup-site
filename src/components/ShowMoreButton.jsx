import PropTypes from "prop-types";
import Button from "./Button";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

function ShowMoreButton({
  isShow = false,
  setIsShow = () => {},
  innerText = "",
  showIcon = true,
  onClick = () => {},
  className = "",
}) {
  return (
    <Button
      innerText={innerText}
      rightIcon={
        showIcon ? (
          !isShow ? (
            <MdKeyboardDoubleArrowDown size={25} />
          ) : (
            <MdKeyboardDoubleArrowUp size={25} />
          )
        ) : (
          ""
        )
      }
      className={`justify-center ${className}`}
      onClick={() => {
        onClick();
        setIsShow((show) => !show);
      }}
    />
  );
}

ShowMoreButton.propTypes = {
  isShow: PropTypes.bool,
  setIsShow: PropTypes.func,
  innerText: PropTypes.string,
  showIcon: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ShowMoreButton;
