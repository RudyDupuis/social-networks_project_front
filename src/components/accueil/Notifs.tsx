import { Notif } from "@/types/Interface";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DateFormat from "../DateFormat";

interface Props {
  data: Notif;
  isDeleted(e: boolean): void;
}

const Notifs = ({ data, isDeleted }: Props) => {
  const deleteNotif = () => {
    axios
      .post("/notifs/delete", {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
        },
      })
      .then(() => isDeleted(true))
      .catch((error) => console.log(error));
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
        <p className="notification__date">
          <DateFormat date={data.created_at} />
        </p>
      </div>
      <i
        className="fa-solid fa-circle-xmark btn-anim"
        onClick={() => deleteNotif()}
      ></i>
    </div>
  );
};

export default Notifs;
