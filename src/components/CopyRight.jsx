import { BiCopyright } from "react-icons/bi";

const CopyRight = () => {
  return (
    <div className="w-full bg-two text-white text-lg flex items-center justify-center gap-1 p-3 sm:p-5">
      <span>el3wamy</span>
      <BiCopyright size={25} />
      <span>2024</span>
    </div>
  );
};

export default CopyRight;
