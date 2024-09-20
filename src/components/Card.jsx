"use client";
import React from "react";
import Ripple from "material-ripple-effects";
import TextRevealEffect from "./TextRevealEffect";
import Link from "next/link";

const Card = (props) => {
  const ripple = new Ripple();
  return (
    <>
      <div className="relative group overflow-hidden">
        <div className="border border-dotted rounded-lg p-4 bg-[url('/images/bg.png')] bg-center bg-cover bg-no-repeat">
          {/* technology used --------- */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="bg-indigo-50 px-4 md:py-1 py-0.5 rounded-full">
              <span className="text-indigo-500 text-xs whitespace-nowrap">
                {props.technology}
              </span>
            </div>
          </div>
          <div>
            <img
              src={props.image}
              alt="Image Here"
              className="w-28 object-left h-16 object-contain my-4"
            />
            <h1 className="text-2xl text-gray-800 font-semibold mb-3">
              {props.title}
            </h1>
            <p className="text-sm line-clamp-2 overflow-hidden h-11 text-gray-700/80">
              {props.desc}
            </p>
            <Link
              target="_blank"
              href={props.link}
              onMouseUp={(e) => ripple.create(e, "dark")}
              className="flex items-center gap-2 justify-center group border hover:bg-gray-100 text-gray-600 text-sm rounded-full transition-all px-4 py-2 duration-300 mt-4"
            >
              View Project
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-all"></i>
            </Link>
          </div>
        </div>
        <img
          alt="image here"
          className="opacity-5 w-44 absolute -right-16 -bottom-16 group-hover:scale-110 transition-all duration-500 delay-100"
          src="https://res.cloudinary.com/dmyrswz0r/image/upload/v1713297390/dwxzdvpfpxhgqcsv2bk3.png"
        />
      </div>
    </>
  );
};

export default Card;
