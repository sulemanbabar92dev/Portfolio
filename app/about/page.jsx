import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className=" py-16 ">
        <h1 className="  p-6 text-4xl font-bold mt-15  in-dark:text-white">
          About Me
        </h1>
        <div className="  mt-3 bg-white rounded-xl shadow hover:shadow-xl transition in-dark:bg-gray-300 mx-auto max-w-2xl ">
          <p className="p-10 text-gray-700 leading-relaxed ">
         I am Salman Babar, a beginner Frontend Developer with 3 months of experience. I build clean and responsive websites using HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS. I enjoy learning new technologies and improving my skills by making real projects.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
