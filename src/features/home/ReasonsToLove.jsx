import { BiStore } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineRestore } from "react-icons/md";

const ReasonsToLove = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="section-header flex flex-col items-center text-center">
        REASONS TO LOVE PRETTY STORE
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="col-span-1 flex flex-col items-center text-center">
          <div className="icon">
            <FaShippingFast className="text-6xl md:text-7xl" />
          </div>
          <div className="title text-2xl font-black">Cash On Delivery</div>
          <div className="info font-medium">Cash on delivery fee is 15 $</div>
        </div>
        <div className="col-span-1 flex flex-col items-center text-center">
          <div className="icon">
            <BiStore className="text-6xl md:text-7xl" />
          </div>
          <div className="title text-2xl font-black">
            Product Replacement at Store
          </div>
          <div className="info font-medium">Buy online, change in store</div>
        </div>
        <div className="col-span-1 flex flex-col items-center text-center">
          <div className="icon">
            <MdOutlineRestore className="text-6xl md:text-7xl" />
          </div>
          <div className="title text-2xl font-black">
            We have free 60 day returns
          </div>
          <div className="info font-medium">
            Learn the deets on our FAQs page.
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center text-center">
          <div className="icon">
            <CiDeliveryTruck className="text-6xl md:text-7xl" />
          </div>
          <div className="title text-2xl font-black">Easy & Free Return</div>
          <div className="info font-medium">Return Within 30 Days</div>
        </div>
      </div>
    </div>
  );
};

export default ReasonsToLove;
