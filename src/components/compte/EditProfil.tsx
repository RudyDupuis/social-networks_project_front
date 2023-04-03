import React, { useState } from "react";
import InputField from "../InputField";
import { processEditProfilData } from "@/helpers/processFieldData";
import { axiosService } from "@/services/axiosService";

const EditProfil = () => {
  const [instructions, setInstructions] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null | "badFormat">(null);

  //Check that the loaded image is a 119x119 pixel PNG
  function handleFileChange(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
      const image = new Image();
      image.onload = function () {
        if (image.width !== 119 || image.height !== 119) {
          setInstructions("L'image sélectionnée doit faire 119px par 119px.");
          setAvatar("badFormat");
        } else {
          setAvatar(e.target.value);
        }
      };
      image.src = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const processData = processEditProfilData(username, mail, password, avatar);

    if (typeof processData === "string") {
      return setInstructions(processData);
    }

    //cf services => axiosService
    axiosService({
      method: "post",
      uri: "user/update",
      data: processData,
      thenAction: function (response) {
        setInstructions("Votre profil à été mis à jour !");
      },
      catchAction: function (error) {
        setInstructions(error);
      },
    });
  };

  return (
    <form className="edit-profil" onSubmit={handleRegister}>
      <h1>Modifier mon profil</h1>

      <InputField
        type="text"
        placeholder="Pseudo"
        required={false}
        onChange={(e: any) => setUsername(e.target.value)}
        icon="user"
      />

      <InputField
        type="mail"
        placeholder="Mail"
        required={false}
        onChange={(e: any) => setMail(e.target.value)}
        icon="envelope"
      />

      <label htmlFor="profil-picture">
        Photo de profil <span>(Png de 119px par 119px)</span>
      </label>

      <div className="input-1">
        <input
          type="file"
          id="profil-picture"
          onChange={(e: any) => {
            handleFileChange(e);
          }}
          accept=".png"
        />
        <i className="fa-solid fa-camera"></i>
      </div>

      <InputField
        type="password"
        placeholder="Mot de passe"
        required={false}
        onChange={(e: any) => setPassword(e.target.value)}
        icon="lock"
      />

      <input type="submit" value="Sauvegarder" className="btn-1" />
      <p className="edit-profil__instructions">{instructions}</p>
    </form>
  );
};

export default EditProfil;
