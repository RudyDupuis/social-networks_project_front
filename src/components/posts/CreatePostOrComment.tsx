import { axiosService } from "@/services/axiosService";
import React, { useState } from "react";

interface Props {
  type: "comment" | "post";
}

const CreatePostOrComment = ({ type }: Props) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.length < 5) {
      setError("Trop court !");
      return;
    }

    //cf services => axiosService
    axiosService({
      method: "post",
      uri: `${type}/create`,
      data: message,
      thenAction: function (response) {
        window.location.reload();
      },
      catchAction: function (error) {
        setError(error);
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleMessage} className="create-message">
        <textarea
          placeholder={type === "post" ? "Écrire un post ..." : "Commenter..."}
          maxLength={300}
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
