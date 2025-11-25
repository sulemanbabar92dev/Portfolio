import React from "react";
import { skills } from "@/data/page";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-16 ">
        <h1 className=" p-6 text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold in-dark:text-white">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group flex flex-col items-center justify-center p-2 sm:p-4 md:p-4 lg:p-4 text-center cursor-pointer bg-white text-black border rounded-xl shadow hover:shadow-xl transition in-dark:bg-gray-300 "
            >
              <div className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl transition transform duration-300 group-hover:translate-y-2">{skill.icons}</div>

              <p className="text-[13px] sm:text-lg md:text-lg lg:text-lg font-bold">{skill.title} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
