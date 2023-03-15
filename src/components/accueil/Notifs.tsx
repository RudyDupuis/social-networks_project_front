import { Notif } from "@/types/Interface";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  data: Notif;
}

const Notifs = ({ data }: Props) => {
  function formatDate(date: string): string {
    const [year, month, day] = date.substr(0, 10).split("-");
    const [hour, minute] = date.substr(11, 5).split(":");
    return `${day}/${month}/${year.substr(2)} à ${hour} h ${minute}`;
  }

  const deleteNotif = () => {
    axios
      .delete("", {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="notification">
      <Link href={{ pathname: "/profil", query: { id: data.user.id } }}>
        <Image
          src={
            data.user.avatar.url
              ? data.user.avatar.url
              : "/assets/profil-picto.png"
          }
          alt="logo"
          width={119 / 3}
          height={119 / 3}
        />
      </Link>
      <div>
        <p>{data.message}</p>
        <p className="notification__date">{formatDate(data.created_at)}</p>
      </div>
      <i
        className="fa-solid fa-circle-xmark btn-anim"
        onClick={() => deleteNotif()}
      ></i>
    </div>
  );
};

export default Notifs;
