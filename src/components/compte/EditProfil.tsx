import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import InputField from "../InputField";

const EditProfil = () => {
  const [instructions, setInstructions] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null | "badFormat">(null);

  //Check if the input information is correct
  const dataProcessing = (
    username: string | null,
    mail: string | null,
    password: string | null,
    avatar: File | null | "badFormat"
  ) => {
    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[\S]{8,}$/;
    const usernameLengthMin = 5;
    const usernameLengthMax = 15;
    let instructionsList = [];

    if (username) {
      if (
        username.length < usernameLengthMin ||
        username.length > usernameLengthMax
      ) {
        instructionsList.push("Le pseudo doit faire entre 5 et 15 caractères.");
      }
    }

    if (mail && !mailRegex.test(mail)) {
      instructionsList.push("Le mail n'est pas correct.");
    }

    if (avatar === "badFormat") {
      instructionsList.push("L'image sélectionnée doit faire 119px par 119px.");
    }

    if (password && !passwordRegex.test(password)) {
      instructionsList.push(
        "Le mot de passe doit contenir 8 caractères dont une majuscule et un chiffre."
      );
    }

    setInstructions(instructionsList.join("\n\n"));

    if (instructionsList.length === 0) {
      return {
        username,
        mail,
        password,
        avatar,
      };
    }
  };

  //check that the loaded image is a 119x119 pixel PNG
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

  //Api Error
  const handleApiError = (error: any) => {
    if (error.response.status === 409) {
      if (error.response.data.message === "This email is already taken") {
        return "Cette adresse mail est déjà utilisée.";
      }
      if (error.response.data.message === "This username is already taken") {
        return "Ce pseudo est déjà utilisé.";
      }
      return "Ce pseudo ou cette adresse mail est déjà utilisé.";
    }
    return `Une erreur ${error.response.status} s'est produite.`;
  };

  //Send to Api
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = dataProcessing(username, mail, password, avatar);

    if (data) {
      try {
        const res = await axios.post("/user/update", data, {
          headers: {
            Authorization: `bearer ${Cookies.get("token")}`,
          },
        });

        setInstructions("Votre profil à été mis à jour !");
      } catch (error: any) {
        setInstructions(handleApiError(error));
      }
    }
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
