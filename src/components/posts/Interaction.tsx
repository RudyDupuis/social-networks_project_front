import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import Likes from "./Likes";

interface Props {
  likes: string;
  comments: string | null;
  id: number;
  type: string;
  commentsEnabled(e: boolean): void;
}

const Interaction = ({ likes, comments, id, type, commentsEnabled }: Props) => {
  const [viewComments, setViewComments] = useState(false);

  const displayComments = () => {
    if (viewComments) {
      setViewComments(false);
      commentsEnabled(false);
    } else {
      setViewComments(true);
      commentsEnabled(true);
    }
  };

  const reportingRequest = () => {
    const dataSignaled = {
      id,
      type,
    };

    axios
      .post("/post/report", dataSignaled, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="interaction">
      <Likes likes={likes} id={id} type={type} />

      <div className="interaction__message">
        <p>{comments}</p>
        <i
          className={`${
            viewComments ? "fa-solid" : "fa-regular"
          } fa-message btn-anim`}
          onClick={() => {
            displayComments();
          }}
        ></i>
      </div>

      <i
        className="fa-solid fa-flag btn-anim"
        onClick={() => reportingRequest()}
      ></i>
    </div>
  );
};

export default Interaction;
