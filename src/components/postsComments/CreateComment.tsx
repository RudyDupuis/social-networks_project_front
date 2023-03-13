import axios from "axios";
import React, { useState } from "react";

const CreateComment = () => {
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
    <form onSubmit={handleMessage} className="message posts__createComment">
      <textarea
        placeholder="Commenter ..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">
        <i className="fa-solid fa-share"></i>
      </button>
    </form>
  );
};

export default CreateComment;
