import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

interface Props {
  likes: string;
  id: number;
  type: string;
}

const Likes = ({ likes, id, type }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);

  //Know if the user has already liked
  useEffect(() => {
    axios
      .get(`./outputBack/likes/noLike.json`)
      .then((res) => {
        res.data.data.map((user: any) => {
          if (user.user_id.toString() === Cookies.get("id")) {
            setIsLiked(true);
            setLikeCounter(1);
          }
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLike = () => {
    if (isLiked) {
      post();
      setLikeCounter(0);
      setIsLiked(false);
    } else {
      post();
      setLikeCounter(1);
      setIsLiked(true);
    }
  };

  const post = () => {
    axios
      .post(`${isLiked ? "like" : "unlike"}/${type}/${id}`, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <p>{parseInt(likes) + likeCounter}</p>
      <i
        className={`${isLiked ? "fa-solid" : "fa-regular"} fa-heart btn-anim`}
        onClick={() => handleLike()}
      ></i>
    </div>
  );
};

export default Likes;
