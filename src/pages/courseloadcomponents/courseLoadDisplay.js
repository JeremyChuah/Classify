import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { propNames } from "@chakra-ui/react";

function CourseLoadDisplay(props) {
  return (
    <div>
      <div className="bg-white shadow-xl rounded-md p-10 outline-2 outline outline-offset-2 outline-slate-600	text-center">
        <div className="mb-5">
          <h1 className="text-2xl">Your Schedule Overview</h1>
          <p>Calculated using our ratings database</p>
        </div>
        <div className="mt-7 flex flex-col 2xl:flex-row justify-around items-center ">
          <div className="xl:mr-0 lg:mr-4 mr-0">
            <h2 className="font-bold">Class Enjoyment</h2>
          </div>
          <div className="md:w-4/5 w-full xl:ml-5 lg:ml-4 ml-5">
            <ProgressBar
              completed={props.enj || 0}
              defa
              bgColor="#1E2F4F"
              maxCompleted={10}
              customLabel={`${props.enj}`}
            />
          </div>
        </div>
        <div className="mt-7 flex flex-col 2xl:flex-row justify-around items-center">
          <div className="xl:mr-0 lg:mr-4 mr-0">
            <h2 className="font-bold">Course Difficulty</h2>
          </div>
          <div className="md:w-4/5 w-full xl:ml-5 lg:ml-4 ml-5">
            <ProgressBar
              completed={props.diff || 0}
              bgColor="#1E2F4F"
              maxCompleted={10}
              customLabel={`${props.diff}`}
            />
          </div>
        </div>
        <div className="mt-7 flex flex-col 2xl:flex-row justify-around items-center">
          <div>
            <h2 className="font-bold">Course Load</h2>
          </div>
          <div className="md:w-4/5 w-full ml-5">
            <ProgressBar
              completed={props.load || 0}
              bgColor="#1E2F4F"
              maxCompleted={10}
              customLabel={`${props.load}`}
            />
          </div>
        </div>
        <div className="mt-7 flex flex-col 2xl:flex-row justify-around items-center">
          <div>
            <h2 className="font-bold">Homework</h2>
            <p>hours per week</p>
          </div>
          <div className="md:w-4/5 w-full ml-5">
            <ProgressBar
              customLabel={`${props.hw}`}
              completed={props.hw || 0}
              bgColor="#1E2F4F"
              maxCompleted={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseLoadDisplay;
