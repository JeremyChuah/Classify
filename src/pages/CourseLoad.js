import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { API, graphqlOperation } from "aws-amplify";
import { listClasses } from "../graphql/queries";
import CourseLoadDisplay from "./courseloadcomponents/courseLoadDisplay";

const options = [
  { value: "American Studies", label: "American Studies" },
  { value: "AP Biology", label: "AP Biology" },
  { value: "AP Enviornmental Science", label: "AP Enviornmental Science" },
];

function CourseLoad({ data }) {
  const [classes, setClasses] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [avgRatings, setAvgRatings] = useState([]);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      let temp = [];

      for (var i = 0; i < classes.length; i++) {
        {
          data.map((classInfo) => {
            if (
              classes[i].value.toLowerCase() === classInfo.name.toLowerCase()
            ) {
              temp[i] = classInfo;
            }
          });
        }
      }
      setRatings(temp);
      console.log(temp);
      let tempAvg = {
        enj: 0,
        diff: 0,
        load: 0,
        hw: 0,
      };
      temp.map((classesInf) => {
        tempAvg.enj = Math.round(
          (classesInf.enjoyment + tempAvg.enj) / classesInf.entries
        );
        tempAvg.diff = Math.round(
          (classesInf.difficulty + tempAvg.diff) / classesInf.entries
        );
        tempAvg.load = Math.round(
          (classesInf.load + tempAvg.load) / classesInf.entries
        );
        tempAvg.hw = Math.round(
          (classesInf.homework + tempAvg.hw) / classesInf.entries
        );
      });
      setAvgRatings(tempAvg);
      console.log(tempAvg);
    }
  };

  return (
    <div>
      <div className="mt-16 w-full flex flex-col justify-center items-center">
        <h1 className="mb-3 text-center">
          Choose classes that you are taking from the dropdown below
        </h1>
        <Select
          isMulti
          className="w-4/5"
          options={options}
          onKeyDown={handleSubmit}
          onChange={setClasses}
        />
      </div>
      <div className="mt-10 flex flex-row justify-center items-center">
        <div className="w-4/5">
          <CourseLoadDisplay
            enj={avgRatings.enj / ratings.length}
            diff={avgRatings.diff / ratings.length}
            load={avgRatings.load / ratings.length}
            hw={avgRatings.hw / ratings.length}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseLoad;
