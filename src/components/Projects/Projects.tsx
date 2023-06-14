"use client";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export interface projectType {
  name: string;
  skills: string[];
  thumbnail: string;
  code: string;
  demo?: string;
  description: string;
}

const MockProject: projectType[] = [
  {
    name: "TTB Store",
    thumbnail:
      "https://res.cloudinary.com/nqh34200/image/upload/v1686629519/demo/ttb-store_vaezxb.png",
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    ],
    code: "https://github.com/nqhoi/ttb-store",
    demo: "https://ttb-store.vercel.app/",
    description:
      "descriptionThis website about computer equipment and components made on the web platform has a client-server architecture. With the client being based on Reactjs, Ant Design, and state management with Redux, and Backend can use NodeJS, Mongoose, and Express, to provide the API from the requesting client.",
  },
  {
    name: "Web clone:  Facebook, LinkedIn, Whatsapp, Airbnb, Tinder, Flipkart , Netflix",
    thumbnail:
      "https://res.cloudinary.com/nqh34200/image/upload/v1686629519/demo/ttb-store_vaezxb.png",
    skills: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    ],
    code: "https://github.com/nqhoi",
    description:
      "The design is based on webmasters, which are websites in the process of learning and practicing capable code interfaces and APIs to use. Adapt to many different types of design interfaces: Scss, Ant Design, Bootstrap, Tailwindcss combined with Firebase. Implement functional code with Nodejs with MongoDB database.",
  },
];

function Projects() {
  const handleClickGithubAndDemo = (href: string) => {
    if (typeof window === "undefined") return;
    window.open(href, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden flex-col text-left
    max-w-full justify-end mx-auto items-center z-0"
    >
      <h3 className="mt-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {MockProject.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
            justify-center p-20 md:p-44 h-screen"
            key={index}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={project.thumbnail}
              alt=""
              className="w-[400px] h-[300px]"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="">{project.name}</span>
              </h4>
              <p className="text-lg text-center ">{project.description}</p>

              <div className="flex justify-between items-center flex-col sm:flex-row">
                <div className="flex items-center justify-start gap-4">
                  {project.skills.map((skill, index) => (
                    <motion.img
                      key={index}
                      initial={{
                        x: -200,
                        opacity: 0,
                      }}
                      transition={{ duration: 1 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      src={skill}
                      className="rounded-full border border-gray-500 object-cover w-10 h-10
filter transition duration-300 ease-in-out"
                    />
                  ))}
                </div>

                <motion.div
                  initial={{
                    x: 200,
                    opacity: 0,
                  }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="filter transition duration-300 ease-in-out flex items-center gap-4"
                >
                  <SocialIcon
                    network="github"
                    fgColor="gray"
                    bgColor="transparent"
                    onClick={() => handleClickGithubAndDemo(project.code)}
                    className="cursor-pointer"
                  />

                  {project.demo && (
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() =>
                        handleClickGithubAndDemo(project?.demo as string)
                      }
                    >
                      Live Demo
                      <GlobeAltIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12" />
    </motion.div>
  );
}

export default Projects;
