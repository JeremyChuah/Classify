import React, { useState } from "react";

import Select from "react-select";

import CourseLoadDisplay from "./courseloadcomponents/courseLoadDisplay";

const options = [
  { value: "American History", label: "American History" },
  { value: "AP World History: Modern", label: "AP World History: Modern" },
  {
    value: "AP Language and Composition",
    label: "AP Language and Composition",
  },
  { value: "AP Environmental Science", label: "AP Environmental Science" },
  { value: "AP Computer Science A", label: "AP Computer Science A" },
  { value: "Honors Pre-Calculus", label: "Honors Pre-Calculus" },
  { value: "Honors Physics", label: "Honors Physics" },
  { value: "AP Economics", label: "AP Economics" },
  { value: "AP Government", label: "AP Government" },
  { value: "AP Literature", label: "AP Literature" },
  { value: "AP Human Geography", label: "AP Human Geography" },
  { value: "AP Art History", label: "AP Art History" },
  { value: "AP Spanish", label: "AP Spanish" },
  { value: "AP Calculus BC", label: "AP Calculus BC" },
  { value: "AP Calculus AB", label: "AP Calculus AB" },
  { value: "AP Physics 1/2", label: "AP Physics 1/2" },
  { value: "AP Physics C", label: "AP Physics C" },
  { value: "AP European History", label: "AP European History" },
  { value: "AP Statistics", label: "AP Statistics" },
  { value: "AP Psychology", label: "AP Psychology" },
  { value: "AP Chemistry", label: "AP Chemistry" },
  { value: "Engineering Science (PLTW)", label: "Engineering Science (PLTW)" },
  { value: "AP Biology", label: "AP Biology" },
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
        tempAvg.enj =
          Math.round((classesInf.enjoyment / classesInf.entries) * 10) / 10 +
          tempAvg.enj;
        tempAvg.diff =
          Math.round((classesInf.difficulty / classesInf.entries) * 10) / 10 +
          tempAvg.diff;
        tempAvg.load =
          Math.round((classesInf.load / classesInf.entries) * 10) / 10 +
          tempAvg.load;
        tempAvg.hw =
          Math.round((classesInf.homework / classesInf.entries) * 10) / 10 +
          tempAvg.hw;
      });

      console.log(tempAvg);

      tempAvg.enj = Math.round((tempAvg.enj / temp.length) * 10) / 10;
      tempAvg.diff = Math.round((tempAvg.diff / temp.length) * 10) / 10;
      tempAvg.load = Math.round((tempAvg.load / temp.length) * 10) / 10;
      tempAvg.hw = Math.round((tempAvg.hw / temp.length) * 10) / 10;
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
            enj={avgRatings.enj}
            diff={avgRatings.diff}
            load={avgRatings.load}
            hw={avgRatings.hw}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseLoad;
