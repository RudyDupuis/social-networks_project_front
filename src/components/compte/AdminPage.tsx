import { Comment, Post } from "@/types/Interface";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Comments from "../posts/Comments";
import Posts from "../posts/Posts";

const AdminPage = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [commentsData, setCommentsData] = useState<Comment[]>([]);
  const [postsMessage, setPostsMessage] = useState("Vous êtes à jour !");
  const [commentsMessage, setCommentsMessage] = useState("Vous êtes à jour !");

  useEffect(() => {
    axios
      .get(`./outputBack/adminPage.json`, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        setPostsData(res.data.data.posts);
        setCommentsData(res.data.data.comments);
      })
      .catch((error) => {
        setPostsMessage(`Une erreur ${error.response.status} s'est produite.`);
        setCommentsMessage(
          `Une erreur ${error.response.status} s'est produite.`
        );
      });
  }, []);
  return (
    <div className="admin-page">
      <h2>Posts à modérer</h2>

      {postsData.length > 0 ? (
        postsData.map((post) => <Posts key={post.id} data={post} />)
      ) : (
        <p className="admin-page__message">{postsMessage}</p>
      )}

      <h2>Commentaires à modérer</h2>

      {commentsData.length > 0 ? (
        commentsData.map((comment) => (
          <Comments key={comment.id} data={comment} />
        ))
      ) : (
        <p className="admin-page__message">{commentsMessage}</p>
      )}
    </div>
  );
};

export default AdminPage;
