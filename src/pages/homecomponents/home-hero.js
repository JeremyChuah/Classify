import React, { useState, useEffect } from "react";
import icon from "./homeheroicon.svg";
import SearchBar from "./search/searchBar";
import { listClasses } from "../../graphql/queries.js";
import { API, graphqlOperation } from "aws-amplify";

//className="w-full flex flex-col justify-between items-center mt-20"
//className="grid md:grid-cols-2 m-auto"
//className="flex flex-col justify-center items-center w-full px-48"
//h1 className="text-4xl font-bold text-classifyBlue lg:w-full md:w-72 mb-5 lg:mb-2"

function Homecomponents() {
  const [classInfo, setClassInfo] = useState([]);

  useEffect(() => {
    fetchClass();
  }, []);

  const fetchClass = async () => {
    try {
      const classData = await API.graphql(graphqlOperation(listClasses));
      const classList = classData.data.listClasses.items;
      setClassInfo(classList);
    } catch (e) {
      console.log("error on fetching classes", e);
    }
  };
  return (
    <div className="md:w-full md:flex md:flex-col md:justify-center md:items-center mt-20">
      <div className="md:grid md:grid-cols-2 m-auto">
        <div className="flex flex-col justify-center items-center w-full xl:pl-44 sm:px-24 px-3 text-center md:text-left">
          <h1 className="text-4xl font-bold text-classifyBlue lg:w-full md:w-72 mb-5 lg:mb-2 w-96">
            Search for Class
          </h1>
          <p className="lg:w-full md:w-72 w-96">
            Search for any class of your choosing. From Math classes to English
            classes, classify has you covered!
          </p>
          <SearchBar data={classInfo} />
          {/* <button className="mt-6 mb-20 bg-classifyBlue text-white p-2 rounded-lg px-10">
            Search
          </button> */}
        </div>
        <div className="lg:mr-24">
          <img src={icon} alt="home hero icon" />
        </div>
      </div>
    </div>
  );
}

export default Homecomponents;
