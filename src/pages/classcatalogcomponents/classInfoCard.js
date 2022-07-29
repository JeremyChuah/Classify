import React from "react";
import { Link } from "react-router-dom";

const classInfoCard = (props) => {
  return (
    <div className="flex justify-center items-center mt-5 h-auto">
      <div className="bg-white rounded-lg shadow-lg justify-center flex items-center text-center flex-col p-5 w-full h-full">
        <div className="flex xl:flex-row flex-col items-center">
          <img
            src={props.image}
            className="2xl:h-24 h-20"
            alt="icon representing class subject"
          />
          <div className="flex flex-col items-center xl:ml-10 break-normal">
            <h1 className="font-bold text-xl">{props.name}</h1>
            {/* <h2>{props.description}</h2> */}
            <Link
              to={`/ClassCatalog/${props.nameClass}`}
              className="hover:font-bold mt-5 text-slate-900 font-semibold"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default classInfoCard;
