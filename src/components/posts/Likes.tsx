import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

interface Props {
  data: string;
}

const Likes = ({ data }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(1);

  //If the user liked the content, we increment the number of likes, otherwise we set it to 0
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
    <div>
      <p>{parseInt(data) + likeCounter}</p>
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
  );
};

export default Likes;
