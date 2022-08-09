import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Popup from "./Popup";
import AddRating from "./addRating";

function MeterBoard(props) {
  const enj = Math.round((props.enjoyment / props.entries) * 10) / 10;
  const diff = Math.round((props.difficulty / props.entries) * 10) / 10;
  const ld = Math.round((props.load / props.entries) * 10) / 10;
  const hw = Math.round((props.homework / props.entries) * 10) / 10;

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="bg-white shadow-xl rounded-md p-10 outline-2 outline outline-offset-2 outline-slate-600	text-center">
      <div className="mb-5">
        <h1 className="text-2xl">Class Rating Board</h1>
        <p>Inputed all by students given a rating out of 10</p>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-around items-center">
        <div>
          <h2 className="font-bold">Class Enjoyment</h2>
        </div>
        <div className="md:w-4/5 w-full ml-5">
          <ProgressBar
            completed={enj || 0}
            bgColor="#1E2F4F"
            maxCompleted={10}
            customLabel={`${enj}`}
          />
        </div>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-around items-center">
        <div>
          <h2 className="font-bold">Course Difficulty</h2>
        </div>
        <div className="md:w-4/5 w-full ml-5">
          <ProgressBar
            completed={diff || 0}
            bgColor="#1E2F4F"
            maxCompleted={10}
            customLabel={`${diff}`}
          />
        </div>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-around items-center">
        <div>
          <h2 className="font-bold">Course Load</h2>
        </div>
        <div className="md:w-4/5 w-full ml-5">
          <ProgressBar
            customLabel={`${ld}`}
            completed={ld || 0}
            bgColor="#1E2F4F"
            maxCompleted={10}
          />
        </div>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-around items-center">
        <div>
          <h2 className="font-bold">Homework</h2>
          <p>Hours per week</p>
        </div>
        <div className="md:w-4/5 w-full ml-5">
          <ProgressBar
            customLabel={`${hw}`}
            completed={hw || 0}
            bgColor="#1E2F4F"
            maxCompleted={10}
          />
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <Button
          variant="outlined"
          endIcon={<AddIcon />}
          onClick={() => setOpenPopup(true)}
        >
          Add your own ratings
        </Button>
      </div>

      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title={"Add Rating"}
      >
        <AddRating
          id={props.id}
          enjoyment={props.enjoyment}
          difficulty={props.difficulty}
          load={props.load}
          homework={props.homework}
          entries={props.entries}
          onAddRating={() => {
            props.onAddRating();
            setOpenPopup(false);
          }}
        />
      </Popup>
    </div>
  );
}

export default MeterBoard;
