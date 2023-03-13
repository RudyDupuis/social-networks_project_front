import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const [message, setMessage] = useState("");

  const handleMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      message,
    };

    const res = await axios.post("", data);
    setMessage("");
  };

  return (
    <form onSubmit={handleMessage} className="message home__posts--create">
      <textarea
        placeholder="Écrire un post ..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">
        <i className="fa-solid fa-share"></i>
      </button>
    </form>
  );
};

export default CreatePost;
