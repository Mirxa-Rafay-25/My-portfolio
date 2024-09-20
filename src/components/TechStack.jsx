"use client";
import React from "react";
import { motion } from "framer-motion";
import ShinyButton from "./ShinyButton";
import Ripple from "material-ripple-effects";



// import cursor modules
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";

const techJson = [
  {
    name: "React JS",
    desc: "Frontend Library",
    icon: "/tech/react.webp",
  },
  {
    name: "Next JS",
    desc: "Frontend Framework",
    icon: "/tech/nextjs.png",
  },
  {
    name: "Node JS",
    desc: "Backend Development",
    icon: "/tech/nodejs.webp",
  },
  {
    name: "Taildwind Css",
    desc: "CSS Framework",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "MongoDB",
    desc: "Database",
    icon: "/tech/mongodb.png",
  },
  {
    name: "JavaScript",
    icon: "/tech/js.png",
    desc: "Programming Language",
  },
];

const TechStack = () => {

  const ripple = new Ripple();
  const config = {};
  useIPadCursor();

  return (

    <div
      className="bg-white p-5 my-5 rounded-lg mx-4 md:mx-0 overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium text-gray-800/90">Tech Stack</h1>
        <ShinyButton
          title="Full Stack"
          link="/tech-stack"
          className="px-5 py-2 text-sm"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {techJson.map((v, i) => {
          return (
            <IPadCursorProvider key={i} config={config}>
              <motion.div
                data-cursor="block"
                initial={{ opacity: 0, transform: "scale(0.8) translateY(20px)", }}
                whileInView={{ opacity: 1, transform: "scale(1)", }}
                data-cursor-style="border-radius: 8px"
                animate={{ translateY: 0, }}
                // viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                }}
                onMouseUp={(e) => ripple.create(e, "dark")}
                className="flex gap-3 bg-gray-100/70 hover:bg-gray-100 p-4 rounded-lg cursor-pointer"
              >
                <img
                  src={v.icon}
                  alt={v.name}
                  className="w-9 mix-blend-multiply aspect-[3/2] object-contain"
                />
                <div>
                  <h1 className="font-medium text-gray-700 text-base md:text-lg">
                    {v.name}
                  </h1>
                  <span className="text-sm text-gray-600/90">{v.desc}</span>
                </div>
              </motion.div>
            </IPadCursorProvider>
          );
        })}
      </div>
    </div>

  );
};

export default TechStack;
