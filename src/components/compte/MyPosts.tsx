import { Post } from "@/types/Interface";
import React from "react";
import Posts from "../Posts";

interface Props {
  data: Post[];
}

const MyPosts = ({ data }: Props) => {
  return (
    <div className="my-posts">
      <h1>Mes posts</h1>

      {data.map((post) => (
        <Posts key={post.id} data={post} />
      ))}
    </div>
  );
};

export default MyPosts;
