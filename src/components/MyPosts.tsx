import React from "react";
import Posts from "./Posts";

const MyPosts = () => {
  return (
    <div className="my-posts">
      <h1>Mes posts</h1>

      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default MyPosts;
