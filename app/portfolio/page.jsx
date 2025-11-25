import Navbar from "@/navbar/page";
import About from "@/about/page";
import Project from "@/project/page";
import Home from "@/home/page";
import Contact from "@/contact/page";
import Skill from "@/skill/page";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen dark:bg-gray-950  dark:text-gray-100">
        <main id="home" className="container mx-auto px-6 py-15 font-sans ">
          <Home />
          <About />
          <Skill />
          <Project />
          <Contact />
        </main>
      </div>
    </div>
  );
}