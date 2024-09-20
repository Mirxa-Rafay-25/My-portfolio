"use client";
import React from "react";
import Image from "next/image";
import Ripple from "material-ripple-effects";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import Education from "@/components/Education";
import ContactUs from "@/components/ContactUs";
import Experience from "@/components/Experience";
import Link from "next/link";
import ShinyButton from "@/components/ShinyButton";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import { Github01Icon, InstagramIcon, Linkedin01Icon } from "hugeicons-react";
import { motion } from "framer-motion";

const socialJson = [
  {
    icon: <InstagramIcon size={16} />,
    link: "https://www.instagram.com/scriptwithahmad",
  },
  {
    icon: <Github01Icon size={16} />,
    link: "https://github.com/scriptwithahmad",
  },
  {
    icon: <Linkedin01Icon size={16} />,
    link: "https://pk.linkedin.com/in/muhammad-ahmad-6b4303264",
  },
];

const icons = [
  "/icons/html.webp",
  "/icons/css.webp",
  "/icons/js.webp",
  "/icons/reactjs.webp",
  "/tech/nextjs.png",
  "/tech/mongodb.png",
  "/tech/nodejs.webp",
  "/icons/tailwindcss.webp",
  "/icons/chatgpt.webp",
  "/icons/frammer.webp",
  "/icons/github.webp",
  "/icons/jwt.webp",
  "/icons/express.webp",
  "/icons/figma.webp",
];

const Page = () => {
  const ripple = new Ripple();

  const config = {};
  useIPadCursor();

  return (
    <>
      {/* ------------- About ------------- */}
      <div className="bg-white p-5 my-5 mx-4 lg:mx-0 rounded-lg onLoadAnim">
        <div className="flex items-center md:flex-row flex-col gap-5 mb-3 border-b border-dotted pb-6">
          <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, translateX: 20 }}
          >
            <Image
              width={800}
              height={800}
              alt="Hero Image Here"
              src="/images/hero3.jpg"
              className="rounded-lg md:w-48"
            ></Image>
          </motion.div>
          <div>
            <div className="flex items-center justify-between">
              <IPadCursorProvider config={config}>
                <motion.button
                  initial={{ opacity: 0, translateY: -20 }}
                  animate={{ opacity: 1, translateY: 0, transition: { delay: 0.4 } }}
                  exit={{ opacity: 0, translateY: 20 }}
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
                  Available for work
                </motion.button>
              </IPadCursorProvider>
              <div className="flex items-center gap-2">
                {socialJson.map((v, i) => (
                  <motion.div
                    key={i}
                    onMouseUp={(e) => ripple.create(e, "dark")}
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: i * 0.4 }}
                    exit={{ opacity: 0, translateY: 20 }}
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
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="my-4">
              {/* <span className="text-xs text-gray-500">
                Where creativity meets technology
              </span> */}
              <motion.h1
                initial={{ opacity: 0, translateX: -20 }}
                animate={{ opacity: 1, translateX: 0, transition: { delay: 0.6 } }}
                exit={{ opacity: 0, translateX: 20 }}
                className="text-gray-600 mb-2 font-semibold text-3xl">
                Get to Know Me
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0, transition: { delay: 0.8 } }}
                exit={{ opacity: 0, translateY: 20 }}
                className="text-gray-600 text-sm w-full md:max-w-[75%]">
                Crafting captivating experiences across diverse design
                landscapes with versatility and flair.
              </motion.p>
            </div>
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, translateX: -20 }}
                animate={{ opacity: 1, translateX: 0, transition: { delay: 1 } }}
                exit={{ opacity: 0, translateX: 20 }}
                className="text-gray-400 flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-xs"></i>
                <span
                  className="text-gray-500 text-sm">Punjab, Pakistan</span>
              </motion.div>
              <div className="flex items-center gap-2">
                <motion.div initial={{ opacity: 0, translateY: -20 }}
                  animate={{ opacity: 1, translateY: 0, transition: { delay: 1.2 } }}
                  exit={{ opacity: 0, translateY: 20 }}
                >

                  {/* <ShinyButton
                    title="Resume"
                    className="px-5 py-2 text-sm"
                    link="https://res.cloudinary.com/dmyrswz0r/image/upload/v1724522871/vom5p2qtjjca5pza4lkc.pdf"
                  /> */}
                </motion.div>
                <motion.div initial={{ opacity: 0, translateY: -20 }}
                  animate={{ opacity: 1, translateY: 0, transition: { delay: 1.4 } }}
                  exit={{ opacity: 0, translateY: 20 }}
                >

                  {/* <ShinyButton
                    link="/"
                    title=""
                    target="blank"
                    download={"/resume.jpeg"}
                    className="fa-solid fa-download text-gray-400 h-8 w-8 p-2.5 text-xs"
                  /> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <motion.p
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0, transition: { delay: 1.6 } }}
            exit={{ opacity: 0, translateX: 20 }}
            className="text-gray-500 text-xs 2xl:text-sm leading-5">
            I&lsquo;m dedicated to crafting exceptional user experiences and
            interfaces that go beyond websites and apps. My passion for the
            intersection of design and technology drives me to transform complex
            ideas into intuitive, visually stunning interactions. I leverage the
            full spectrum of UX principles to create products that are both
            aesthetically engaging and seamlessly functional.
          </motion.p>
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
          className="mt-4 whitespace-nowrap masking"
          modules={[Autoplay]}
        >
          {icons.map((image, index) => {
            return (
              <SwiperSlide key={index} className="text-gray-900 text-xs">
                <motion.img
                  src={image}
                  alt="image here"
                  className="w-8 aspect-[3/4] object-contain"
                  initial={{ opacity: 0, translateX: -20 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: 20 }}
                  transition={{ delay: index * 0.4 }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* ------------- Education ------------- */}
      <Education />

      <div className="bg-white p-5 my-5 rounded-lg mx-4 md:mx-0 onLoadAnims2">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-medium text-gray-800/90">Tech Stack</h1>
          <ShinyButton
            link="/tech-stack"
            title="Full Stack"
            className="px-5 py-2 text-sm"
          />
        </div>
        <div className="mb-2">
          <motion.p
            animate={{ translateX: 0, }}
            whileInView={{ opacity: 1, transform: "translateX(0)", }}
            initial={{ opacity: 0, transform: "translateX(30px)", }}
            className="text-gray-500 text-xs md:text-sm leading-[1.6]">
            My design and development arsenal encompasses a versatile range of
            tools such as Framer, Figma Suite for crafting intuitive user
            interfaces. Beyond these, I&lsquo;m adept in React JS and React
            Native, which empower me to create dynamic, cross-platform user
            experiences. While these are my primary tools, my skill set is
            ever-expanding, not confined to these alone, ensuring adaptability
            and innovation in all my projects.
          </motion.p>
        </div>
      </div>

      {/* ------------- Experience ------------- */}
      <Experience />
      {/* ------------- ContactUs ------------- */}
      <ContactUs />
    </>
  );
};

export default Page;
