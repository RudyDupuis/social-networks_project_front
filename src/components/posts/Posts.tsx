import { Post } from "@/types/Interface";
import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import EditText from "./EditText";
import Interaction from "./Interaction";
import CreateComment from "./CreateComment";
import Link from "next/link";

interface Props {
  data: Post;
}

const Posts = ({ data }: Props) => {
  function formatDate(date: string): string {
    const [year, month, day] = date.substr(0, 10).split("-");
    const [hour, minute] = date.substr(11, 5).split(":");
    return `${day}/${month}/${year.substr(2)} à ${hour} h ${minute}`;
  }

  return (
    <div className="posts">
      <div className="posts__content">
        <div className="posts__content--container">
          <div className="posts__content--profil">
            <Link href={{ pathname: "/profil", query: { id: data.user.id } }}>
              <Image
                src={
                  data.user.avatar.url
                    ? data.user.avatar.url
                    : "/assets/profil-picto.png"
                }
                alt="logo"
                width={119 / 3}
                height={119 / 3}
              />
            </Link>
            <div>
              <p>{data.user.username}</p>

              <p className="posts-date">
                {data.updated_at
                  ? formatDate(data.updated_at)
                  : formatDate(data.created_at)}
              </p>
            </div>
          </div>

          <Interaction
            likes={data.likes_count}
            comments={data.comments_count}
            id={data.id}
            type={"post"}
          />
        </div>
        <EditText
          message={data.message}
          author={data.author}
          id={data.id}
          type={"post"}
        />
      </div>

      <CreateComment />

      <div className="posts__comments">
        {data.comments_count !== "0" &&
          data.comments.map((comment) => (
            <Comments key={comment.id} data={comment} />
          ))}
      </div>
    </div>
  );
};

export default Posts;
