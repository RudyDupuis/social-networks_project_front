import { axiosService } from "@/services/axiosService";
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

    //cf services => axiosService
    axiosService({
      method: "post",
      uri: `/user/${profileId}/${
        currentUserFollows ? "subscribe" : "unsubscribe"
      }`,
      catchAction: function (error) {
        console.log(error);
      },
    });
  };

  //Banish
  const [isBanned, setIsBanned] = useState(bannedUser);

  const banish = () => {
    isBanned ? setIsBanned(false) : setIsBanned(true);

    //cf services => axiosService
    axiosService({
      method: "post",
      uri: `/user/${profileId}/${isBanned ? "banish" : "unbanish"}`,
      catchAction: function (error) {
        console.log(error);
      },
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
