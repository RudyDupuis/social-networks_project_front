import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

interface Props {
  likes: string;
  comments: string | null;
  id: number;
  type: string;
}

const Interaction = ({ likes, comments, id, type }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(1);

  const reportingRequest = () => {
    const dataSignaled = {
      id,
      type,
    };

    axios.post("", dataSignaled, {
      headers: {
        Authorization: `bearer ${Cookies.get("token")}`,
      },
    });
  };

  useEffect(() => {
    isLiked ? setLikeCounter(1) : setLikeCounter(0);

    const dataLike = {
      likeCounter,
    };

    axios.post("", dataLike, {
      headers: {
        Authorization: `bearer ${Cookies.get("token")}`,
      },
    });
  }, [isLiked]);

  return (
    <div className="interaction">
      <div>
        <p>{parseInt(likes) + likeCounter}</p>
        <i
          className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart btn-anim`}
          onClick={() => {
            if (isLiked) {
              return setIsLiked(false);
            }
            setIsLiked(true);
          }}
        ></i>
      </div>
      <div className="interaction__message">
        <p>{comments}</p>
        <i className="fa-solid fa-message"></i>
      </div>
      <i
        className="fa-solid fa-flag btn-anim"
        onClick={() => reportingRequest()}
      ></i>
    </div>
  );
};

export default Interaction;
