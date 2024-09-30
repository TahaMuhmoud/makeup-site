import PropTypes from "prop-types";

function Button({
  innerText,
  leftIcon,
  rightIcon,
  className,
  onClick,
  disabled,
  children,
  type = "button",
}) {
  return (
    <button
      className={`px-3 py-1 sm:py-2 bg-two text-white text-lg sm:text-xl flex gap-2 items-center justify-center 
        hover:text-two hover:bg-white hover:outline hover:outline-1 hover:outline-two
        disabled:outline-none disabled:border-[1px] disabled:border-black/40 disabled:bg-three ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {leftIcon} {innerText}
      {children} {rightIcon}
    </button>
  );
}

Button.propTypes = {
  innerText: PropTypes.string,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  type: PropTypes.string,
};

export default Button;
