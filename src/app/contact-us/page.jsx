"use client";
import Input from "@/components/Input";
import Loader from "@/components/Loader";
import axios from "axios";
import Ripple from "material-ripple-effects";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const socialJson = [
  {
    icon: "bx bxl-instagram",
    link: "https://www.instagram.com/mirza_rafay_25/",
  },
  {
    icon: "bx bxl-github",
    link: "https://github.com/Mirxa-Rafay-25",
  },
  {
    icon: "bx bxl-linkedin",
    link: "https://www.linkedin.com/in/mirxa-rafay-a810ba329/4",
  },
];

const Page = () => {
  const ripple = new Ripple();
  const { register, handleSubmit, reset } = useForm();
  // const onSubmit = (d) => alert(JSON.stringify(d));

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    setIsLoading(true);
    try {
      var res = await axios.post("/api/contact", e);

      if (res?.data?.success === true) {
        toast.success("Query Submited");
        reset();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-white px-5 my-4 pt-4 pb-20 rounded-lg mx-4 md:mx-0">
        <div className="flex items-center flex-col my-4">
          <h1 className="text-2xl font-medium text-gray-800/90 my-4">
            Have a Project Idea?
          </h1>
          {/* email & phone share links */}
          <div className="flex flex-col gap-3 items-center">
            <a
              className="flex group items-center border rounded-full px-4 py-1 gap-1 cursor-pointer hover:bg-gray-50 text-xs"
              href="mailto: scriptwithahmad@gmail.com"
            >
              <i className="fa-regular fa-envelope text-gray-400 group-hover:text-gray-500"></i>
              <span className="text-gray-500 group-hover:text-gray-600">
                MirxaRafay25@gmail.com
              </span>
            </a>
            <a
              className="flex group items-center border rounded-full px-4 py-1 gap-1 cursor-pointer hover:bg-gray-50 text-xs"
              href="tel:3099968433"
            >
              <i className="fa-solid fa-phone text-gray-400 group-hover:text-gray-500"></i>
              <span className="text-gray-500 group-hover:text-gray-600">
                +92 324 8356101
              </span>
            </a>
          </div>
          {/* Social Links */}
          <div className="flex items-center gap-2 my-4">
            {socialJson.map((v, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-full h-8 w-8 cursor-pointer hover:bg-gray-100 group transition-all"
              >
                <Link
                  href={v?.link}
                  target="_blank"
                  className="h-full w-full rounded-full flex items-center justify-center"
                >
                  <i
                    className={`${v.icon} text-gray-400 group-hover:text-gray-600 transition-all`}
                  ></i>
                </Link>
              </div>
            ))}
          </div>
          {/* Form for contact */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="my-2 flex flex-col gap-4 w-fit"
          >
            {/* Name */}
            <Input
              type="text"
              inputText="Enter Name"
              register={register("name")}
            />
            <Input
              type="text"
              inputText="Enter Email"
              register={register("email")}
            />
            <Input
              type="phone"
              inputText="Enter Phone"
              register={register("contactNo")}
            />
            {/* Message */}
            <Input type="textarea" register={register("message")} />
            <button
              disabled={isLoading}
              onMouseUp={(e) => ripple.create(e, "light")}
              className="planeBtn flex items-center mb-4 gap-2 justify-center group bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-full transition-all px-5 py-2.5 duration-300 relative"
            >
              {isLoading ? "Proccessing...." : "Send Message"}
              <i
                className={`fa-regular hoverPlane overflow-hidden fa-paper-plane text-xs group-hover:translate-x-1 transition-all ${
                  isLoading ? "plane text-gray-200" : "gray-200"
                }`}
              ></i>
            </button>
          </form>
          <p className="text-xs text-gray-500 mb-2">
            © Copyright 2023. All rights Reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made by <span className="font-semibold">Muhammad Ahmad</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
