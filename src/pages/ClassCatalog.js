import React, { useEffect, useState } from "react";
import Card from "./classcatalogcomponents/classInfoCard.js";
import classes from "./classes.js";
import { API, graphqlOperation } from "aws-amplify";
import { listClasses } from "../graphql/queries.js";
import mathIcon from "./homecomponents/cardimages/math.svg";

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
      console.log(classList);
    } catch (e) {
      console.log("error fetching classes", e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl text-classifyBlue font-bold">Classes</h1>
      <h2 className="text-center">
        A catalog of all the classes that we track and keep information on.
      </h2>
      <div className="flex justify-center items-center px-20">
        <div className="lg:grid grid-cols-3 gap-7">
          {classesInfo.map((classes) => {
            return (
              <Card
                name={classes.name}
                image={mathIcon}
                description={
                  "A College based Calculus course covering calculus 1 and 2"
                }
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
