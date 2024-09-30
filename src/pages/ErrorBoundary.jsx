import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  let error = useRouteError();
  return (
    <div className="w-screen h-screen grid place-items-center">
      {error.message}
    </div>
  );
};

export default ErrorBoundary;
