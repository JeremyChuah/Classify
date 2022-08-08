import React, { useState, useEffect } from "react";
import MeterBoard from "./ClassInfoPageComponents/meterBoard";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Popup from "./ClassInfoPageComponents/Popup";

import CommentCard from "./ClassInfoPageComponents/commentCard";

import { API, graphqlOperation } from "aws-amplify";

import { listClasses, listComments } from "../graphql/queries.js";
import AddComment from "./ClassInfoPageComponents/AddComment";

function ClassInfo(props) {
  const [classInfo, setClassInfo] = useState([]);
  const [cPopup, setCpopup] = useState(false);

  const fetchClass = async () => {
    try {
      const classData = await API.graphql(graphqlOperation(listClasses));
      const classList = classData.data.listClasses.items;
      setClassInfo(classList);
    } catch (e) {
      console.log("error fetching classes", e);
    }
  };

  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  let filter = {
    classID: {
      eq: props.id,
    },
  };

  const fetchComments = async () => {
    try {
      const comments = await API.graphql({
        query: listComments,
        variables: { filter: filter },
      });

      const commentList = comments.data.listComments.items;

      setComment(commentList);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col flex-start w-4/5 break-words">
          <div className="text-4xl font-bold">{props.nameClass}</div>
          <div>{props.description}</div>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center mt-20 px-10">
          <div className="md:w-4/5">
            <MeterBoard
              id={props.id}
              entries={props.entries}
              enjoyment={props.enjoyment}
              difficulty={props.difficulty}
              load={props.load}
              homework={props.homework}
              onAddRating={() => {
                fetchClass();
                props.onAdd();
              }}
            />
            {/* <div className="mt-5 flex justify-center">
              <Button
                variant="outlined"
                endIcon={<AddIcon />}
                onClick={() => setOpenPopup(true)}
              >
                Add your own ratings
              </Button>
            </div> */}
          </div>
          <div>{/* <img src={client} className="hidden lg:block" /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default ClassInfo;
