import { Post } from "@/types/Interface";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "../posts/Posts";

const MyPosts = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [errorMessage, setErrorMessage] = useState(
    "Vous n'êtes pas très bavard ..."
  );

  useEffect(() => {
    axios
      .get(`./outputBack/posts/profile/1.json`)
      .then((res) => setPostsData(res.data.data))
      .catch((error) =>
        setErrorMessage(`Une erreur ${error.response.status} s'est produite.`)
      );
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
