import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DateFormat from "../DateFormat";

interface Props {
  id: number;
  avatar: string;
  username: string;
  created_at: string;
}

const Author = ({ id, avatar, username, created_at }: Props) => {
  //Do not link to user profile page
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    if (Cookies.get("id") === id.toString()) {
      setIsAuthor(true);
    }
  }, []);

  return (
    <div className="author">
      {isAuthor ? (
        <Image
          src={avatar ? avatar : "/assets/profil-picto.png"}
          alt="Avatar d'un utilisateur"
          priority={true}
          width={119 / 3}
          height={119 / 3}
        />
      ) : (
        <Link href={{ pathname: "/profil", query: { id: id } }}>
          <Image
            src={avatar ? avatar : "/assets/profil-picto.png"}
            alt="Avatar d'un utilisateur"
            priority={true}
            width={119 / 3}
            height={119 / 3}
          />
        </Link>
      )}

      <div>
        <p>{username}</p>

        <p className="author__date">
          <DateFormat date={created_at} />
        </p>
      </div>
    </div>
  );
};

export default Author;
