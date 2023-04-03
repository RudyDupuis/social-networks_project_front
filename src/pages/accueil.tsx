import Header from "@/components/header/Header";
import Notifs from "@/components/accueil/Notifs";
import Posts from "@/components/posts/Posts";
import { Notif, Post } from "@/types/Interface";
import { useEffect, useState } from "react";
import CreatePostOrComment from "@/components/posts/CreatePostOrComment";
import { axiosService } from "@/services/axiosService";

const accueil = () => {
  //Close the notification modal and redisplay the posts section
  const closeNotifs = () => {
    const notifs = document.querySelector(".home__notifs") as HTMLElement;
    notifs.classList.remove("home__notifs--open");

    const posts = document.querySelector(".home__posts") as HTMLElement;
    posts.style.display = "block";
  };

  //Fetch data
  //Posts
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [postsMessage, setPostsMessage] = useState("C'est calme par ici ...");
  const [subscriptionOnly, setSubscriptionOnly] = useState(false);

  useEffect(() => {
    let whatUri = subscriptionOnly
      ? "posts/postsSubscriptions.json"
      : "posts/postsGeneral.json";

    //cf services => axiosService
    axiosService({
      method: "get",
      uri: whatUri,
      thenAction: function (response) {
        setPostsData(response.data);
      },
      catchAction: function (error) {
        setPostsMessage(error);
      },
    });
  }, [subscriptionOnly]);

  //Notifs
  const [notifsData, setNotifsData] = useState<Notif[]>([]);
  const [notifsMessage, setNotifsMessage] = useState(
    "Vous n'avez pas de notification ..."
  );
  const [notifRemoved, setNotifRemoved] = useState(false);

  useEffect(() => {
    //cf services => axiosService
    axiosService({
      method: "get",
      uri: "notifs.json",
      thenAction: function (response) {
        setNotifsData(response.data);
      },
      catchAction: function (error) {
        setNotifsMessage(error);
      },
    });

    setNotifRemoved(false);
  }, [notifRemoved]);

  return (
    <main>
      <Header />

      <section className="home">
        <section className="home__posts">
          <CreatePostOrComment type={"post"} />

          <div className="home__posts--buttons">
            <button
              className={subscriptionOnly ? "btn-1" : "btn-1 btn-active"}
              onClick={() => setSubscriptionOnly(false)}
            >
              Général
            </button>
            <button
              className={subscriptionOnly ? "btn-1 btn-active" : "btn-1"}
              onClick={() => setSubscriptionOnly(true)}
            >
              Abonnements
            </button>
          </div>

          <div className="home__posts--list">
            {postsData.length > 0 ? (
              postsData.map((post) => <Posts key={post.id} data={post} />)
            ) : (
              <p className="posts-message">{postsMessage}</p>
            )}
          </div>
        </section>

        <section className="home__notifs">
          <i className="fa-solid fa-circle-xmark" onClick={closeNotifs}></i>

          <h2>Mes notifications</h2>

          <div className="home__notifs--list">
            <div>
              {notifsData.length > 0 ? (
                notifsData.map((notif) => (
                  <Notifs
                    key={notif.id}
                    data={notif}
                    isDeleted={(e: boolean) => setNotifRemoved(true)}
                  />
                ))
              ) : (
                <p className="notifs-message">{notifsMessage}</p>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default accueil;
