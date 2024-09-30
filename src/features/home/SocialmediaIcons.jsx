import { Fragment } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const SOCIAL_MEDIA_ICONS = [
  {
    title: "facebook",
    link: "https://www.facebook.com/",
    icon: <FaFacebook className="text-4xl sm:text-5xl" />,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/",
    icon: <FaInstagram className="text-4xl sm:text-5xl" />,
  },
  {
    title: "twitter",
    link: "https://twitter.com/",
    icon: <FaTwitter className="text-4xl sm:text-5xl" />,
  },
  {
    title: "youtube",
    link: "https://www.youtube.com/",
    icon: <FaYoutube className="text-4xl sm:text-5xl" />,
  },
  {
    title: "pintrest",
    link: "https://www.pintrest.com/",
    icon: <FaPinterest className="text-4xl sm:text-5xl" />,
  },
];

const SocialmediaIcons = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl font-black italic">Social Media</div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {SOCIAL_MEDIA_ICONS.map((icon, i) => (
          <Fragment key={i}>
            <a
              href={icon.link}
              target="_blank"
              className="hover:animate-incScale-high"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={icon.title}
              data-tooltip-place="top"
            >
              {icon.icon}
            </a>
            <Tooltip id="my-tooltip" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SocialmediaIcons;
