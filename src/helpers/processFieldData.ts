const usernameSize = (username : string, instructionsList : string[]) => {
    const usernameLengthMin = 5;
    const usernameLengthMax = 12;

    if (
        username.length < usernameLengthMin ||
        username.length > usernameLengthMax
      ) {
        instructionsList.push("Le pseudo doit faire entre 5 et 12 caractères.");
      }
}

const mailFormat = (mail : string, instructionsList : string[]) => {
    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!mailRegex.test(mail)) {
        instructionsList.push("Le mail n'est pas correct.");
      }
}

const passwordFormat = (password : string, instructionsList : string[]) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[\S]{8,}$/;

    if (!passwordRegex.test(password)) {
        instructionsList.push(
          "Le mot de passe doit contenir 8 caractères dont une majuscule et un chiffre."
        );
      }
}

/***********    Registration    ***********/

export const processRegistrationData = (
    username: string,
    mail: string,
    password: string,
    confPassword: string
  ) => {
    let instructionsList : string[] = [];

    usernameSize(username, instructionsList);
    mailFormat(mail, instructionsList);
    passwordFormat(password, instructionsList);

    if (password !== confPassword) {
      instructionsList.push("Les deux mots de passe ne sont pas identiques.");
    }

    //result
    if (instructionsList.length === 0) {
      return {
        username,
        mail,
        password,
      };
    }

    return instructionsList.join("\n\n");
  };

/***********    EditProfil    ***********/

export const processEditProfilData = (
    username: string | null,
    mail: string | null,
    password: string | null,
    avatar: File | null | "badFormat"
  ) => {
    let instructionsList : string[] = [];

    if (username) {
        usernameSize(username, instructionsList);
    }

    if (mail) {
        mailFormat(mail, instructionsList);
    }

    if (password) {
        passwordFormat(password, instructionsList);
    }

    if (avatar === "badFormat") {
      instructionsList.push("L'image sélectionnée doit faire 119px par 119px.");
    }

    //result
    if (instructionsList.length === 0) {
      return {
        username,
        mail,
        password,
        avatar,
      };
    }

    return instructionsList.join("\n\n");
  };