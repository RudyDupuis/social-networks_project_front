import React, { useState } from "react";
import CGU from "../CGU";

const CheckboxCGU = () => {
  const [cguDisplayed, setCguDisplayed] = useState(false);

  const handleCguClick = () => {
    setCguDisplayed(true);
  };

  const handleCloseClick = () => {
    setCguDisplayed(false);
  };

  return (
    <div className="register__checkbox">
      <input type="checkbox" id="CGU" required />

      <label htmlFor="CGU">
        Accepter les <strong onClick={handleCguClick}>CGU</strong>
      </label>

      {cguDisplayed && (
        <div className="register__cgu">
          <CGU />

          <i
            className="fa-solid fa-circle-xmark btn-anim"
            onClick={handleCloseClick}
          ></i>
        </div>
      )}
    </div>
  );
};

export default CheckboxCGU;
