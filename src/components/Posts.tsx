import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import EditText from "./EditText";
import Interaction from "./Interaction";

const Posts = () => {
  return (
    <div className="posts">
      <div className="posts__content">
        <div className="posts__content--container">
          <div className="posts__content--profil">
            <Image
              src="/assets/profil-picto.png"
              alt="logo"
              width={96 / 3}
              height={119 / 3}
            />
            <div>
              <p>John Doe</p>
              <p className="posts-date">23 Fev à 09:05</p>
            </div>
          </div>
          <Interaction />
        </div>
        <div className="posts__content--message">
          <EditText />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            deserunt velit exercitationem sunt harum perferendis dolorum
            pariatur nostrum officiis iste.
          </p>
        </div>
      </div>
      <form action="" className="message posts__createComment">
        <textarea placeholder="Commenter ..."></textarea>
        <button type="submit">
          <i className="fa-solid fa-share"></i>
        </button>
      </form>
      <div className="posts__comments">
        <Comments />
        <Comments />
      </div>
    </div>
  );
};

export default Posts;
