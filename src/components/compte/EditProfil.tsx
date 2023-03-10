import React from "react";

const EditProfil = () => {
  return (
    <form className="edit-profil">
      <h1>Modifier mon profil</h1>

      <div className="input-1">
        <input type="text" placeholder="Pseudo" />
        <i className="fa-solid fa-user"></i>
      </div>

      <div className="input-1">
        <input type="mail" placeholder="Mail" />
        <i className="fa-solid fa-envelope"></i>
      </div>

      <label htmlFor="profil-picture">Photo de profil</label>

      <div className="input-1">
        <input type="file" id="profil-picture" />
        <i className="fa-solid fa-camera"></i>
      </div>

      <div className="input-1">
        <input type="password" placeholder="Mot de passe" />
        <i className="fa-solid fa-lock"></i>
      </div>

      <input type="submit" value="Sauvegarder" className="btn-1" />
    </form>
  );
};

export default EditProfil;
