import { CircleLoader } from "react-spinners";
import { COLOR_ONE } from "../utils/constants";

function Spinner() {
  return (
    <div className="w-full h-full grid place-items-center">
      <CircleLoader color={COLOR_ONE} />
    </div>
  );
}

export default Spinner;
