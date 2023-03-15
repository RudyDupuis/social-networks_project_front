import React from "react";

interface Props {
  likes: string;
  comments: string | null;
}

const Interaction = ({ likes, comments }: Props) => {
  return (
    <div className="interaction">
      <div>
        <p>{likes}</p>
        <i className="fa-solid fa-heart btn-anim"></i>
      </div>
      <div className="interaction__message">
        <p>{comments}</p>
        <i className="fa-solid fa-message"></i>
      </div>
      <i className="fa-solid fa-flag btn-anim"></i>
    </div>
  );
};

export default Interaction;
