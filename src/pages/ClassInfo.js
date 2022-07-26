import React, { useState, useEffect } from "react";
import MeterBoard from "./ClassInfoPageComponents/meterBoard";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Popup from "./ClassInfoPageComponents/Popup";
import client from "./ClassInfoPageComponents/meet-with-client.svg";
import CommentCard from "./ClassInfoPageComponents/commentCard";
import AddRating from "./ClassInfoPageComponents/addRating";
import { API, graphqlOperation } from "aws-amplify";
import { createClass } from "../graphql/mutations.js";
import { listClasses, listComments } from "../graphql/queries.js";
import AddComment from "./ClassInfoPageComponents/AddComment";

function ClassInfo(props) {
  const [classInfo, setClassInfo] = useState([]);
  const [cPopup, setCpopup] = useState(false);

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
          <div className="md:w-3/5">
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
          <div>
            <img src={client} className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center flex-col items-center mt-20">
          <div className="font-bold text-2xl mb-2">Comment Board</div>
          <Button
            variant="outlined"
            endIcon={<AddIcon />}
            onClick={() => setCpopup(true)}
          >
            Add a Comment
          </Button>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-2 justify-center items-center gap-10 mx-5">
          {comment.map((comments) => {
            return (
              <div>
                <CommentCard
                  subject={comments.subject}
                  content={comments.content}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* {classInfo.map((classes) => {
        return (
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title={"Add Rating"}
          >
            <AddRating
              id={classes.id}
              enjoyment={classes.enjoyment}
              difficulty={classes.difficulty}
              load={classes.load}
              homework={classes.homework}
              entries={classes.entries}
              onAddRating={() => {
                fetchClass();
                setOpenPopup(false);
                props.onAdd();
              }}
            />
          </Popup>
        );
      })} */}
      <Popup openPopup={cPopup} setOpenPopup={setCpopup} title={"Add Comment"}>
        <AddComment
          id={props.id}
          onAddComment={() => {
            fetchComments();
            setCpopup(false);
          }}
        ></AddComment>
      </Popup>
    </div>
  );
}

export default ClassInfo;
