import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserProfile } from "@/types/Interface";
import ProfileLinkButton from "../ProfileLinkButton";

const MyFollows = () => {
  const [followsData, setFollowsData] = useState<UserProfile[]>([]);

  useEffect(() => {
    axios
      .get(`./outputBack/subscriptions.json`)
      .then((res) => setFollowsData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="my-follows">
      <h1>Mes suivis</h1>

      {followsData.map((follow) => (
        <ProfileLinkButton key={follow.id} user={follow} />
      ))}
    </div>
  );
};

export default MyFollows;
