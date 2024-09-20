"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ShinyButton from "./ShinyButton";
import Ripple from "material-ripple-effects";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";

const projectsData = [
  {
    title: "SpaceX",
    link: "https://spacex-portfolio-eight.vercel.app/",
    image:
      "/spacex.png",
    usedTechnology: ["Next JS", "Framer-Motion", "Tailwind Css"],
    desc: "Venture into the cosmos with our interactive space-themed Next.js website, powered by Framer Motion. Enjoy fluid animations that bring the mysteries of the universe to life, with smooth transitions and dynamic effects that enhance the user experience. Each element is thoughtfully animated, providing a captivating journey across the stars, with performance optimization ensuring seamless navigation and responsiveness across all devices.",
  },

  {
    title: "Fronted Blogs",
    link: "https://frontend-blog-web.vercel.app/",
    image:
      "/blog.png",
    usedTechnology: ["HTMl", "CSS", "BootStrap"],
    desc: "Venture into the cosmos with our interactive space-themed Next.js website, powered by Framer Motion. Enjoy fluid animations that bring the mysteries of the universe to life, with smooth transitions and dynamic effects that enhance the user experience. Each element is thoughtfully animated, providing a captivating journey across the stars, with performance optimization ensuring seamless navigation and responsiveness across all devices.",
  },
];

const CaseStudyProjects = () => {

  const ripple = new Ripple();
  const config = {};
  useIPadCursor();


  return (
    <div className="bg-white p-5 my-5 rounded-lg mx-4 md:mx-0 onLoadAnim">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h1 className="text-lg md:text-xl font-medium text-gray-800/90 mb-2 md:mb-0">
          Case Studies and Explorations
        </h1>
        <ShinyButton
          link="/my-projects"
          title="All Projects"
          className="px-5 py-2 text-sm"
        />
      </div>
      {/* Card main div */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((v, i) => {
          return (
            <motion.div key={i}
              initial={{ opacity: 0, transform: "scale(0.8) translateX(30px)", }}
              whileInView={{ opacity: 1, transform: "scale(1)", }}
              data-cursor-style="border-radius: 8px"
              animate={{ translateX: 0, }}
              // viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.2,
              }}
              className="relative group overflow-hidden">
              <div className="border border-dotted hover:border-gray-300 hover:bg-gray-50 cursor-pointer rounded-lg p-4 bg-[url('/images/bg.png')] bg-center bg-cover bg-no-repeat">
                {/* technology used --------- */}
                <div className="flex items-center gap-2 flex-wrap">
                  {v.usedTechnology.map((name, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-indigo-50 px-4 md:py-1 py-0.5 rounded-full"
                      >
                        <span className="text-indigo-500 text-xs whitespace-nowrap">
                          {name}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <img
                    src={v.image}
                    alt="Image Here"
                    className="w-28 object-left h-16 object-contain my-4"
                  />
                  <h1 className="text-2xl text-gray-800 font-semibold mb-3">
                    {v.title}
                  </h1>
                  <p className="text-sm line-clamp-2 overflow-hidden h-11 text-gray-700/80">
                    {v.desc}
                  </p>
                  <IPadCursorProvider config={config}>
                    <Link
                      href={v.link}
                      target="_blank"
                      data-cursor="block"
                      data-cursor-style="border-radius: 99px;"
                      onMouseUp={(e) => ripple.create(e, "light")}
                      className="flex items-center gap-2 z-10 relative justify-center group border hover:bg-gray-100 text-gray-600 text-sm rounded-full transition-all px-4 py-2 duration-300 mt-4"
                    >
                      View Project
                      <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-all"></i>
                    </Link>
                  </IPadCursorProvider>
                </div>
              </div>
              <img
                alt="image here"
                className="opacity-5 w-44 absolute -right-16 -bottom-16 group-hover:scale-110 transition-all duration-500 delay-100"
                src="https://res.cloudinary.com/dmyrswz0r/image/upload/v1713297390/dwxzdvpfpxhgqcsv2bk3.png"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudyProjects;
