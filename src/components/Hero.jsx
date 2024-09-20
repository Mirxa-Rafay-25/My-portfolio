"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Ripple from "material-ripple-effects";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import ShinyButton from "./ShinyButton";
import { Github01Icon, InstagramIcon, Linkedin01Icon } from "hugeicons-react";

// import cursor modules
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";

const socialJson = [
  {
    icon: <InstagramIcon size={16} />,
    link: "https://www.instagram.com/mirza_rafay_25/",
  },
  {
    icon: <Github01Icon size={16} />,
    link: "https://github.com/Mirxa-Rafay-25",
  },
  {
    icon: <Linkedin01Icon size={16} />,
    link: "https://www.linkedin.com/in/mirxa-rafay-a810ba329/4",
  },
];

const Hero = () => {

  const ripple = new Ripple();
  const config = {};
  useIPadCursor();

  return (
    <div className="bg-white p-5 my-5 rounded-lg mx-4 md:mx-0 onLoadAnim">
      <div className="flex items-center gap-5 mb-3 flex-col md:flex-row">
        <Image
          width={800}
          height={800}
          alt="Hero Image Here"
          src="/images/mypic1.jpg"
          className="rounded-lg md:w-48 w-full"
        ></Image>
        <div>
          <motion.div
            exit={{ opacity: 0, translateY: 20 }}
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0, transition: { delay: 2 } }}
            className="flex items-center justify-between mb-3">
            <IPadCursorProvider config={config}>
              <button
                data-cursor="block"
                data-cursor-style="border-radius: 99px"
                onMouseUp={(e) => ripple.create(e, "dark")}
                className="bg-sky-100 text-sky-600 text-xs pl-6 pr-3.5 pb-2.5 rounded-full relative"
              >
                <div
                  className="relative flex h-2 w-2 top-3 -left-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </div>
                Ful-Stack Web-Developer
              </button>
            </IPadCursorProvider>
            <div className="flex items-center gap-2">
              {socialJson.map((v, i) => (
                <div
                  key={i}
                  onMouseUp={(e) => ripple.create(e, "dark")}
                  className="bg-gray-50 rounded-full h-8 w-8 cursor-pointer hover:bg-gray-100 group transition-all"
                >
                  <IPadCursorProvider config={config}>
                    <Link
                      key={i}
                      href={v.link}
                      target="_blank"
                      data-cursor="block"
                      data-cursor-style="border-radius: 99px;"
                      className="h-full w-full rounded-full flex items-center justify-center"
                    >
                      <div
                        className={`text-gray-400 group-hover:text-gray-600 transition-all`}
                      >
                        {v.icon}
                      </div>
                    </Link>
                  </IPadCursorProvider>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="my-4">

            <motion.h1
              initial={{ opacity: 0, translateX: -20 }}
              animate={{ opacity: 1, translateX: 0, transition: { delay: 2.2 } }}
              exit={{ opacity: 0, translateX: 20 }}
              className="text-gray-600 my-2 font-semibold text-2xl md:text-3xl">
              Hi there! I&lsquo;m Muhammad Rafay!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0, transition: { delay: 2.4 } }}
              exit={{ opacity: 0, translateY: 20 }}
              className="text-gray-600 text-sm w-full md:max-w-[75%]">
              I&lsquo;m a versatile creator shaping captivating experiences
              across diverse design landscapes
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <motion.div
              initial={{ opacity: 0, translateX: -20 }}
              animate={{ opacity: 1, translateX: 0, transition: { delay: 2.6 } }}
              exit={{ opacity: 0, translateX: 20 }}
              className="text-gray-400 flex items-center gap-1 mb-2 md:mb-0">
              <i className="fa-solid fa-location-dot text-xs"></i>
              <span className="text-gray-500 text-sm">
                Punjab, Pakistan
              </span>
            </motion.div>
            <motion.div initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0, transition: { delay: 2.8 } }}
              exit={{ opacity: 0, translateY: 20 }}
            >
              <ShinyButton
                link="/about"
                title="More about Me"
                className="px-4 py-1.5 text-xs"
              />

            </motion.div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 8,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          425: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        className="mySwiper mt-4 whitespace-nowrap masking"
        modules={[Autoplay]}
      >
        {["HTML 5", "CSS 3", "JavaScript", "React JS", "MongoDB", "Node JS", "Express JS", "Next JS", "Tailwind"].map((v, i) => (
          <SwiperSlide
            key={i}
            className="text-gray-900/80 text-xs">{v}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
