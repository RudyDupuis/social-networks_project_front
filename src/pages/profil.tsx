import Header from "@/components/header/Header";
import ProfileButtons from "@/components/profil/ProfileButtons";
import ProfilePosts from "@/components/profil/ProfilePosts";
import { axiosService } from "@/services/axiosService";
import { UserProfile } from "@/types/Interface";
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
    is_banned: false,
    created_at: "",
    updated_at: "",
    have_subscribed: true,
  });

  //Get profile id for create profile page
  const router = useRouter();
  const { id } = router.query;

  //If the data is found, display the page otherwise put an error message
  const [displayProfile, setDisplayProfile] = useState(false);

  useEffect(() => {
    if (id) {
      //cf services => axiosService
      axiosService({
        method: "get",
        uri: `profiles/profile${id}.json`,
        thenAction: function (response) {
          setDisplayProfile(true);
          setUserData(response.data);

          if (response.data.isbanned && Cookies.get("role") !== "ADMIN") {
            setDisplayProfile(false);
          }
        },
        catchAction: function (error) {
          setDisplayProfile(false);
        },
      });
    }
  }, [id]);

  //Know the role of the user
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (Cookies.get("role") === "ADMIN") {
      setIsAdmin(true);
    }
  }, []);

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
                alt="Avatar d'un utilisateur"
                priority={true}
                width={119}
                height={119}
              />

              <div>
                <p className="profil-pseudo">{userData.username}</p>
                {isAdmin && <p className="profil-mail">{userData.email}</p>}
              </div>
            </div>

            <ProfileButtons
              isFollowed={userData.have_subscribed}
              bannedUser={userData.is_banned}
              currentUserIsAdmin={isAdmin}
              profileId={userData.id}
            />
          </div>

          <ProfilePosts userId={userData.id} />
        </section>
      ) : (
        <h2 className="profil-error">Profil non trouvé</h2>
      )}
    </main>
  );
};

export default profil;
