import CreatePost from "@/components/accueil/CreatePost";
import Header from "@/components/Header";
import Notifs from "@/components/Notifs";
import Posts from "@/components/Posts";
import { Notif, Post } from "@/types/Profile";
import axios from "axios";
import { useEffect, useState } from "react";

const accueil = () => {
  //Close the notification modal and redisplay the posts section
  const closeNotifs = () => {
    const notifs = document.querySelector(".home__notifs") as HTMLElement;
    notifs.classList.remove("home__notifs--open");

    const posts = document.querySelector(".home__posts") as HTMLElement;
    posts.style.display = "block";
  };

  //Fetch data
  const [notifsData, setNotifsData] = useState<Notif[]>([]);
  const [postsData, setPostsData] = useState<Post[]>([]);

  const [subscriptionOnly, setSubscriptionOnly] = useState(false);

  useEffect(() => {
    let uri = subscriptionOnly ? "homePostsSubscribes" : "homePostsAll";
    axios
      .get(`./BackTest/${uri}.json`)
      .then((res) => setPostsData(res.data.data))
      .catch((err) => console.log(err));

    axios
      .get("./BackTest/homeNotifs.json")
      .then((res) => setNotifsData(res.data.data))
      .catch((err) => console.log(err));
  }, [subscriptionOnly]);

  return (
    <main>
      <Header />
      <section className="home">
        <section className="home__posts">
          <CreatePost />
          <div className="home__posts--cat">
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
            {postsData.map((post) => (
              <Posts key={post.id} data={post} />
            ))}
          </div>
        </section>
        <section className="home__notifs">
          <i className="fa-solid fa-circle-xmark" onClick={closeNotifs}></i>
          <h2>
            <i className="fa-solid fa-bell"></i> Mes notifications
          </h2>
          <div className="home__notifs--list">
            <div>
              {notifsData.map((notif) => (
                <Notifs key={notif.id} data={notif} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default accueil;
