import React from "react";
import Image from "next/image";
import { skills } from "@/data/page";

const Project = () => {
  return (
    <div>
      <section id="projects" className="py-16 ">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold mb-6  in-dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="  rounded-xl border bg-white p-6 shadow hover:shadow-xl transition in-dark:bg-gray-300 ">
            <h3 className="text-xl text-black font-semibold">
              User Management System
            </h3>
            <p className="mt-2 text-gray-600 text-sm mb-5">
              A CRUD-based user management system using Next.js & Tailwind CSS.
            </p>

            <Image
              src="/image/dashboard.png"
              alt="User Management System"
              width={500}
              height={300}
              className="rounded-lg mb-4 w-full h-48 overflow-auto"
            />
            <div className=" flex-wrap gap-2  flex justify-evenly">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="mt-5 flex flex-col items-center justify-center p-2 cursor-pointer text-center  bg-gray-50 text-black border  rounded-xl shadow hover:shadow-xl transition in-dark:bg-gray-300 "
                >
                  <div className="text-2xl">{skill.icons}</div>

                  <p className="text-[10px] w-10 font-semibold overflow-auto">{skill.title} </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow hover:shadow-xl transition in-dark:bg-gray-300 ">
            <h3 className="text-xl text-black font-semibold">
              Modern Portfolio Website
            </h3>
            <p className="mt-2 text-gray-600 text-sm mb-5">
              A stylish portfolio using Next.js and Tailwind CSS.
            </p>
            <Image
              src="/image/copy.png"
              alt="User Management System"
              width={500}
              height={300}
              className="rounded-lg mb-4  w-full h-48 overflow-scroll"
            />
            <div className=" gap-2 flex flex-wrap justify-evenly">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className=" mt-5 flex flex-col items-center justify-center cursor-pointer p-2 text-center  bg-gray-50 text-black border rounded-xl shadow hover:shadow-xl transition in-dark:bg-gray-300 "
                >
                  <div className="text-2xl">{skill.icons}</div>

                  <p className=" text-[10px] w-10 font-semibold overflow-auto">{skill.title} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;;