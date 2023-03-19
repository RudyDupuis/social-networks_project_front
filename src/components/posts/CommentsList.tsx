import { Comment } from "@/types/Interface";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

const CommentsList = () => {
  const [commentsData, setCommentsData] = useState<Comment[]>([]);

  useEffect(() => {
    axios
      .get(`./outputBack/comments.json`)
      .then((res) => setCommentsData(res.data.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="posts__comments ">
      <CreateComment />

      {commentsData &&
        commentsData.map((comment) => (
          <Comments key={comment.id} data={comment} />
        ))}
    </div>
  );
};

export default CommentsList;
