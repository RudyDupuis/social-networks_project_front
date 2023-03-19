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

  useEffect(() => {
    axios
      .get(`./outputBack/comments/comment${id}.json`)
      .then((res) => setCommentsData(res.data.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="posts__comments ">
      <CreatePostOrComment type={"comment"} />

      {commentsData &&
        commentsData.map((comment) => (
          <Comments key={comment.id} data={comment} />
        ))}
    </div>
  );
};

export default CommentsList;
