// 'use client'
// import { useState, useEffect } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';

// export default function Theme() {
//   const [dark, setDark] = useState(false);
//   useEffect(() => {
//     const saved = localStorage.getItem('theme') === 'dark';
//     setDark(saved);
//     document.documentElement.classList.toggle('dark', saved);
//   }, []);
//   const toggleTheme = () => {
//     setDark(!dark);
//     document.documentElement.classList.toggle('dark', !dark);   
//     localStorage.setItem('theme', !dark ? 'dark' : 'light');
//   };

//   return (
//     <button onClick={toggleTheme} className=" absolute right-1 mt-2 p-2 rounded bg-gray-200 dark:bg-gray-800">
//       {dark ? <FaSun className="text-white text-4xl" /> : <FaMoon className="text-black text-4xl" />}
//     </button>
//   );
// }