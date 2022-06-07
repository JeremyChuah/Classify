import React from "react";
import icon from "./homeheroicon.svg";

//className="w-full flex flex-col justify-between items-center mt-20"
//className="grid md:grid-cols-2 m-auto"
//className="flex flex-col justify-center items-center w-full px-48"
//h1 className="text-4xl font-bold text-classifyBlue lg:w-full md:w-72 mb-5 lg:mb-2"

function homecomponents() {
  return (
    <div className="md:w-full md:flex md:flex-col md:justify-between md:items-center mt-20">
      <div className="md:grid md:grid-cols-2 m-auto">
        <div className="flex flex-col justify-center items-center w-full px-48">
          <h1 className="text-4xl font-bold text-classifyBlue lg:w-full md:w-72 mb-5 lg:mb-2 w-96">
            Search for Class
          </h1>
          <p className="lg:w-full md:w-72 w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidid
          </p>
          <input
            type="text"
            placeholder="Enter Class Name"
            className="p-2 rounded-md shadow-lg border-0 lg:w-full md:w-72 outline-0 mt-10"
          />
          <button className="mt-6 mb-20 bg-classifyBlue text-white p-2 rounded-lg px-10">
            Searchl
          </button>
        </div>
        <div>
          <img src={icon} />
        </div>
      </div>
    </div>
  );
}

export default homecomponents;
