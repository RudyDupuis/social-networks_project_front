import { UserProfileLight } from "@/types/Interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: UserProfileLight;
}

const ProfileLinkButton = ({ data }: Props) => {
  return (
    <Link
      key={data.id}
      href={{ pathname: "/profil", query: { id: data.id } }}
      className="results-container__result"
    >
      <div>
        <Image
          src={data.avatar.url ? data.avatar.url : "/assets/profil-picto.png"}
          alt="logo"
          width={96 / 4}
          height={119 / 4}
        />
        <p>{data.username}</p>
      </div>
      <i className="fa-solid fa-angle-right"></i>
    </Link>
  );
};

export default ProfileLinkButton;
