import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function meterBoard(props) {
  return (
    <div className="bg-white shadow-xl rounded-md p-10 outline-2 outline outline-offset-2 outline-slate-600	text-center">
      <div className="mb-5">
        <h1 className="text-2xl">Class Rating Board</h1>
        <p>Inputed all by students given a rating out of 100</p>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-around items-center">
        <div>
          <h2 className="font-bold">Class Enjoyment</h2>
        </div>
        <div className="w-4/5 ml-5">
          <ProgressBar completed={50} />
        </div>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-around items-center">
        <div>
          <h2 className="font-bold">Course Difficulty</h2>
        </div>
        <div className="w-4/5 ml-5">
          <ProgressBar completed={50} />
        </div>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-around items-center">
        <div>
          <h2 className="font-bold">Course Load</h2>
        </div>
        <div className="w-4/5 ml-5">
          <ProgressBar completed={50} />
        </div>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-around items-center">
        <div>
          <h2 className="font-bold">Homework</h2>
          <p>In hours</p>
        </div>
        <div className="w-4/5 ml-5">
          <ProgressBar completed="60" />
        </div>
      </div>
    </div>
  );
}

export default meterBoard;
