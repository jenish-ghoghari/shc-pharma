import emailjs from "@emailjs/browser";
import { services } from "../Constant";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  contact_user_name: yup.string().required("This field is required"),
  contact_email: yup
    .string()
    .email("Enter valid email format")
    .required("This field is required"),
  mobile_number: yup
    .string()
    .matches(/^\+?[1-9][0-9]{7,14}$/, "Enter valid phone number")
    .required("This field is required"),
  contact_address: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
});

const ContactUs = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = () => {
    emailjs
      .sendForm("service_7z9owba", "template_e7iya0c", form.current, {
        publicKey: "L2GCJ0BYGhd7H5eA-",
      })
      .then(
        () => {
          toast.success("Thank you for Inquiry!");
          reset();
        },
        (error) => {
          toast.error("Message failed to send: " + error.text);
        }
      );
  };

  return (
    <section className="flex flex-col w-full min-h-screen md:flex-row">
      <ToastContainer />
      <div className="flex flex-col justify-center p-10 text-white bg-gray-900 md:w-1/2">
        <h2 className="mb-10 text-2xl font-bold md:text-3xl">
          Send Your Inquiry
        </h2>
        <form
          className="space-y-6"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div>
            <input
              type="text"
              {...register("contact_user_name")}
              placeholder="Your Name*"
              className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
            />
            {errors.contact_user_name && (
              <p className="text-red-500 text-sm">
                {errors.contact_user_name.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register("contact_email")}
              placeholder="Your Email Address*"
              className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
            />
            {errors.contact_email && (
              <p className="text-red-500 text-sm">
                {errors.contact_email.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="tel"
              {...register("mobile_number")}
              placeholder="Mobile Number*"
              className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
            />
            {errors.mobile_number && (
              <p className="text-red-500 text-sm">
                {errors.mobile_number.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("contact_address")}
              placeholder="Address*"
              className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
            />
            {errors.contact_address && (
              <p className="text-red-500 text-sm">
                {errors.contact_address.message}
              </p>
            )}
          </div>
          <div>
            <textarea
              {...register("description")}
              placeholder="How can we help you?"
              className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-center text-gray-900 transition bg-white rounded-lg hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center p-10 bg-white md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold text-center md:text-3xl">
          Why SHC Pharma?
        </h2>
        <p className="mb-8 text-center text-gray-600">
          We are an emerging pharmaceutical company dedicated to providing
          innovative and affordable medications that promote healthier lives and
          meet the needs of our valued customers.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 transition duration-300 border shadow-sm rounded-xl hover:shadow-md"
            >
              <img
                className="w-14 sm:w-20 md:w-24"
                src={item.image}
                alt={item.title}
              />
              <h3 className="mt-4 text-sm font-semibold text-center text-gray-700 sm:text-md">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
