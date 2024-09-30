import Button from "../components/Button";
import Logo from "../components/Logo";
import { useState } from "react";
import SignUpForm from "../features/Login/SignUpForm";
import LoginForm from "../features/Login/LoginForm";
import { useWindowResize } from "../features/main/useWindowResize";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const LoginPage = () => {
  const [switchTo, setSwitchTo] = useState(false);
  let windowSize = useWindowResize();

  return (
    <div className="w-screen h-screen p-5 grid place-items-center overflow-x-hidden">
      <div className="absolute w-full h-full filter blur-sm bg-[url('/lips.png')] bg-no-repeat bg-cover bg-center "></div>
      {windowSize == "desktop" ? (
        <div
          className={`relative w-full lg:max-w-[960px] xl:max-w-[1200px] h-[700px] flex`}
        >
          <div className="absolute z-20 top-0 left-1/2 -translate-x-1/2 flex">
            <Button
              className="w-24 disabled:text-main-dark"
              disabled={!switchTo}
              onClick={() => setSwitchTo((is) => !is)}
            >
              Login
            </Button>
            <Button
              className="w-24 disabled:text-main-dark"
              disabled={switchTo}
              onClick={() => setSwitchTo((is) => !is)}
            >
              Sign Up
            </Button>
          </div>

          <div
            className={`h-full absolute z-10 transition-all duration-1000 ${
              !switchTo ? "translate-x-full" : "-translate-x-0"
            } min-w-full lg:min-w-[480px] xl:min-w-[600px] bg-[url('/lips.png')]  bg-no-repeat bg-cover bg-center`}
          ></div>

          <div className="bg-main-dark h-full min-w-full lg:min-w-[480px] xl:min-w-[600px] flex flex-col justify-center lg:px-16 xl:px-20">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <Logo size={"text-logo-xl text-two"} />
              </div>
              {!switchTo && <LoginForm />}
            </div>
          </div>

          {/*  */}

          <div className="bg-main-dark h-full min-w-full lg:min-w-[480px] xl:min-w-[600px] flex flex-col justify-center lg:px-14 xl:px-20">
            <div className="flex justify-center">
              <Logo size={"text-logo-xl text-two"} />
            </div>
            {switchTo && <SignUpForm setSwitchTo={setSwitchTo} />}
          </div>
        </div>
      ) : (
        <div className={`relative w-full`}>
          <div className="bg-main-dark w-full h-full flex flex-col items-center gap-5 py-5 justify-center lg:px-14 xl:px-20">
            <div className="flex justify-center">
              <Logo size={"text-logo-xl text-two"} />
            </div>
            {switchTo ? (
              <SignUpForm setSwitchTo={setSwitchTo} />
            ) : (
              <LoginForm />
            )}
            <Button
              className=""
              rightIcon={<MdKeyboardDoubleArrowRight />}
              leftIcon={<MdKeyboardDoubleArrowLeft />}
              onClick={() => setSwitchTo((is) => !is)}
            >
              {!switchTo ? "Go To Sign Up" : "Go To Login"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
