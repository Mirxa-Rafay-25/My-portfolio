import React from "react";
import { motion } from "framer-motion";
import ShinyButton from "./ShinyButton";

const jsonEdu = [
  {
    title: "Web Developer",
    desc: "Edserves · Jul 2021 - Oct 2021",
    icon: "fa-solid fa-paintbrush",
  },
  {
    title: "Software Engineer",
    desc: "Develops web applications using HTML5, CSS3, JavaScript, React.js, and Next.js. Manages server-side logic with Node.js and Express.js, and handles data with MongoDB. Implements secure authentication with OAuth and integrates RESTful APIs. Utilizes GitHub for version control and Cloudinary for media management. · May 2022 - continue",
    icon: "fa-solid fa-wand-magic-sparkles",
  },
];

const Experience = () => {
  return (
    <div className="bg-white p-5 my-5 rounded-lg mx-4 md:mx-0 onLoadAnims2">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium text-gray-800/90">Experience</h1>
        <ShinyButton
          title="Tech Stack"
          link="/tech-stack"
          className="px-5 py-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-4">
        {jsonEdu.map((v, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, transform: "scale(0.8) translateX(30px)", }}
              whileInView={{ opacity: 1, transform: "scale(1)", }}
              animate={{ translateX: 0, }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
              }}
              className="flex gap-2 border-b py-4 border-dotted hover:shadow-[0px_5px_20px_-10px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <i
                className={`bg-gray-50 text-sm h-8 w-8 text-gray-500 p-2 rounded-lg ${v.icon}`}
              ></i>
              <div>
                <h1 className="text-gray-700/80 font-medium mb-1">{v.title}</h1>
                <p className="text-gray-500 text-xs">{v.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
