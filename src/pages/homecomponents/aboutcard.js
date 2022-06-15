import React from "react";

const aboutcard = (props) => {
  return (
    <div className="flex justify-between items-center mx-10 mt-5 md:mt-0">
      <div className="bg-white rounded-lg shadow-lg flex flex-col p-5 items-center">
        <img src={props.image} />
        <h2 className="text-classifyBlue">{props.name}</h2>
        <a>{props.description}</a>
      </div>
    </div>
  );
};

export default aboutcard;
