import { Post } from "@/types/Interface";
import React, { useState } from "react";
import Message from "./Message";
import Interaction from "./Interaction";
import Author from "./Author";
import CommentsList from "./CommentsList";

interface Props {
  data: Post;
}

const Posts = ({ data }: Props) => {
  const [displayComments, setDisplayComments] = useState(false);

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
            commentsEnabled={(e: boolean) => {
              if (e) {
                return setDisplayComments(true);
              }
              setDisplayComments(false);
            }}
          />
        </div>

        <Message
          message={data.message}
          author={data.author}
          id={data.id}
          type={"post"}
        />
      </div>

      {displayComments && <CommentsList />}
    </div>
  );
};

export default Posts;
