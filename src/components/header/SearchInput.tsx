import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileLinkButton from "../ProfileLinkButton";
import { UserProfile } from "@/types/Interface";
import { useRouter } from "next/router";

const SearchInput = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [usersData, setUsersData] = useState<UserProfile[]>([]);
  const [nullSearch, setNullSearch] = useState("Profil inconnu.");

  //Prevents the modal from disappearing if you click on a profile
  const handleBlur = (e: any) => {
    const isProfileLinkButton =
      e.relatedTarget &&
      e.relatedTarget.className.includes("profil-link-button");

    if (!isProfileLinkButton) {
      setSearchFocused(false);
    }
  };

  //Close the modal when changing profiles on the profile page
  const router = useRouter();
  useEffect(() => {
    setSearchFocused(false);
  }, [router.query.id]);

  //Fetch data
  useEffect(() => {
    axios
      .get(`./outputBack/headerSearch.json`)
      .then((res) => setUsersData(res.data.data))
      .catch((error) =>
        setNullSearch(`Une erreur ${error.response.status} s'est produite.`)
      );
  }, [searchValue]);

  return (
    <div className="header-search">
      <div className="input-1">
        <input
          type="text"
          placeholder="Rechercher"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={handleBlur}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div
        className="header-search__results"
        style={{ display: searchFocused ? "block" : "none" }}
      >
        {usersData.length > 0 ? (
          usersData.map((user) => (
            <ProfileLinkButton key={user.id} user={user} />
          ))
        ) : (
          <p className="null-search">{nullSearch}</p>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
