import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "../posts/Posts";

interface Props {
  userId: number;
}

const ProfilePosts = ({ userId }: Props) => {
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    "Cet utilisateur n'a toujours rien posté !"
  );

  useEffect(() => {
    axios
      .get(`./outputBack/posts/profile/${userId}.json`)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((error) =>
        setErrorMessage(`Une erreur ${error.response.status} s'est produite.`)
      );
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
