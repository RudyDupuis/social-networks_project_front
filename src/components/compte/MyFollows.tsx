import React, { useEffect, useState } from "react";
import { UserProfile } from "@/types/Interface";
import ProfileLinkButton from "../ProfileLinkButton";
import { axiosService } from "@/services/axiosService";

const MyFollows = () => {
  const [followsData, setFollowsData] = useState<UserProfile[]>([]);
  const [errorMessage, setErrorMessage] = useState(
    "Vous ne suivez personne ..."
  );

  useEffect(() => {
    //cf services => axiosService
    axiosService({
      method: "get",
      uri: "subscriptions.json",
      thenAction: function (response) {
        setFollowsData(response.data);
      },
      catchAction: function (error) {
        setErrorMessage(error);
      },
    });
  }, []);
  return (
    <div className="my-follows">
      <h1>Mes suivis</h1>

      {followsData.length > 0 ? (
        followsData.map((follow) => (
          <ProfileLinkButton key={follow.id} user={follow} />
        ))
      ) : (
        <p className="my-follows__message">{errorMessage}</p>
      )}
    </div>
  );
};

export default MyFollows;
