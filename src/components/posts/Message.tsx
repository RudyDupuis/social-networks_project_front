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
        .post(`${type}/delete/${id}`, {
          headers: {
            Authorization: `bearer ${Cookies.get("token")}`,
          },
        })
        .then((res) => {
          window.location.reload();
        })
        .catch((error) =>
          setError(
            `Une erreur ${error.response.status} c'est produite, veuillez réessayer !`
          )
        );
    }

    setError("Êtes-vous sûr de vouloir supprimer ?");
    setSureToDelete(true);
  };

  const editMessage = () => {
    if (newMessage === "") {
      return setIsEditing(false);
    }

    if (newMessage.length < 5) {
      return setError("Trop court !");
    }

    const data = {
      newMessage,
    };

    axios
      .post(`${type}/update/${id}`, data, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        setMessageDisplay(newMessage);
        setIsEditing(false);
      })
      .catch((error) => {
        setError(
          `Une erreur ${error.response.status} c'est produite, veuillez réessayer !`
        );
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
              maxLength={300}
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
