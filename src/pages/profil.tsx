import Header from "@/components/Header";
import Posts from "@/components/Posts";
import { UserProfile } from "@/types/Profile";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const profil = () => {
  const [userData, setUserData] = useState<UserProfile>({
    id: 0,
    username: "",
    email: "",
    avatar_url: "",
    role: "",
    created_at: "",
    updated_at: null,
    posts: [],
    posts_count: "",
  });

  //Get profile id for create profile page
  const router = useRouter();
  const { id } = router.query;

  //If the data is found, display the page otherwise put an error message
  const [displayProfile, setDisplayProfile] = useState(false);

  useEffect(() => {
    if (id) {
      axios
        .get(`./BackTest/profil${id}.json`)
        .then((res) => {
          setDisplayProfile(true);
          setUserData(res.data.data);
        })
        .catch(() => setDisplayProfile(false));
    }
  }, [id]);

  return (
    <main>
      <Header />
      {displayProfile ? (
        <section className="profil">
          <div className="profil__infos">
            <div className="profil__infos--content">
              <Image
                src={
                  userData.avatar_url
                    ? userData.avatar_url
                    : "/assets/profil-picto.png"
                }
                alt="logo"
                width={119}
                height={119}
              />

              <div>
                <p className="profil-pseudo">{userData.username}</p>
                <p className="profil-mail">{userData.email}</p>
              </div>
            </div>
            <div className="profil__infos--buttons">
              <button className="btn-2">Suivre</button>
              <button className="btn-2">Bannir</button>
            </div>
          </div>

          <div className="profil__posts">
            {userData.posts.map((post) => (
              <Posts key={post.id} data={post} />
            ))}
          </div>
        </section>
      ) : (
        <h2 className="profil-error">Profil non trouvé</h2>
      )}
    </main>
  );
};

export default profil;
