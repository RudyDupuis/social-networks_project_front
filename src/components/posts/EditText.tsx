import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

interface Props {
  message: string;
  author: number;
  id: number;
  type: string;
}

const EditText = ({ message, author, id, type }: Props) => {
  const [editable, setEditable] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState(message);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");

  const deleteMessage = () => {
    axios
      .delete("" + id, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .catch((err) => console.log(err));
  };

  const editeMessage = () => {
    const data = {
      newMessage,
    };
    axios
      .put("" + id, data, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setMessageDisplay(newMessage);
          setIsEditing(false);
        }
      })
      .catch((err) => {
        setError("Une erreur c'est produite, veuillez réessayer !");
      });
  };

  useEffect(() => {
    if (
      Cookies.get("id") === author.toString() ||
      Cookies.get("role") === "ADMIN"
    ) {
      setEditable(true);
    }
  }, []);

  return (
    <div>
      {isEditing ? (
        <div className="posts__content--message">
          <div className="edit-text">
            <i
              className="fa-regular fa-circle-check btn-anim"
              onClick={() => {
                editeMessage();
              }}
            ></i>
          </div>
          <div className="edit-message">
            <textarea
              autoFocus
              className="edit-message"
              defaultValue={messageDisplay}
              onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
            <p>{error}</p>
          </div>
        </div>
      ) : (
        <div className="posts__content--message">
          {editable && (
            <div className="edit-text">
              <i
                className="fa-solid fa-pen-to-square btn-anim"
                onClick={() => {
                  setIsEditing(true);
                }}
              ></i>
              <i
                className="fa-regular fa-circle-xmark btn-anim"
                onClick={() => deleteMessage()}
              ></i>
            </div>
          )}

          <p>{messageDisplay}</p>
        </div>
      )}
    </div>
  );
};

export default EditText;
