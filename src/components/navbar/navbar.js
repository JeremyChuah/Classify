import React, { useState } from "react";
import "./navbar.css";
import classifyLogo from "./Classify-Logo.svg";
import searchIcon from "./search.svg";

function navbar() {
  return (
    <div className="flex flex-row w-full justfy-center items-center mt-10">
      <div className=" sm:w-4/5 w-72 m-auto items-center flex flex-row justify-between shadow-2xl rounded-xl">
        <div>
          <img src={classifyLogo} />
        </div>
        <ul className="menu-list sm:flex sm:flex-row mr-5 sm:mr-0">
          <li className="menu-list-item sm:px-7 md:px-16 ">
            <a href="#" className="hover:text-blue-700 hover:font-semibold">
              Home
            </a>
          </li>
          <li className="menu-list-item sm:px-7 md:px-16 ">
            <a href="#" className="hover:text-blue-700 hover:font-semibold">
              Personal Course Load
            </a>
          </li>
          <li className="menu-list-item sm:px-7 md:px-16 ">
            <a href="#" className="hover:text-blue-700 hover:font-semibold">
              Find Course
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex mr-5 relative items-center">
          <img src={searchIcon} className="px-2 absolute" />
          <input
            placeholder="Search"
            type="text"
            className="pl-10 py-2 text-black rounded-2xl border-2 outline-0"
          />
        </div>
      </div>
    </div>
  );
}

export default navbar;
