import React, { useEffect, useState } from "react";
import Card from "./classcatalogcomponents/classInfoCard.js";
import classes from "./classes.js";
import { v4 } from "uuid";
import { API, graphqlOperation } from "aws-amplify";
import { listClasses } from "../graphql/queries.js";
import { createClass } from "../graphql/mutations.js";
import mathIcon from "./homecomponents/cardimages/math.svg";
import scienceIcon from "./homecomponents/cardimages/science.svg";
import historyIcon from "./homecomponents/cardimages/history.svg";
import geographyIcon from "./homecomponents/cardimages/geography.svg";
import englishIcon from "./homecomponents/cardimages/english.svg";

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

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl text-classifyBlue font-bold">Classes</h1>
      <h2 className="text-center">
        A catalog of all the classes that we track and keep information on.
      </h2>
      <h1 className="mt-6 pr-4 font-semibold text-lg">Key</h1>
      <div className="grid grid-cols-2 gap-3 rounded-md shadow-lg p-3 lg:flex lg:flex-row lg:justify-between bg-gray-100">
        <div className="flex flex-row lg:justify-center items-center px-3">
          <img src={mathIcon} className="h-10 w-10 mr-2" />
          <p>- Math Class</p>
        </div>
        <div className="flex flex-row justify-center items-center px-3">
          <img src={scienceIcon} className="h-10 w-10 mr-2" />
          <p>- Science Class</p>
        </div>
        <div className="flex flex-row justify-center items-center px-3">
          <img src={historyIcon} className="h-10 w-10 mr-2" />
          <p>- History Class</p>
        </div>
        <div className="flex flex-row justify-center items-center px-3">
          <img src={englishIcon} className="h-10 w-10 mr-2" />
          <p>- English Class</p>
        </div>
        <div className="flex flex-row lg:justify-center items-center px-3">
          <img src={geographyIcon} className="h-10 w-10 mr-2" />
          <p>- Elective</p>
        </div>
      </div>
      <div className="flex justify-center items-center px-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
          {classesInfo.map((classes) => {
            return (
              <Card
                name={classes.name}
                image={mathIcon}
                description={classes.description}
                nameClass={stringUrl(classes.name)}
              />
            );
          })}

          {/* // <Card
            //   name={classInfo.name}
            //   image={classInfo.pic}
            //   description={classInfo.description}
            //   nameClass={classInfo.slug}
            // /> */}
        </div>
      </div>
    </div>
  );
};

export default ClassCatalog;
