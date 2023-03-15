import { Comment } from "@/types/Interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EditText from "./postsComments/EditText";
import Interaction from "./postsComments/Interaction";

interface Props {
  data: Comment;
}

const Comments = ({ data }: Props) => {
  function formatDate(date: string): string {
    const [year, month, day] = date.substr(0, 10).split("-");
    const [hour, minute] = date.substr(11, 5).split(":");
    return `${day}/${month}/${year.substr(2)} à ${hour} h ${minute}`;
  }

  return (
    <div className="posts__content comments">
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
          comments={null}
          id={data.id}
          type={"comment"}
        />
      </div>
      <EditText
        message={data.message}
        author={data.author}
        id={data.id}
        type={"comment"}
      />
    </div>
  );
};

export default Comments;
