import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

const CreateComment = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      message,
    };

    try {
      const res = await axios.post("", data, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      });

      if (res.status !== 200) {
        return setError(
          "Le message n'a pas pu être envoyé, veuillez réessayer"
        );
      }

      setMessage("");
    } catch (err) {
      setError("Le message n'a pas pu être envoyé, veuillez réessayer");
    }
  };

  return (
    <div className="posts__createComment">
      <form onSubmit={handleMessage} className="message">
        <textarea
          placeholder="Commenter ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">
          <i className="fa-solid fa-share"></i>
        </button>
      </form>
      <p className="message__error">{error}</p>
    </div>
  );
};

export default CreateComment;
