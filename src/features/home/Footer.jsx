import SocialmediaIcons from "./SocialmediaIcons";
import PayWays from "./PayWays";
import ReasonsToLove from "./ReasonsToLove";
import WantMore from "./WantMore";

const Footer = () => {
  return (
    <div className="bg-three p-5 flex flex-col gap-10 container">
      <ReasonsToLove />
      {/*  */}
      <div className="flex justify-around flex-wrap gap-5">
        <SocialmediaIcons />
        <WantMore />
      </div>
      {/*  */}
      <PayWays />
    </div>
  );
};

export default Footer;
