import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

function LabeledSelect({
  label,
  name,
  options,
  searchParam,
  value = "no-filter",
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  let val = searchParams.get(searchParam)
    ? searchParams.get(searchParam)
    : value;

  function handleOnChange(opt) {
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
    <div className="flex items-center gap-3">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={(e) => handleOnChange(e.target.value)}
        value={val}
        className="outline-none border-2 border-two p-1 text-two"
      >
        {options.map((opt) => (
          <option value={opt} key={opt} className="text-xl">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

LabeledSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  searchParam: PropTypes.string,
  value: PropTypes.string,
};

export default LabeledSelect;
