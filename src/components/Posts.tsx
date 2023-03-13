import Cookies from "js-cookie";
import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import EditText from "./EditText";
import CreateComment from "./postsComments/CreateComment";
import ProfilPostsComments from "./postsComments/ProfilPostsComments";

const Posts = () => {
  return (
    <div className="posts">
      <div className="posts__content">
        <ProfilPostsComments />
        <div className="posts__content--message">
          <EditText />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            quae repudiandae ex fuga itaque molestiae rem, necessitatibus fugit
            quod libero dolore dignissimos odio minus earum ad velit laborum,
            voluptates explicabo reiciendis. Eius laboriosam dolor impedit
            architecto error? Eaque, nisi asperiores!
          </p>
        </div>
      </div>
      <CreateComment />
      <div className="posts__comments">
        <Comments />
        <Comments />
      </div>
    </div>
  );
};

export default Posts;
