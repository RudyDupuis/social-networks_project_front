import Cookies from "js-cookie";
import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import EditText from "./EditText";
import CreateComment from "./postsComments/CreateComment";
import ProfilPostsComments from "./postsComments/ProfilPostsComments";

const Posts = ({ data }: any) => {
  const userId = Cookies.get("user-id");
  const userRule = Cookies.get("user-rule");
  console.log(data);

  return (
    <div className="posts">
      <div className="posts__content">
        <ProfilPostsComments data={data} />
        <div className="posts__content--message">
          {(userId === data.author || userRule === "admin") && <EditText />}
          <p>{data.message}</p>
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
