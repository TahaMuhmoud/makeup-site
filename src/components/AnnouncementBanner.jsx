import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function AnnouncementBanner({ announcements }) {
  const [adShowen, setAdShowen] = useState(0);

  useEffect(() => {
    let x = setInterval(() => {
      setAdShowen((ad) => (ad < announcements.length - 1 ? ad + 1 : 0));
    }, 5000);
    return () => clearInterval(x);
  }, [announcements.length]);
  return (
    <div className="w-full text-white bg-black flex items-center justify-center py-1 px-3">
      <div className={`w-full h-full md:text-lg italic text-wrap text-center`}>
        {announcements[adShowen].icon}
        {announcements[adShowen].text}
      </div>
    </div>
  );
}

AnnouncementBanner.propTypes = {
  announcements: PropTypes.array,
};

export default AnnouncementBanner;
