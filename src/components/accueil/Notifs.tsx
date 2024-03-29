import { Notif } from "@/types/Interface";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DateFormat from "../DateFormat";
import { axiosService } from "@/services/axiosService";

interface Props {
  data: Notif;
  isDeleted(e: boolean): void;
}

const Notifs = ({ data, isDeleted }: Props) => {
  const deleteNotif = () => {
    //cf services => axiosService
    axiosService({
      method: "post",
      uri: "notifs/delete",
      thenAction: function (response) {
        isDeleted(true);
      },
      catchAction: function (error) {
        console.log(error);
      },
    });
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
          alt="Avatar d'un utilisateur"
          priority={true}
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
