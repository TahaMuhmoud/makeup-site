import { useState } from "react";
import { useSignUp } from "../auth/useSignUp";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PuffLoader } from "react-spinners";
import Button from "../../components/Button";
import { FaCheckDouble } from "react-icons/fa6";
import PasswordInput from "../../components/PasswordInput";

function SignUpForm({ setSwitchTo }) {
  const [selectedImage, setSelectedImage] = useState("");
  //
  const { signup, isLoading } = useSignUp();
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  function onSubmit({ username, email, password, phone, profile_image }) {
    signup(
      {
        email,
        password,
        phone,
        username,
        profile_image,
      },
      {
        onSuccess() {
          setSwitchTo(false);
        },
        onError(err) {
          toast.error(err.message);
        },
      }
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col gap-6 px-7 py-4 text-two text-lg">
        <div className="w-full flex flex-col">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-black/5 border-2 border-two p-2 outline-none text-white"
            placeholder="username"
            {...register("username", {
              reqcomponentsred: "please enter your username",
            })}
          />
          <span className="text-red-600">{errors.username?.message}</span>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
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
            id="sPAss"
            name="password"
            register={register("password", {
              reqcomponentsred: "please enter your password",
            })}
          />

          <span className="text-red-600">{errors.password?.message}</span>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="phone">phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="bg-black/5 border-2 border-two p-2 outline-none text-white"
            placeholder="phone"
            {...register("phone", {
              reqcomponentsred: "please enter your phone",
              minLength: 11,
              maxLength: 11,
            })}
          />
          <span className="text-red-600">{errors.phone?.message}</span>
        </div>
        <div className="flex flex-col gap-3">
          <Button rightIcon={selectedImage ? <FaCheckDouble /> : ""}>
            <label htmlFor="profile_image">
              Choose Profile Image
              <span className="text-three text-sm">(Not reqcomponentsred)</span>
            </label>
          </Button>

          <input
            id="profile_image"
            name="profile_image"
            type="file"
            accept="image/*"
            {...register("profile_image", {
              reqcomponentsred: false,
            })}
            className="w-0 h-0"
            onChange={(e) => setSelectedImage(e.target.files[0].name)}
          />
        </div>
        <Button
          type="submit"
          leftIcon={<PuffLoader color="white" size={25} loading={isLoading} />}
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}

SignUpForm.propTypes = {
  setSwitchTo: PropTypes.func,
};

export default SignUpForm;
