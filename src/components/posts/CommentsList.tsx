import { Comment } from "@/types/Interface";
import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import CreatePostOrComment from "./CreatePostOrComment";
import { axiosService } from "@/services/axiosService";

interface Props {
  id: number;
}

const CommentsList = ({ id }: Props) => {
  const [commentsData, setCommentsData] = useState<Comment[]>([]);
  const [commentsMessage, setCommentsMessage] = useState(
    "Soyez le premier à commenter !"
  );

  useEffect(() => {
    //cf services => axiosService
    axiosService({
      method: "get",
      uri: `comments/comment${id}.json`,
      thenAction: function (response) {
        setCommentsData(response.data);
      },
      catchAction: function (error) {
        setCommentsMessage(error);
      },
    });
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
