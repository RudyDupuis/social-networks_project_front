import { Post } from "@/types/Interface";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "../posts/Posts";

interface Props {
  userId: number;
}

const ProfilePosts = ({ userId }: Props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`./outputBack/posts/profile/${userId}.json`)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((er) => console.log(er));
  }, [userId]);

  return (
    <div className="profil__posts">
      {posts.map((post: any) => (
        <Posts key={post.id} data={post} />
      ))}
    </div>
  );
};

export default ProfilePosts;
