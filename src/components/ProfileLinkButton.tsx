import { UserProfile } from "@/types/Interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  user: UserProfile;
}

const ProfileLinkButton = ({ user }: Props) => {
  return (
    <Link
      key={user.id}
      href={{ pathname: "/profil", query: { id: user.id } }}
      className="profil-link-button"
    >
      <div>
        <Image
          src={user.avatar.url ? user.avatar.url : "/assets/profil-picto.png"}
          alt="Avatar d'un utilisateur"
          priority={true}
          width={119 / 4}
          height={119 / 4}
        />
        <p>{user.username}</p>
      </div>
      <i className="fa-solid fa-angle-right"></i>
    </Link>
  );
};

export default ProfileLinkButton;
