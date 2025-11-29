import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section
      className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg-px-8 py-12">
        <div className="text-center mt-5 w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 dark:border-gray-700">
          <Image
            src="/image/portfolio.png" 
            alt="Salman Babar"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>
        <h1 className=" mt-10 text-center font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-5xl  in-dark:text-white">
          Salman Babar
        </h1>
        <p className=" mt-5 text-center text-lg sm:text-2xl md:text-2xl lg:text-2xl in-dark:text-white">
          Frontend Developer - React - Next.js - Tailwind.css
        </p>
        <p className="mt-4 max-w-2xl text-lg  text-gray-600 dark:text-gray-400">
          I am a frontend developer learning to build responsive and
          modern websites using React, Next.js, and Tailwind CSS.
        </p>
        <div className="text-[15px] text-center flex mt-7 sm:text-[20px] md:text-[20px] lg:text-[20px]">
          <a
            href="#projects"
            className="p-2 bg-black text-white font-medium rounded-[7px] mr-7 hover:bg-gray-800 in-dark:bg-gray-100 in-dark:text-black in-dark:hover:bg-gray-300"
          >
            View Project
          </a>
          <a
            href="#/salman_cv.pdf"
            className="p-2 bg-black text-white font-medium rounded-[7px] hover:bg-gray-800 in-dark:bg-gray-100 in-dark:text-black in-dark:hover:bg-gray-300"
          >
            Download CV
          </a>
        </div>
        <div className="mt-14 text-lg max-w-2xl text-gray-600 dark:text-gray-400">
          Passionate about frontend development, UI/UX design, and modern web
          technologies. Always learning, improving, and building real-world
          projects.
        </div>
      </section>
    </div>
  );
};

export default Home;
