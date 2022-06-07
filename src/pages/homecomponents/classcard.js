import React from "react";

const classcard = (props) => {
  return (
    <div className="flex my-5 justify-between items-center">
      <div className="bg-white rounded-lg shadow-md flex flex-col p-5 items-start">
        <div className="flex flex-row items-center">
          <img src={props.image} />
          <h1 className="text-xl font-bold lg:pl-20 md:pl-10 pl-20 text-classifyBlue">
            {props.name}
          </h1>
        </div>
        <h2 className="text-left my-3">{props.description}</h2>
        <a href="#" className="hover:font-semibold">
          Read More
        </a>
      </div>
    </div>
  );
};

export default classcard;
