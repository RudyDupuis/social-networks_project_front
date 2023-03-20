import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileLinkButton from "../ProfileLinkButton";
import { UserProfileLight } from "@/types/Interface";

const SearchInput = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [usersData, setUsersData] = useState<UserProfileLight[]>([]);

  //Prevents the modal from disappearing if you click on a profile
  const handleBlur = (e: any) => {
    const isProfileLinkButton =
      e.relatedTarget &&
      e.relatedTarget.className.includes("profil-link-button");

    if (!isProfileLinkButton) {
      setSearchFocused(false);
    }
  };

  //Fetch data
  useEffect(() => {
    // axios
    //   .get(`/users/${searchValue}`)
    //   .then((res) => setUsersData(res.data.data))
    //   .catch((err) => console.log(err));

    axios
      .get(`./outputBack/headerSearch.json`)
      .then((res) => setUsersData(res.data.data))
      .catch((err) => console.log(err));
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
        {usersData &&
          usersData.map((user) => (
            <ProfileLinkButton key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
};

export default SearchInput;
