import React from "react";
import ShinyButton from "./ShinyButton";
import { motion } from "framer-motion";


const jsonEdu = [
  {
    title: "Bachelor of Science in Computer Science - BSCS",
    desc: "NFC-IEFR University - (2023-continue)",
  },
  {
    title: "Intermediate in Computer Science - ICS",
    desc: "Govt  Science College Samnabad, Faisalabad - (2021-2023)",
  },
  {
    title: "MERN Stack Development - MERN",
    desc: "Edify College of IT - (2024)",
  },
];

const Education = () => {
  return (
    <div className="bg-white p-5 my-5 rounded-lg mx-4 md:mx-0 onLoadAnim">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium text-gray-800/90">Education</h1>
        <ShinyButton
          link="/my-projects"
          title="Go to Projects"
          className="px-5 py-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-4">
        {jsonEdu.map((v, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateY: -30 }}
              exit={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
              }}
              className="flex gap-2 border-b pb-4 border-dotted hover:shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <i class="fa-solid fa-graduation-cap bg-gray-50 text-sm h-8 w-8 text-gray-500 p-2 rounded-lg"></i>
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

export default Education;
