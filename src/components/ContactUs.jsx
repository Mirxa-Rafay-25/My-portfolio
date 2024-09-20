"use client";
import Link from "next/link";
import ShinyButton from "./ShinyButton";
import { Github01Icon, InstagramIcon, Linkedin01Icon } from "hugeicons-react";
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

const ContactUs = () => {

  const config = {};
  useIPadCursor();

  return (
    <div className="bg-white px-5 py-12 mb-5 rounded-lg mx-4 md:mx-0 onLoadAnims2">
      <div className="flex items-center flex-col my-4">
        <h1 className="text-2xl font-medium text-gray-800/90 my-4">
          Have a Project Idea?
        </h1>

        <ShinyButton
          link="/contact-us"
          title="Get in touch"
          className="px-6 py-2"
        />
        {/* Social Links */}
        <div className="flex items-center gap-2 my-5">
          {socialJson.map((v, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-full h-8 w-8 cursor-pointer hover:bg-gray-100 group transition-all"
            >
              <IPadCursorProvider config={config}>
                <Link
                  href={v?.link}
                  target="_blank"
                  data-cursor="block"
                   data-cursor-style="border-radius: 99px"
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
        <p className="text-xs text-gray-500 mb-2">
          © Copyright 2023. All rights Reserved.
        </p>
        <p className="text-xs text-gray-500">
          Made by <span className="font-semibold">Muhammad Rafay</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
