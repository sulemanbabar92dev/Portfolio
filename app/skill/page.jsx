'use client'
import React from "react";
import { skills } from "@/data/page";
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/autoplay"

import {FreeMode,Autoplay} from "swiper/modules"

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-16 ">
        <h1 className=" p-6 text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold in-dark:text-white">Skills</h1>
        <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        autoplay={{
          delay:0,
          disableOnInteraction:false,
        }}
        speed={3000}
        modules={[FreeMode,Autoplay]}
        
        breakpoints={{
          640:{slidesPerView:2},
          768:{slidesPerView:3},
          1024:{slidesPerView:4}
        }}
     
        >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5">
          {skills.map((skill) => (
           <SwiperSlide key={skill.id} >
            <div
              className="group flex flex-col items-center justify-center p-2 sm:p-4 md:p-4 lg:p-4 text-center cursor-pointer bg-white text-black border rounded-xl shadow hover:shadow-xl transition in-dark:bg-gray-300 "
            >
              <div className="text-4xl transition transform duration-300 group-hover:translate-y-2">{skill.icons}</div>

              <p className="text-lg w-auto h-9  sm:h-8 md:h-8 lg:h-8 font-bold overflow-auto">{skill.title} </p>
            </div>
            </SwiperSlide>
          ))}
        </div>
        </Swiper>
      </section>
    </div>
  );
};

export default Skills;
