"use client"
import React from "react";
import { motion } from "framer-motion";
import ContactUs from "@/components/ContactUs";
import ShinyButton from "@/components/ShinyButton";

const techJson = [
  {
    name: "HTML 5",
    icon: "/tech/html.jpg",
    subtitle: "Structure and Content",
    desc: "HTML5 is the backbone of my web design work. I use it to structure content, ensuring that websites are semantically meaningful and accessible. It forms the foundation upon which the visual elements of a site are built.",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
    subtitle: "Visual Styling",
    desc: "CSS3 is my styling and layout powerhouse. It's instrumental in creating visually appealing websites by controlling everything from fonts and colors to the responsive design that adapts to various screen sizes.",
  },
  {
    name: "JavaScript",
    icon: "/tech/js.png",
    subtitle: "Interactivity & Functionality.",
    desc: "JavaScript is my cornerstone for web development, empowering me to craft dynamic and interactive experiences for users across platforms. Its versatility, coupled with frameworks like React and Node.js, enables me to build robust applications with ease, from client-side scripting to server-side logic.",
  },
  {
    name: "React JS",
    subtitle: "Frontend Library",
    icon: "/tech/react.webp",
    desc: "React is my dynamic web development framework. I apply it to build interactive web applications with rich user interfaces. It's instrumental in creating engaging, responsive, and data-driven web experiences.",
  },
  {
    name: "Next JS",
    subtitle: "Frontend Framework",
    icon: "/tech/nextjs.png",
    desc: "Next.js is my go-to framework for building dynamic web applications with React. It elevates development by enabling server-side rendering, automatic code splitting, and seamless API routes integration, ensuring efficient and scalable projects.",
  },
  {
    name: "Node JS",
    subtitle: "Backend Development",
    icon: "/tech/nodejs.webp",
    desc: "Node.js is a JavaScript runtime built on Chrome's V8 engine, designed for building scalable network applications. It allows developers to execute JavaScript on the server side, enabling full-stack JavaScript development. With its non-blocking, event-driven architecture, Node.js is ideal for creating high-performance web applications and real-time services."
  },
  {
    name: "Express JS",
    subtitle: "Backend Development",
    icon: "/tech/express.png",
    desc: "Express.js is a lightweight and flexible Node.js framework for building web applications and APIs. It offers a simple routing system, middleware support, and easy integration with templating engines, making it ideal for rapid development and scaling of applications. Express.js helps maintain organized code while streamlining the server-side development process."
  },
  {
    name: "MongoDB",
    subtitle: "Database",
    icon: "/tech/mongodb.png",
    desc: "MongoDB is a NoSQL database designed for scalability and flexibility. It stores data in a JSON-like format, allowing for dynamic schemas that adapt to changing data requirements. Ideal for handling large volumes of unstructured data, MongoDB is widely used in modern applications, enabling developers to build fast, high-performance solutions with ease."
  },
  {
    name: "Taildwind Css",
    subtitle: "CSS Framework",
    icon: "/tech/tailwind.webp",
    desc: "Tailwind CSS is a utility-first CSS framework that promotes rapid UI development. By providing a set of pre-defined classes, it enables developers to build custom designs without leaving the HTML file. Its flexible and composable nature makes it easy to create responsive, visually appealing interfaces while maintaining a clean codebase."
  },
  {
    name: "GitHub",
    subtitle: "Version Control",
    icon: "/icons/github.webp",
    desc: "GitHub is a web-based platform for version control and collaboration, built around the Git version control system. It allows developers to store code, track changes, and collaborate with others on projects. With features like pull requests, issue tracking, and project management tools, GitHub is a vital resource for both open-source and private development."
  },
 
  {
    name: "Figma",
    icon: "/tech/figma.webp",
    subtitle: "Collaborative Design",
    desc: "Figma is a cloud-based design tool that enables real-time collaboration for UI/UX design. It allows teams to create, prototype, and share designs seamlessly, making it easier to iterate and gather feedback. With its user-friendly interface and powerful features, Figma is an essential tool for modern design workflows."
  },
];

const Page = () => {


  return (
    <>
      <div className="bg-white p-5 my-5 rounded-lg mx-4 md:mx-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h1 className="text-4xl my-2 font-medium text-gray-800/90">
            My Tech Box
          </h1>
          <ShinyButton
            title="Full Stack"
            link="/tech-stack"
            className="px-5 py-2 text-sm"
          />
        </div>
        <div className="flex flex-col gap-4">
          {techJson.map((v, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, transform: "scale(0.9) translateX(30px)", }}
                whileInView={{ opacity: 1, transform: "scale(1)", }}
                animate={{ scale: 1, }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                }}
                className="flex flex-col md:flex-row items-start gap-3 bg-gray-100/70 hover:bg-gray-100 p-4 rounded-lg cursor-pointer"
              >
                <img
                  src={v.icon}
                  alt={v.name}
                  className="w-14 mt-2 mix-blend-multiply aspect-video object-contain"
                />
                <div className="mt-1">
                  <h1 className="font-semibold text-gray-700">{v.name}</h1>
                  <p className="text-sm text-gray-700 font-medium my-2">
                    {v.subtitle}
                  </p>
                  <span className="md:text-sm text-xs text-gray-700/80">
                    {v.desc}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Page;
