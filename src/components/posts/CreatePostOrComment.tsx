import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

interface Props {
  type: "comment" | "post";
}

const CreatePostOrComment = ({ type }: Props) => {
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

      window.location.reload();
    } catch (err) {
      setError("Le message n'a pas pu être envoyé, veuillez réessayer");
    }
  };

  return (
    <div>
      <form onSubmit={handleMessage} className="create-message">
        <textarea
          placeholder={type === "post" ? "Écrire un post ..." : "Commenter..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">
          <i className="fa-solid fa-share"></i>
        </button>
      </form>

      <p className="create-message__error">{error}</p>
    </div>
  );
};

export default CreatePostOrComment;
