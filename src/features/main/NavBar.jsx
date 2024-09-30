import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiHeart3Line } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import { useDarkMode } from "../../context/useDarkMode";
import { useNavigate } from "react-router-dom";
import { useCartProducts } from "../cart/useCartProducts";
import { useFavoritesProducts } from "../favotites/useFavoritesProducts";

import { useContext, useState } from "react";
import MenuBar from "../../components/MenuBar";
import { BiMoon } from "react-icons/bi";
import { FaCloudSun, FaSearch } from "react-icons/fa";
import { SearchOverlayContext } from "../../context/SearchOverlayContext";
import { CircleLoader } from "react-spinners";

const MENU_LINKS = [
  { text: "Home", link: "/" },
  { text: "New", link: "/all" },
  { text: "Most Rated", link: "/most-rated" },
  { text: "Cart", link: "/cart" },
  { text: "Favorites", link: "/favorites" },
];

function NavBar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [showSideMenu, setShowSideMenu] = useState(false);

  const navigate = useNavigate();

  let { cartProducts, isLoading } = useCartProducts();

  let { favorites, isLoadingFavorites } = useFavoritesProducts();

  const [, setShowSearchOverlay] = useContext(SearchOverlayContext);

  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <div className="relative w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-x-10 gap-y-4 p-2 px-5">
        <MenuBar
          menuList={MENU_LINKS}
          showState={[showSideMenu, setShowSideMenu]}
        />
        {/* LOGO */}
        <Logo size={"text-logo-sm"} />
        {/* HEART ICON */}

        <div className="w-full flex justify-between sm:justify-end gap-10 px-5 sm:px-0">
          {isLoadingFavorites ? (
            <CircleLoader size={25} />
          ) : (
            <div
              className="relative w-fit"
              onClick={() => navigate("/favorites")}
            >
              <span className="bg-two w-5 aspect-square rounded-full text-sm font-bold text-white cursor-pointer grid place-items-center absolute -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2">
                {favorites?.length}
              </span>
              <RiHeart3Line cursor="pointer" size={35} />
            </div>
          )}

          {/* BAG ICON */}
          {isLoading ? (
            <CircleLoader size={25} />
          ) : (
            <div className="relative w-fit" onClick={() => navigate("/cart")}>
              <span className="bg-two w-5 aspect-square rounded-full text-sm font-bold text-white cursor-pointer grid place-items-center absolute -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2">
                {cartProducts?.length}
              </span>
              <SlHandbag cursor="pointer" size={35} className="" />
            </div>
          )}

          <FaSearch
            size={30}
            className="hidden lg:block cursor-pointer"
            onClick={() => setShowSearchOverlay(true)}
          />
          {/* DARK ICON */}
          <div className="relative">
            {
              <>
                <FaCloudSun
                  size={35}
                  cursor="pointer"
                  className={`hover:text-two transition-all duration-1000 ${
                    !darkMode ? "opacity-0" : ""
                  }`}
                  onClick={() => setDarkMode((is) => !is)}
                />
                <BiMoon
                  size={35}
                  cursor="pointer"
                  className={`absolute top-0 hover:text-two transition-all duration-1000 ${
                    darkMode ? "opacity-0" : ""
                  }`}
                  onClick={() => setDarkMode((is) => !is)}
                />
              </>
            }
          </div>
          {/* MENU ICON */}
          <HiOutlineMenuAlt3
            size={35}
            cursor="pointer"
            className={`hover:text-two transition-all duration-1000`}
            onClick={() => setShowSideMenu((is) => !is)}
          />
        </div>
      </div>
      <div className={`w-5/6 lg:hidden`}>
        <SearchBar />
      </div>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
