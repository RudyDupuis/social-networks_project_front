import { Post } from "@/types/Interface";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "../posts/Posts";

const MyPosts = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(`./outputBack/posts/profile/1.json`)
      .then((res) => setPostsData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="my-posts">
      <h1>Mes posts</h1>

      {postsData.map((post) => (
        <Posts key={post.id} data={post} />
      ))}
    </div>
  );
};

export default MyPosts;
