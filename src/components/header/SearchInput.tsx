import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileLinkButton from "../ProfileLinkButton";

const SearchInput = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [usersData, setUsersData] = useState([]);

  //Prevents the modal from disappearing if you click on a profile
  const handleBlur = (e: any) => {
    const isProfileLinkButton =
      e.relatedTarget &&
      e.relatedTarget.className.includes("results-container");

    if (!isProfileLinkButton) {
      setSearchFocused(false);
    }
  };

  useEffect(() => {
    const data = {
      searchValue,
    };

    // axios
    //   .post(`./BackTest/searchInput.json`, data)
    //   .then((res) => setUsersData(res.data.data))
    //   .catch((err) => console.log(err));

    axios
      .get(`./BackTest/searchInput.json`)
      .then((res) => setUsersData(res.data.data))
      .catch((err) => console.log(err));
  }, [searchValue]);

  return (
    <div className="header__right--search">
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
        className="results-container"
        style={{ display: searchFocused ? "block" : "none" }}
      >
        {usersData &&
          usersData.map((user) => <ProfileLinkButton data={user} />)}
      </div>
    </div>
  );
};

export default SearchInput;
