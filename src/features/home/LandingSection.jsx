import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useWindowResize } from "../main/useWindowResize";
import { useEffect, useState } from "react";
import { IMGS } from "../../utils/constants";

function LandingSection() {
  const windowSize = useWindowResize();
  const navigate = useNavigate();
  const [imgIndx, setImgIndx] = useState(0);

  useEffect(() => {
    let r = setInterval(() => {
      setImgIndx((x) => (x < IMGS.length - 1 ? x + 1 : 0));
    }, 3000);
    return () => {
      clearInterval(r);
    };
  }, [imgIndx]);
  return (
    <>
      {windowSize == "desktop" ? (
        <div className="w-full grid grid-cols-6 gap-x-2 gap-y-2 h-[500px] md:h-[700px] p-2 relative rounded-[45px] bg-three">
          <div className="h-full col-span-4 bg-two rounded-[45px] overflow-hidden">
            <div
              className="rounded-[45px] absolute top-1/2 -translate-y-1/2 right-1/3 translate-x-1/2 bg-three border-4 border-three
             outline outline-two px-5 xl:px-20 py-5 flex flex-col items-center gap-5"
            >
              <Logo size={"text-logo-md"} color={"text-two"} />
              <span className="font-second text-5xl font-semibold">
                Empower Your Beauty
              </span>
              <span className="font-second text-4xl font-medium">
                # Shop Beauty Products Online in Egypt
              </span>
              <span className="text-4xl font-medium">
                <Button className="rounded-lg" onClick={() => navigate("/all")}>
                  SHOP NOW
                </Button>
              </span>
            </div>

            <img
              src={IMGS[imgIndx]["src"]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-6 grid-rows-13 gap-x-2 gap-y-2 h-[500px] md:h-[700px] p-2 rounded-[45px] bg-three">
          <div className="col-span-2 row-span-6 rounded-br-[20px] rounded-tl-[45px] overflow-hidden border border-black">
            <img
              src={IMGS[0]["src"]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-3 rounded-bl-[20px] rounded-tr-[45px] overflow-hidden border border-black">
            <img
              src={IMGS[1]["src"]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-3 rounded-bl-[20px] rounded-tl-[20px] overflow-hidden border border-black">
            <img
              src={IMGS[2]["src"]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-6 row-span-2 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-4xl font-second">Empower Your Beauty</span>
            <Button className="text-sm">SHOP NOW</Button>
          </div>
          <div className="col-span-6 row-span-3 rounded-br-[45px] rounded-bl-[45px] overflow-hidden border border-black">
            <img
              src={IMGS[3]["src"]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default LandingSection;
