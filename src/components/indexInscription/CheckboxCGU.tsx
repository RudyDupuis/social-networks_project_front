import React from "react";
import CGU from "../compte/CGU";

const CheckboxCGU = () => {
  return (
    <div className="register__checkbox">
      <input type="checkbox" id="CGU" required />

      <label htmlFor="CGU">
        Accepter les{" "}
        <strong
          onClick={() =>
            ((
              document.querySelector(".register__cgu") as HTMLElement
            ).style.display = "block")
          }
        >
          CGU
        </strong>
      </label>

      <div className="register__cgu">
        <CGU />

        <i
          className="fa-solid fa-circle-xmark"
          onClick={() =>
            ((
              document.querySelector(".register__cgu") as HTMLElement
            ).style.display = "none")
          }
        ></i>
      </div>
    </div>
  );
};

export default CheckboxCGU;
