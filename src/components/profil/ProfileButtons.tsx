import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

interface Props {
  isFollowed: boolean | undefined;
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
      .post(
        `/user/${profileId}/${
          currentUserFollows ? "subscribe" : "unsubscribe"
        }`,
        {
          headers: {
            Authorization: `bearer ${Cookies.get("token")}`,
          },
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };

  //Banish
  const [isBanned, setIsBanned] = useState(bannedUser);

  const banish = () => {
    isBanned ? setIsBanned(false) : setIsBanned(true);
    axios
      .post(`/user/${profileId}/${isBanned ? "banish" : "unbanish"}`, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Change button state if props change
  useEffect(() => {
    setCurrentUserFollows(isFollowed);
    setIsBanned(bannedUser);
  }, [isFollowed, bannedUser]);

  return (
    <div className="profil__infos--buttons">
      <button className="btn-2" onClick={() => follow()}>
        {currentUserFollows ? "Ne plus suivre" : "Suivre"}
      </button>

      {currentUserIsAdmin && (
        <button className="btn-2" onClick={() => banish()}>
          {isBanned ? "Débannir" : "Bannir"}
        </button>
      )}
    </div>
  );
};

export default ProfileButtons;
