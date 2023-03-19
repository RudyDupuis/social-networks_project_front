import { Comment } from "@/types/Interface";
import React from "react";
import Author from "./Author";
import Message from "./Message";
import Interaction from "./Interaction";

interface Props {
  data: Comment;
}

const Comments = ({ data }: Props) => {
  return (
    <div className="posts__content comments">
      <div className="posts__content--top">
        <Author
          id={data.user.id}
          avatar={data.user.avatar.url}
          username={data.user.username}
          created_at={data.created_at}
        />

        <Interaction
          likes={data.likes_count}
          comments={null}
          id={data.id}
          type={"comment"}
          commentsEnabled={() => {}}
        />
      </div>
      <Message
        message={data.message}
        author={data.author}
        id={data.id}
        type={"comment"}
      />
    </div>
  );
};

export default Comments;
