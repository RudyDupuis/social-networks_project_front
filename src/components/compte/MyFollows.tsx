import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserProfile } from "@/types/Interface";
import ProfileLinkButton from "../ProfileLinkButton";
import Cookies from "js-cookie";

const MyFollows = () => {
  const [followsData, setFollowsData] = useState<UserProfile[]>([]);
  const [errorMessage, setErrorMessage] = useState(
    "Vous ne suivez personne ..."
  );

  useEffect(() => {
    axios
      .get(`./outputBack/subscriptions.json`, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => setFollowsData(res.data.data))
      .catch((error) =>
        setErrorMessage(`Une erreur ${error.response.status} s'est produite.`)
      );
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
