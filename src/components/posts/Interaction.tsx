import React, { useState } from "react";
import Likes from "./Likes";
import { axiosService } from "@/services/axiosService";

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
    //cf services => axiosService
    axiosService({
      method: "post",
      uri: "post/report",
      data: { id, type },
      catchAction: function (error) {
        console.log(error);
      },
    });
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
