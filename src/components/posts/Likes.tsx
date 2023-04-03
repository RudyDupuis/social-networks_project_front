import { axiosService } from "@/services/axiosService";
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
    //cf services => axiosService
    axiosService({
      method: "get",
      uri: "likes/Nolike.json",
      thenAction: function (response) {
        response.data.map((user: any) => {
          if (user.user_id.toString() === Cookies.get("id")) {
            setIsLiked(true);
            setLikeCounter(1);
          }
        });
      },
      catchAction: function (error) {
        console.log(error);
      },
    });
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
    //cf services => axiosService
    axiosService({
      method: "post",
      uri: `${isLiked ? "like" : "unlike"}/${type}/${id}`,
      catchAction: function (error) {
        console.log(error);
      },
    });
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
