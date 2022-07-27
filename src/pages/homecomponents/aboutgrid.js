import React from "react";
import Aboutcard from "./aboutcard.js";
import Attendance from "../homecomponents/aboutcardimages/attendance.svg";
import computer from "../homecomponents/aboutcardimages/computers.svg";
import distort from "../homecomponents/aboutcardimages/distort.svg";
import cloud from "../homecomponents/aboutcardimages/cloud-computing.svg";

const aboutgrid = (props) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-10 w-4/5">
      <h1 className="text-4xl text-classifyBlue font-bold">About Classify</h1>
      <div className="md:grid md:grid-cols-2 justify-center items-center gap-10 mt-5 text-center">
        <Aboutcard
          image={Attendance}
          name={"Helping Kids Make the right decisions"}
          description={
            "We want to assist in choosing the best classes for students."
          }
        />
        <Aboutcard
          image={computer}
          name={"Compatibility with all devices"}
          description={"Allows all students to use the platform."}
        />
        <Aboutcard
          image={distort}
          name={"Large sample size"}
          description={
            "Allowing numerous opinions gives way to more accurate data about each class."
          }
        />
        <Aboutcard
          image={cloud}
          name={"Open Source"}
          description={
            "allowing students to voice opinions and get more information about the class."
          }
        />
      </div>
    </div>
  );
};

export default aboutgrid;
