import { Post } from "@/types/Interface";
import React, { useEffect, useState } from "react";
import Posts from "../posts/Posts";
import { axiosService } from "@/services/axiosService";

const MyPosts = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [errorMessage, setErrorMessage] = useState(
    "Vous n'êtes pas très bavard ..."
  );

  useEffect(() => {
    //cf services => axiosService
    axiosService({
      method: "get",
      uri: "posts/profile/1.json",
      thenAction: function (response) {
        setPostsData(response.data);
      },
      catchAction: function (error) {
        setErrorMessage(error);
      },
    });
  }, []);
  return (
    <div className="my-posts">
      <h1>Mes posts</h1>

      {postsData.length ? (
        postsData.map((post) => <Posts key={post.id} data={post} />)
      ) : (
        <p className="my-posts__message">{errorMessage}</p>
      )}
    </div>
  );
};

export default MyPosts;
