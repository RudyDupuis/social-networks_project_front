import CreatePost from "@/components/accueil/CreatePost";
import Header from "@/components/Header";
import Notifs from "@/components/Notifs";
import Posts from "@/components/Posts";

const accueil = () => {
  //Close the notification modal and redisplay the posts section
  const closeNotifs = () => {
    (document.querySelector(".home__notifs") as HTMLElement).classList.remove(
      "home__notifs--open"
    );
    (document.querySelector(".home__posts") as HTMLElement).style.display =
      "block";
  };

  return (
    <main>
      <Header />
      <section className="home">
        <section className="home__posts">
          <CreatePost />
          <div className="home__posts--cat">
            <button className="btn-1">Général</button>
            <button className="btn-1">Abonnements</button>
          </div>
          <div className="home__posts--list">
            <Posts />
            <Posts />
            <Posts />
          </div>
        </section>
        <section className="home__notifs">
          <i className="fa-solid fa-circle-xmark" onClick={closeNotifs}></i>
          <h2>
            <i className="fa-solid fa-bell"></i> Mes notifications
          </h2>
          <div className="home__posts--list">
            <Notifs />
            <Notifs />
            <Notifs />
          </div>
        </section>
      </section>
    </main>
  );
};

export default accueil;
