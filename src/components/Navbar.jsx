"use client";
import {
  UserIcon,
  Home01Icon,
  Mail01Icon,
  Layers01Icon,
  BookEditIcon,
} from "hugeicons-react";
import Link from "next/link";
import ShinyButton from "./ShinyButton";
import Ripple from "material-ripple-effects";
import { usePathname } from "next/navigation";

// cursor modules
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import { Github01Icon, InstagramIcon, Linkedin01Icon } from "hugeicons-react";

const navLinks = [
  {
    route: "/",
    text: "Home",
    icon: <Home01Icon size={18} variant={"stroke"} />,
  },
  {
    text: "About",
    route: "/about",
    icon: <UserIcon size={18} variant={"stroke"} />,
  },
  {
    text: "Tech Stack",
    route: "/tech-stack",
    icon: <Layers01Icon size={18} variant={"stroke"} />,
  },
  {
    text: "Projects",
    route: "/my-projects",
    icon: <BookEditIcon size={18} variant={"stroke"} />,
  },
  {
    text: "Contact",
    route: "/contact-us",
    icon: <Mail01Icon size={18} variant={"stroke"} />,
  },
];

const Navbar = () => {
  const ripple = new Ripple();
  const router = usePathname();

  // cursor modules
  const config = {};
  useIPadCursor();

  return (
    <div className="grid place-items-center z-50 relative">
      <div className="navScroll bg-indigo-100 max-sm:w-[85%] max-sm:overflow-x-auto max-sm:overflow-hidden flex items-center gap-3 rounded-full p-4 fixed bottom-3 md:bottom-5">
        <div className="flex items-center gap-3">
          <div className="bg-[url('/mrlogo.webp')] bg-contain bg-center border w-12 h-12 rounded-full flex items-center justify-center">
          </div>
          {/* <ShinyButton
            title="Resume"
            className="px-5 py-3 text-sm"
            link="https://res.cloudinary.com/dmyrswz0r/image/upload/v1724522871/vom5p2qtjjca5pza4lkc.pdf"
          /> */}
          <div className="flex items-center gap-3 border-l-2 ml-3 px-3 border-slate-300">
            {navLinks.map((v, i) => {
              return (
                <Link
                  key={i}
                  href={v.route}
                  onMouseUp={(e) => ripple.create(e, "dark")}
                  className={
                    ` ${router === v.route
                      ? "bg-indigo-400 w-12 h-12 rounded-full"
                      : "bg-gray-50 w-12 h-12 rounded-full hover:bg-white group transition-all"}`
                  }
                >
                  {/* Icon */}
                  <IPadCursorProvider config={config}>
                    <div data-cursor="block"
                      data-cursor-style="border-radius: 99px"
                      className="group relative flex items-center justify-center w-full h-full">
                      <i
                        className={`${router === v.route ? "text-white" : " text-gray-500"
                          }`}
                      >
                        {v.icon}
                      </i>
                      {/* Tooltip */}
                      <div
                        className="text-xs z-[-1] delay-100 group-hover:z-0 transition-all bg-gradient-to-tr bg-indigo-400 text-white rounded-full px-2.5 py-1 uppercase whitespace-nowrap absolute -top-2 group-hover:-top-8 left-1/2 -translate-x-1/2 group-hover:opacity-100 opacity-0">
                        {v.text}
                      </div>
                    </div>
                  </IPadCursorProvider>


                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
