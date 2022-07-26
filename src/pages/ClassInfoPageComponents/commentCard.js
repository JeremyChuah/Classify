import React from "react";

function CommentCard(props) {
  return (
    <div className="shadow-lg p-5 rounded-md w-full break-words sm:h-56">
      <div className="font-bold">{props.subject}</div>
      <div className="mt-3">{props.content}</div>
    </div>
  );
}

export default CommentCard;
