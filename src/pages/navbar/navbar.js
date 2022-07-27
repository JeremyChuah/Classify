import React, { useState, useEffect } from "react";
import "./navbar.css";
import classifyLogo from "./Classify-Logo.svg";
import searchIcon from "./search.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="flex flex-row w-full justfy-center items-center mt-10">
      <div className=" sm:w-4/5 w-72 m-auto items-center flex flex-row justify-between shadow-2xl rounded-xl">
        <div>
          <Link to="/">
            <img src={classifyLogo} />
          </Link>
        </div>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="menu-list sm:flex sm:flex-row mr-5 sm:mr-0 list">
            <li className="items sm:px-7 md:px-16">
              <Link to="/" className="hover:text-blue-700 hover:font-semibold">
                Home
              </Link>
            </li>
            <li className="items sm:px-7 md:px-16">
              <Link
                to="/ClassCatalog"
                className="hover:text-blue-700 hover:font-semibold"
              >
                Find a Course
              </Link>
            </li>
            <li className="items sm:px-7 md:px-16">
              <Link
                to="/CourseLoad"
                className="hover:text-blue-700 hover:font-semibold"
              >
                Personal Course Load
              </Link>
            </li>
            <li className="items sm:px-7 md:px-16">
              <Link
                to="/About"
                className="hover:text-blue-700 hover:font-semibold"
              >
                About Us
              </Link>
            </li>
          </ul>
        )}
        <button onClick={toggleNav} className="btn">
          ☰
        </button>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link
        to={to}
        {...props}
        className="hover:text-blue-700 hover:font-semibold"
      >
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
