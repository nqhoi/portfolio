"use client";
import { motion } from "framer-motion";

interface SkillProps {
  skill: string;
  directionLeft?: boolean;
}

function Skill({ directionLeft, skill }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 lg:w-20 lg:h-20
        filter transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default Skill;
