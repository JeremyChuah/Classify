import React, { useState } from "react";
import MeterBoard from "./ClassInfoPageComponents/meterBoard";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Popup from "./ClassInfoPageComponents/Popup";
import client from "./ClassInfoPageComponents/meet-with-client.svg";
import CommentCard from "./ClassInfoPageComponents/commentCard";
import AddRating from "./ClassInfoPageComponents/addRating";

function ClassInfo(props) {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col flex-start w-4/5 break-words">
          <div className="text-4xl font-bold">Science</div>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center mt-20 px-10">
          <div className="w-3/5">
            <MeterBoard />
            <div className="mt-5 flex justify-center">
              <Button
                variant="outlined"
                endIcon={<AddIcon />}
                onClick={() => setOpenPopup(true)}
              >
                Add your own ratings
              </Button>
            </div>
          </div>
          <div>
            <img src={client} className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center flex-col items-center mt-20">
          <div className="font-bold text-2xl mb-2">Comment Board</div>
          <Button variant="outlined" endIcon={<AddIcon />}>
            Add a Comment
          </Button>
        </div>
        <div className="grid grid-cols-5 justify-center items-center gap-10 mx-5">
          <CommentCard
            subject="iojnjon"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
          />
          <CommentCard
            subject="iojnjon"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid"
          />
        </div>
      </div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title={"Add Rating"}
      >
        <AddRating />
      </Popup>
    </div>
  );
}

export default ClassInfo;
