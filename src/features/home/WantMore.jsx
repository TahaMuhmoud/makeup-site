import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";

const WantMore = () => {
  const { handleSubmit, register } = useForm();
  function onSubmit(formData) {
    console.log(formData);
  }
  return (
    <div className="w-full md:w-[350px] px-10 md:p-0">
      <div className="title text-2xl font-black italic">
        WANT MORE FROM BEAUTY BAY?
      </div>
      <p className="text-lg">
        Let’s stay in touch! We promise to send you the latest news, offers, and
        the freshest beauty drops, straight to your inbox.
      </p>
      <div className=" border-b-[1px] border-black">
        <form
          className="flex justify-between items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full text-black">
            <input
              type="text"
              className="w-full h-full outline-none bg-transparent text-xl font-bold text-black py-2"
              placeholder="Your email"
              {...register("email", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="h-full hover:text-white hover:bg-black p-2"
          >
            <BsArrowRight size={30} cursor={"pointer"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default WantMore;
