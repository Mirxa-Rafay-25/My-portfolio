import { motion } from "framer-motion";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import Ripple from "material-ripple-effects";
import Link from "next/link";

const ShinyButton = (props) => {

  const ripple = new Ripple();
  const config = {};
  useIPadCursor();
 
  return (

    <IPadCursorProvider config={config}>
      <Link href={props.link} data-cursor="block" data-cursor-style="border-radius: 99px;" download={props.download} target={props.target}>
        <motion.button
          initial={{ "--x": "100%", scale: 1 }}
          animate={{ "--x": "-100%" }}
          whileTap={{ scale: 0.97 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
              type: "spring",
              stiffness: 10,
              damping: 5,
              mass: 0.1,
            },
          }}
          onMouseUp={(e) => ripple.create(e, "dark")}
          className={`${props.className} hover:bg-gray-100 relative rounded-full radial-gradient`}
        >
          <span className="text-neutral-700 tracking-wide h-full w-full block relative linear-mask">
            {props.title}
          </span>
          <span className="block absolute inset-0 rounded-full p-px linear-overlay" />
        </motion.button>
      </Link>
    </IPadCursorProvider>

  );
};

export default ShinyButton;
