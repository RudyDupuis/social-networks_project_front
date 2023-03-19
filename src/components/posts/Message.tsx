import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

interface Props {
  message: string;
  author: number;
  id: number;
  type: string;
}

const Message = ({ message, author, id, type }: Props) => {
  const [editable, setEditable] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState(message);
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");
  const [sureToDelete, setSureToDelete] = useState(false);

  //Manage edit view based on role and user
  useEffect(() => {
    if (
      Cookies.get("id") === author.toString() ||
      Cookies.get("role") === "ADMIN"
    ) {
      setEditable(true);
    }
  }, []);

  const deleteMessage = () => {
    if (sureToDelete) {
      axios
        .delete("" + id, {
          headers: {
            Authorization: `bearer ${Cookies.get("token")}`,
          },
        })
        .catch((err) => console.log(err));

      window.location.reload();
    }

    setError("Êtes-vous sûr de vouloir supprimer ?");
    setSureToDelete(true);
  };

  const editMessage = () => {
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

  return (
    <div>
      {isEditing ? (
        <div className="message">
          <div className="message__edit">
            <i
              className="fa-regular fa-circle-check btn-anim"
              onClick={() => {
                editMessage();
              }}
            ></i>
          </div>

          <div className="message__content">
            <textarea
              autoFocus
              defaultValue={messageDisplay}
              onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
            <p className="message__content--error">{error}</p>
          </div>
        </div>
      ) : (
        <div className="message">
          {editable && (
            <div className="message__edit">
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

          <div className="message__content">
            <p>{messageDisplay}</p>
            <p className="message__content--error">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
