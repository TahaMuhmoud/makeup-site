import Button from "../../components/Button";
import { PuffLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "../auth/useLogin";
import toast from "react-hot-toast";
import PasswordInput from "../../components/PasswordInput";
const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "taha@email.com",
      password: "taha1234",
    },
  });

  const { isLoading, login } = useLogin();

  function onSubmit(formData) {
    login(formData, {
      onSuccess: () => navigate("/"),
      onError: (err) => toast.error(err.message),
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col gap-10 p-4 text-two text-lg ">
        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="lemail"
            className="bg-black/5 border-2 border-two p-2 outline-none text-white"
            placeholder="Email"
            {...register("email", {
              reqcomponentsred: "please enter your email",
            })}
          />
          <span className="text-red-600">{errors.email?.message}</span>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="password">Password</label>
          <PasswordInput
            id="lPAss"
            name={"password"}
            register={register("password", {
              reqcomponentsred: "please enter your password",
            })}
          />

          <span className="text-red-600">{errors.password?.message}</span>
        </div>
        <Button
          type="submit"
          leftIcon={<PuffLoader color="white" size={25} loading={isLoading} />}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
