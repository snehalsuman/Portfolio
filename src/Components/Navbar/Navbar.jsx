import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Fades navbar on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-10 pt-6 md:px-20 transition-all duration-300 ${
        scrolled ? "bg-[#0f172a]/80 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="flex flex-wrap justify-between md:items-center text-white">
        <span className="text-xl font-bold tracking-wide">Portfolio</span>

        <ul
          className={`${
            menu ? "block" : "hidden"
          } mx-24 mt-4 font-semibold bg-black bg-opacity-30 px-2 py-2 rounded-xl text-center md:bg-transparent md:static md:mt-0 md:mx-0 md:flex gap-6`}
        >
          {["About", "Experience", "Projects","Certifications", "Contact",].map((item, idx) => (
            <a key={idx} href={`#${item}`}>
              <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-[#cec2b4] hover:drop-shadow-[0_0_5px_#cec2b4]">
                {item === "Experience" ? "Skills" : item}
              </li>
            </a>
          ))}
        </ul>

        {showMenu ? (
          <RiMenu2Line
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenu);
            }}
          />
        ) : (
          <RiCloseLine
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenu);
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;