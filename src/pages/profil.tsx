import Header from "@/components/header/Header";
import Posts from "@/components/posts/Posts";
import { UserProfile } from "@/types/Interface";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const profil = () => {
  const [userData, setUserData] = useState<UserProfile>({
    id: 0,
    username: "",
    email: "",
    avatar: {
      url: "",
    },
    role: "",
    isbanned: false,
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

          if (res.data.data.isbanned && Cookies.get("role") !== "ADMIN") {
            setDisplayProfile(false);
          }
        })
        .catch(() => setDisplayProfile(false));
    }
  }, [id]);

  //Know the role of the user
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (Cookies.get("role") === "ADMIN") {
      setIsAdmin(true);
    }
  }, []);

  //Banish
  const [userBanned, setUserBanned] = useState(userData.isbanned);

  const banish = () => {
    let value = true;
    if (userBanned) {
      value = false;
    }
    setUserBanned(value);

    const data = {
      isbanned: value,
    };
    axios
      .put("" + id, data, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Follow
  const [userFollow, setUserFollow] = useState(false);

  const follow = () => {
    let value = true;
    if (userFollow) {
      value = false;
    }
    setUserFollow(value);

    const data = {
      follow: value,
    };
    axios
      .put("" + id, data, {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <Header />
      {displayProfile ? (
        <section className="profil">
          <div className="profil__infos">
            <div className="profil__infos--content">
              <Image
                src={
                  userData.avatar.url
                    ? userData.avatar.url
                    : "/assets/profil-picto.png"
                }
                alt="logo"
                width={119}
                height={119}
              />

              <div>
                <p className="profil-pseudo">{userData.username}</p>
                {isAdmin && <p className="profil-mail">{userData.email}</p>}
              </div>
            </div>
            <div className="profil__infos--buttons">
              <button className="btn-2" onClick={() => follow()}>
                {userFollow ? "Ne plus suivre" : "Suivre"}
              </button>
              {isAdmin && (
                <button className="btn-2" onClick={() => banish()}>
                  {userBanned ? "Débannir" : "Bannir"}
                </button>
              )}
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
