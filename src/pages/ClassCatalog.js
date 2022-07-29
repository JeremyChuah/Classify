import React, { useEffect, useState } from "react";
import Card from "./classcatalogcomponents/classInfoCard.js";

import { API, graphqlOperation } from "aws-amplify";
import { listClasses } from "../graphql/queries.js";

import mathIcon from "./homecomponents/cardimages/math.svg";
import scienceIcon from "./homecomponents/cardimages/science.svg";
import historyIcon from "./homecomponents/cardimages/history.svg";
import geographyIcon from "./homecomponents/cardimages/geography.svg";
import englishIcon from "./homecomponents/cardimages/english.svg";

const options = [
  { value: "All", text: "All" },
  { value: "History", text: "History" },
  { value: "English", text: "English" },
  {
    value: "Science",
    text: "Science",
  },
  { value: "Math", text: "Math" },
  { value: "Elective", text: "Elective" },
];

const ClassCatalog = () => {
  const [classesInfo, setClassInfo] = useState([]);

  useEffect(() => {
    fetchClass();
  }, []);

  const fetchClass = async () => {
    try {
      const classData = await API.graphql(graphqlOperation(listClasses));
      const classList = classData.data.listClasses.items;
      setClassInfo(classList);
    } catch (e) {
      console.log("error fetching classes", e);
    }
  };

  function stringUrl(string) {
    if (string.includes(" ")) {
      return string.replaceAll(" ", "%20");
    } else {
      return string;
    }
  }

  const fetchClassbySubject = async (selSub) => {
    try {
      const classSubjectData = await API.graphql({
        query: listClasses,
        variables: {
          filter: {
            subject: {
              eq: selSub,
            },
          },
        },
      });

      const classSubjectList = classSubjectData.data.listClasses.items;
      setClassInfo(classSubjectList);
    } catch (e) {
      console.log("error fteching by subject", e);
    }
  };

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = async (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
    if (event.target.value === "All") {
      fetchClass();
    } else {
      fetchClassbySubject(event.target.value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl text-classifyBlue font-bold">Classes</h1>
      <h2 className="text-center">
        A catalog of all the classes that we track and keep information on.
      </h2>
      <h1 className="mt-6 pr-4 font-semibold text-lg">Key</h1>
      <div>
        <div className="grid grid-cols-2 gap-3 rounded-md shadow-lg p-3 lg:flex lg:flex-row lg:justify-between bg-gray-100">
          <div className="flex flex-row lg:justify-center items-center px-3">
            <img
              src={mathIcon}
              className="h-10 w-10 mr-2"
              alt="Math Classes Icon"
            />
            <p>- Math Class</p>
          </div>
          <div className="flex flex-row justify-center items-center px-3">
            <img
              src={scienceIcon}
              className="h-10 w-10 mr-2"
              alt="Science Classes Icon"
            />
            <p>- Science Class</p>
          </div>
          <div className="flex flex-row justify-center items-center px-3">
            <img
              src={historyIcon}
              className="h-10 w-10 mr-2"
              alt="History Classes Icon"
            />
            <p>- History Class</p>
          </div>
          <div className="flex flex-row justify-center items-center px-3">
            <img
              src={englishIcon}
              className="h-10 w-10 mr-2"
              alt="English Classes Icon"
            />
            <p>- English Class</p>
          </div>
          <div className="flex flex-row lg:justify-center items-center px-3">
            <img
              src={geographyIcon}
              className="h-10 w-10 mr-2"
              alt="Elective Classes Icon"
            />
            <p>- Elective</p>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-center items-center">
          <p className="mr-5">Sort By Subject</p>
          <select
            value={selected}
            onChange={handleChange}
            className="shadow-lg p-4 outline-none"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center px-5">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7">
          {classesInfo.map((classes) => {
            if (classes.subject === "Math") {
              return (
                <Card
                  name={classes.name}
                  image={mathIcon}
                  description={classes.description}
                  nameClass={stringUrl(classes.name)}
                />
              );
            } else if (classes.subject === "History") {
              return (
                <Card
                  name={classes.name}
                  image={historyIcon}
                  description={classes.description}
                  nameClass={stringUrl(classes.name)}
                />
              );
            } else if (classes.subject === "English") {
              return (
                <Card
                  name={classes.name}
                  image={englishIcon}
                  description={classes.description}
                  nameClass={stringUrl(classes.name)}
                />
              );
            } else if (classes.subject === "Science") {
              return (
                <Card
                  name={classes.name}
                  image={scienceIcon}
                  description={classes.description}
                  nameClass={stringUrl(classes.name)}
                />
              );
            } else if (classes.subject === "Elective") {
              return (
                <Card
                  name={classes.name}
                  image={geographyIcon}
                  description={classes.description}
                  nameClass={stringUrl(classes.name)}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ClassCatalog;
