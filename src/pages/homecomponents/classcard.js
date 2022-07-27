import React from "react";
import { Link } from "react-router-dom";

const classcard = (props) => {
  return (
    <div className="flex justify-between items-center my-5 md:my-0">
      <div className="bg-white rounded-lg shadow-lg flex flex-col p-5 items-start">
        <div className="flex flex-row items-center">
          <img src={props.image} alt="class icon image" />
          <h1 className="text-xl font-bold lg:pl-20 md:pl-10 pl-20 text-classifyBlue lg:text-xl md:text-md">
            {props.name}
          </h1>
        </div>
        <h2 className="text-left my-3">{props.description}</h2>
        <Link
          to={`/ClassCatalog`}
          className="hover:font-bold hover:text-blue-600 font-semibold"
        >
          Look through our Catalog
        </Link>
      </div>
    </div>
  );
};

export default classcard;
