import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { CircleLoader } from "react-spinners";
import { useLogout } from "../features/auth/useLogout";
import toast from "react-hot-toast";
import Logo from "./Logo";
import { useUser } from "../features/auth/useUser";

function MenuBar({ menuList, showState }) {
  const { user } = useUser();
  const navigate = useNavigate();

  const [showSideMenu, setShowSideMenu] = showState;

  const { logout, isLogingOut } = useLogout();

  function handleLogout() {
    logout("", {
      onSuccess: () => navigate("/login"),
      onError: (err) => toast.error(err.message),
    });
  }

  return (
    <div
      className={`absolute bg-white p-2 top-full right-0 w-full sm:w-96 z-[1000] flex flex-col gap-5 transition-all duration-700  ${
        showSideMenu
          ? "opacity-100 translate-x-0"
          : "delay-1000 opacity-0 translate-x-full"
      }`}
    >
      <div className="col-span-1 text-center">
        <Logo size={"text-logo-md text-two"} />
      </div>
      {/* AVATAR */}
      <div className="flex gap-3 items-center">
        <div className="w-14 aspect-square bg-three rounded-full overflow-hidden">
          <img
            src={
              user?.user_metadata.profile_image
                ? user?.user_metadata.profile_image
                : "/src/assets/profile.jpg"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <span className="italic text-xl font-black">
            {user?.user_metadata.username}
          </span>
          <span className="italic text-black-half">
            {user?.user_metadata.email}
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-0 relative">
        {menuList.map((item, i) => (
          <li
            key={i}
            className={`text-center text-xl w-full h-full transition-all duration-700 bg-three ${
              showSideMenu
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{
              transitionDelay: `${i * 200}ms`,
            }}
            onClick={() => setShowSideMenu(false)}
          >
            <Link
              to={item.link}
              className="block w-full h-full py-3 px-3 hover:bg-two hover:text-white"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        className="w-full"
        rightIcon={
          <CircleLoader size={20} color="white" loading={isLogingOut} />
        }
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </div>
  );
}

MenuBar.propTypes = {
  menuList: PropTypes.array,
  showState: PropTypes.array,
};

export default MenuBar;
