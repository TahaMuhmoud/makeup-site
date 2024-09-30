import { Outlet } from "react-router-dom";
import NavBar from "./features/main/NavBar";
import SearchOverlay from "./features/home/SearchOverlay";
import { useContext } from "react";
import { SearchOverlayContext } from "./context/SearchOverlayContext";
import CopyRight from "./components/CopyRight";
import AnnouncementBanner from "./components/AnnouncementBanner";
import { ANNOUNCEMENTS } from "./utils/constants";
import Footer from "./features/home/Footer";
import { Toaster } from "react-hot-toast";
import { useProducts } from "./features/products/useProducts";
import FullPageSpinner from "./components/FullPageSpinner";
import { useDarkMode } from "./context/useDarkMode";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useWindowScroll } from "./features/main/useWindowScroll";
import { useProductsMostReated } from "./features/home/useProductsMostReated";

function AppLayout() {
  let { y, h } = useWindowScroll();

  const [darkMode] = useDarkMode();

  document.body.setAttribute("data-mode", darkMode ? "dark" : "");

  useProducts();
  const { isLoading } = useProductsMostReated(4.99);

  const [showSearchOverlay] = useContext(SearchOverlayContext);

  function handleGoUp() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }
  return (
    <>
      {isLoading ? (
        <FullPageSpinner />
      ) : (
        <div className="max-w-screen h-full overflow-x-hidden flex flex-col items-center">
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
            }}
          />
          {showSearchOverlay && <SearchOverlay />}
          <AnnouncementBanner announcements={ANNOUNCEMENTS} />
          {/* Navbar */}
          <NavBar />
          {/* Landing Section */}
          <div className="w-full min-h-[calc(100vh-139px)] overflow-hidden mt-5 flex justify-center">
            <div className="container">
              <Outlet />
            </div>
          </div>
          <Footer />
          <CopyRight />
          {y > h && (
            <div
              className="fixed bottom-20 right-7 bg-two rounded-full p-2 cursor-pointer"
              onClick={handleGoUp}
            >
              <MdKeyboardArrowUp size={40} color="white" />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default AppLayout;
