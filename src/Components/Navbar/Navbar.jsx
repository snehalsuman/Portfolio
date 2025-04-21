import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Track scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-10 pt-6 md:px-20 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg shadow-md" // Faded + blur on scroll
          : "bg-black"
      }`}
    >
      <div className="flex flex-wrap justify-between items-center text-white">
        {/* Logo */}
        <span className="text-2xl font-bold tracking-wide transition-transform duration-300 hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Portfolio
        </span>

        {/* Desktop Menu */}
        <ul
          className={`$${
            menu ? "block" : "hidden"
          } mx-24 mt-4 font-semibold bg-black bg-opacity-30 px-4 py-2 rounded-xl text-center md:bg-transparent md:static md:mt-0 md:mx-0 md:flex gap-6`}
        >
          {["About", "Experience", "Projects", "Certifications", "Achievements", "Contact"].map(
            (item, idx) => (
              <a key={idx} href={`#${item}`}>
                <li className="text-md transition-all duration-300 p-2 md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:scale-105">
                  {item === "Experience" ? "Skills" : item}
                </li>
              </a>
            )
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        {showMenu ? (
          <RiMenu2Line
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300 hover:text-[#cec2b4]"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenu);
            }}
          />
        ) : (
          <RiCloseLine
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300 hover:text-[#cec2b4]"
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
