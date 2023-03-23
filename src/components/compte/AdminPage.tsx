import { Comment, Post } from "@/types/Interface";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Comments from "../posts/Comments";
import Posts from "../posts/Posts";

const AdminPage = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [commentsData, setCommentsData] = useState<Comment[]>([]);

  useEffect(() => {
    axios
      .get(`./outputBack/adminPage.json`)
      .then((res) => {
        setPostsData(res.data.data.posts);
        setCommentsData(res.data.data.comments);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="admin-page">
      <h2>Posts à modérer</h2>

      {postsData.map((post) => (
        <Posts key={post.id} data={post} />
      ))}

      <h2>Commentaires à modérer</h2>

      {commentsData.map((comment) => (
        <Comments key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default AdminPage;
