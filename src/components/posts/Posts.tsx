import { Post } from "@/types/Interface";
import React from "react";
import Comments from "./Comments";
import EditText from "./EditText";
import Interaction from "./Interaction";
import CreateComment from "./CreateComment";
import Author from "./Author";

interface Props {
  data: Post;
}

const Posts = ({ data }: Props) => {
  return (
    <div className="posts">
      <div className="posts__content">
        <div className="posts__content--top">
          <Author
            id={data.user.id}
            avatar={data.user.avatar.url}
            username={data.user.username}
            created_at={data.created_at}
          />

          <Interaction
            likes={data.likes_count}
            comments={data.comments_count}
            id={data.id}
            type={"post"}
          />
        </div>
        <EditText
          message={data.message}
          author={data.author}
          id={data.id}
          type={"post"}
        />
      </div>

      <CreateComment />

      <div className="posts__comments">
        {data.comments_count !== "0" &&
          data.comments.map((comment) => (
            <Comments key={comment.id} data={comment} />
          ))}
      </div>
    </div>
  );
};

export default Posts;
