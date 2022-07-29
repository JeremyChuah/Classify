import React from "react";
import Logo from "./Logo.svg";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div class="flex items-end w-full mt-20 bg-white">
      <footer class="w-full text-gray-700 bg-gray-100 body-font">
        <div class="container flex flex-col flex-wrap px-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <Link to="/">
                <img src={Logo} className="w-auto h-auto" />
              </Link>
            </a>
            <p class="mt-2 text-sm text-gray-500"></p>
          </div>
          <div class="flex flex-wrap flex-grow text-center lg:-mb-10 md:mt-0">
            <div class="w-full px-4 mt-4 lg:w-1/4 md:w-1/4">
              <Link
                to="/About"
                class="text-gray-500 cursor-pointer hover:text-gray-900"
              >
                About Us
              </Link>
            </div>
            <div class="w-full px-4 mt-4 lg:w-1/4 md:w-1/4">
              <Link
                to="/ClassCatalog"
                class="text-gray-500 cursor-pointer hover:text-gray-900"
              >
                Find a Course
              </Link>
            </div>
            <div class="w-full px-4 mt-4 lg:w-1/4 md:w-1/4">
              <Link
                to="/CourseLoad"
                class="text-gray-500 cursor-pointer hover:text-gray-900"
              >
                Personal Course Load
              </Link>
            </div>
            <div class="w-full px-4 lg:w-1/4 md:w-1/4 lg:text-right">
              <div class="mt-4">
                <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                    href="https://twitter.com/ClassifyEDU"
                    target="_blank"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a
                    class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                    href="https://www.instagram.com/classify_edu/"
                    target="_blank"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
