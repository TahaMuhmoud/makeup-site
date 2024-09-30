import PropTypes from "prop-types";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function PasswordInput({ id, name, register }) {
  const [showPass, setShowPass] = useState(true);
  return (
    <div className="relative">
      <input
        type={showPass ? "text" : "password"}
        name={name}
        id={id}
        className="w-full bg-black/5 border-2 border-two p-2 outline-none"
        placeholder="Password"
        {...register}
      />
      {!showPass ? (
        <FaEyeSlash
          size={20}
          cursor="pointer"
          className="absolute top-1/2 right-5 -translate-y-1/2"
          onClick={() => setShowPass(true)}
        />
      ) : (
        <FaEye
          size={20}
          cursor="pointer"
          className="absolute top-1/2 right-5 -translate-y-1/2"
          onClick={() => setShowPass(false)}
        />
      )}
    </div>
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
};

export default PasswordInput;
