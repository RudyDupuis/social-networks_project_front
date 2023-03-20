import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

interface Props {
  isFollowed: boolean;
  bannedUser: boolean;
  currentUserIsAdmin: boolean;
  profileId: number;
}

const ProfileButtons = ({
  isFollowed,
  bannedUser,
  currentUserIsAdmin,
  profileId,
}: Props) => {
  //Follow
  const [currentUserFollows, setCurrentUserFollows] = useState(isFollowed);

  const follow = () => {
    currentUserFollows
      ? setCurrentUserFollows(false)
      : setCurrentUserFollows(true);

    axios
      .put(
        `/user/${profileId}/${
          currentUserFollows ? "subscribe" : "unsubscribe"
        }`,
        {
          headers: {
            Authorization: `bearer ${Cookies.get("token")}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };

  //Banish
  const [isBanned, setIsBanned] = useState(bannedUser);

  const banish = () => {
    isBanned ? setIsBanned(false) : setIsBanned(true);
    axios
      .put(`/user/${profileId}/${isBanned ? "banish" : "unbanish"}`, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profil__infos--buttons">
      <button className="btn-2" onClick={() => follow()}>
        {currentUserFollows ? "Ne plus suivre" : "Suivre"}
      </button>

      {currentUserIsAdmin && (
        <button className="btn-2" onClick={() => banish()}>
          {bannedUser ? "Débannir" : "Bannir"}
        </button>
      )}
    </div>
  );
};

export default ProfileButtons;
