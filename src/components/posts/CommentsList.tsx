import { Comment } from "@/types/Interface";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import CreatePostOrComment from "./CreatePostOrComment";

interface Props {
  id: number;
}

const CommentsList = ({ id }: Props) => {
  const [commentsData, setCommentsData] = useState<Comment[]>([]);
  const [commentsMessage, setCommentsMessage] = useState(
    "Soyez le premier à commenter !"
  );

  useEffect(() => {
    axios
      .get(`./outputBack/comments/comment${id}.json`)
      .then((res) => setCommentsData(res.data.data))
      .catch((error) =>
        setCommentsMessage(
          `Une erreur ${error.response.status} s'est produite.`
        )
      );
  });

  return (
    <div className="posts__comments">
      <CreatePostOrComment type={"comment"} />

      {commentsData.length > 0 ? (
        commentsData.map((comment) => (
          <Comments key={comment.id} data={comment} />
        ))
      ) : (
        <p className="posts__comments--message">{commentsMessage}</p>
      )}
    </div>
  );
};

export default CommentsList;
