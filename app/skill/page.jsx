import React from "react";
import { skills } from "@/data/page";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-16 text-center">
        <h1 className=" p-6 text-4xl font-bold in-dark:text-white">Skills</h1>
        <div className=" mx-auto max-w-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center p-4 text-center cursor-pointer bg-white text-black border rounded-xl shadow hover:shadow-xl transition in-dark:bg-gray-300 "
            >
              <div className="text-5xl">{skill.icons}</div>

              <p className="text-lg font-bold">{skill.title} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
