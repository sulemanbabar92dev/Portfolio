"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);
  const toggleTheme = () => {
    setDark(!dark);
    localStorage.setItem("theme", !dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", !dark);
  };
  return (
    <nav className="w-full fixed top-0 left-0  backdrop-blur shadow-sm z-50 in-dark:bg-gray-900 in-dark:backdrop-blur">
      <div className="container mx-auto px-6 py-4 flex  sm:flex sm:justify-between sm:items-center md:flex md:justify-between md:items-center lg:flex lg:justify-between lg:items-center">
        <h1 className="text-2xl font-bold  in-dark:text-white">Salman Babar </h1>

        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li>
            <a
              href="#home"
              className="in-dark:text-gray-300 hover:text-gray-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="in-dark:text-gray-300 hover:text-gray-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="in-dark:text-gray-300 hover:text-gray-500"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="in-dark:text-gray-300 hover:text-gray-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="in-dark:text-gray-300 hover:text-gray-500"
            >
              Contact
            </a>
          </li>
          <button onClick={toggleTheme} className=" rounded ">
            {dark ? (
              <FaSun className="text-gray-100 text-xl mt-1 cursor-pointer " />
            ) : (
              <FaMoon className="text-black text-xl mt-1 cursor-pointer" />
            )}
          </button>
        </ul>

        {/* Mobile Button */}
        <div className="absolute right-5 ">
         <button onClick={toggleTheme} className=" mr-7 pt-4 sm:hidden md:hidden lg:hidden">
            {dark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        <button
          onClick={() => setOpen(true)}
          className=" md:hidden text-2xl text-black in-dark:text-white"
        >
          ☰
        </button>
        </div>
      </div>
      <div
        className={` backdrop-blur fixed top-0 right-0 h-full w-40 sm:w-44 bg-white dark:bg-gray-800 shadow-lg
          transform ${open ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex justify-evenly">
        <div className=" p-2 w-full  mt-2">
          <Image
            src=""
            width={50}
            height={50}
            alt="Salman"
            className="rounded-full"
          />
        </div>

        <button
          onClick={() => setOpen(false)}
          className="text-3xl absolute top-4 right-4 dark:text-white"
        >
          ✕
        </button>
        </div>
        <ul className="flex flex-col mt-2 space-y-6 text-lg px-6 dark:text-gray-200">
          <li>
            <a onClick={() => setOpen(false)} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
