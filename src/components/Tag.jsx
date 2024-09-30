import PropTypes from "prop-types";

function Tag({ label }) {
  return (
    <div
      className="relative w-fit px-3 py-1 border-2 border-two rounded-full flex items-center gap-2 overflow-hidden group transition-all
      duration-[1000ms] hover:text-white"
    >
      <span
        className="block w-3 aspect-square rounded-full bg-two transition-all
      duration-[2000ms] group-hover:scale-[100] group-hover:absolute -z-10"
      ></span>
      <span className="text-lg">{label}</span>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
