import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = './outputBack/';

interface ServiceParams<T> {
  method: string;
  uri: string;
  data?: T;
  thenAction?: (data: any) => void;
  catchAction?: (error: string) => void;
}

export const axiosService = <T>({
  method,
  uri,
  data,
  thenAction,
  catchAction,
}: ServiceParams<T>): void => {
  const headers = Cookies.get("token") ? { Authorization: `Bearer ${Cookies.get("token")}` } : {};
  const url = API_BASE_URL + uri;

  axios({
    url,
    method,
    headers,
    data,
  })
    .then((response) => {
      if (thenAction) {
        thenAction(response.data);
      }
    })
    .catch((error: AxiosError) => {
      if (catchAction) {
        catchAction(processApiErrors(error));
      }
    });
};

const processApiErrors = (error: AxiosError): string => {
    let status = "";
    let message = "";

    if(error.response) {
        status = error.response.status.toString();
        message = error.message;
    }

    if (status === "401" && message === "Invalid credentials") {
        return "Votre compte n'existe pas";
    }

    if (status === "409") {
        if (message === "This email is already taken") {
          return "Cette adresse mail est déjà utilisée.";
        }
        if (message === "This username is already taken") {
          return "Ce pseudo est déjà utilisé.";
        }
        return "Ce pseudo ou cette adresse mail est déjà utilisé.";
      }
      return `Une erreur ${status} s'est produite.`;
};
