import { UserProfile } from "@/types/Profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: UserProfile[];
}

const MyFollows = ({ data }: Props) => {
  return (
    <div className="my-follows">
      <h1>Mes suivis</h1>

      {data.map((profil) => (
        <Link
          key={profil.id}
          href={{ pathname: "/profil", query: { id: profil.id } }}
        >
          <div className="my-follows__profil">
            <div>
              <Image
                src={
                  profil.avatar_url
                    ? profil.avatar_url
                    : "/assets/profil-picto.png"
                }
                alt="logo"
                width={119 / 3}
                height={119 / 3}
              />
              <p>{profil.username}</p>
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyFollows;
