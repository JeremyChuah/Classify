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
          description={"iodfniovjenojvnojvnove"}
        />
        <Aboutcard
          image={computer}
          name={"Helping Kids Make the right decisions"}
          description={"iodfniovjenojvnojvnove"}
        />
        <Aboutcard
          image={distort}
          name={"Helping Kids Make the right decisions"}
          description={"iodfniovjenojvnojvnove"}
        />
        <Aboutcard
          image={cloud}
          name={"Helping Kids Make the right decisions"}
          description={"iodfniovjenojvnojvnove"}
        />
      </div>
    </div>
  );
};

export default aboutgrid;
