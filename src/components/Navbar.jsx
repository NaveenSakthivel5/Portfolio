import React from "react";
import { Link } from "react-scroll";
import pic from "../../public/Naveen Img.jpg";

function Navbar({ theme, toggleTheme }) {
  const navItems = [
    { id: 1, text: "Home", section: "Home" },
    { id: 2, text: "About", section: "About" },
    { id: 3, text: "Projects", section: "Projects" },
    { id: 4, text: "Experience", section: "Experience" },
    { id: 5, text: "Skills", section: "Skills" },
    { id: 6, text: "Contact", section: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2 items-center">
          <img src={pic} className="h-12 w-12 rounded-full" alt="" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Naveen <span className="text-green-500 text-2xl">S</span>
            <p className="text-sm">Full Stack Developer</p>
          </h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <ul>
            {navItems.map(({ id, text, section }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
