import React, { useEffect, useState } from "react";
import Posts from "../posts/Posts";
import { axiosService } from "@/services/axiosService";

interface Props {
  userId: number;
}

const ProfilePosts = ({ userId }: Props) => {
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    "Cet utilisateur n'a toujours rien posté !"
  );

  useEffect(() => {
    //cf services => axiosService
    axiosService({
      method: "get",
      uri: `posts/profile/${userId}.json`,
      thenAction: function (response) {
        setPosts(response.data);
      },
      catchAction: function (error) {
        setErrorMessage(error);
      },
    });
  }, [userId]);

  return (
    <div className="profil__posts">
      {posts.length > 0 ? (
        posts.map((post: any) => <Posts key={post.id} data={post} />)
      ) : (
        <p className="profil__posts--error">{errorMessage}</p>
      )}
    </div>
  );
};

export default ProfilePosts;
