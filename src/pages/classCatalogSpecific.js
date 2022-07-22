import React from "react";
import Card from "./classcatalogcomponents/classInfoCard.js";
import classes from "./classes.js";

const ClassCatalogSpecific = (props) => {
  const classSel = props.nameClass;

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl text-classifyBlue font-bold">Classes</h1>
      <h2 className="text-center">
        A catalog of all the classes that we track and keep information on.
      </h2>
      <div className="flex justify-center items-center px-20">
        <div className="lg:grid grid-cols-3 gap-7">
          {classSel.map((classInfo) => (
            <Card
              name={classInfo.name}
              image={classInfo.pic}
              description={classInfo.description}
              nameClass={classInfo.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassCatalogSpecific;
