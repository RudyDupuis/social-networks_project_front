import { Comment } from "@/types/Interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./Author";
import EditText from "./EditText";
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
        />
      </div>
      <EditText
        message={data.message}
        author={data.author}
        id={data.id}
        type={"comment"}
      />
    </div>
  );
};

export default Comments;
