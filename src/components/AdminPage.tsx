import React from "react";
import Comments from "./Comments";
import Posts from "./Posts";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h2>Posts à modérer</h2>

      <Posts />
      <Posts />

      <h2>Commentaires à modérer</h2>

      <Comments />
      <Comments />
      <Comments />
    </div>
  );
};

export default AdminPage;