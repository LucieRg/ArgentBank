import Axios from "axios";
import { createAction } from "@reduxjs/toolkit";

// Action types
export const loginUserSuccess = createAction("user/loginSuccess");
export const loginUserFailure = createAction("user/loginFailure");
export const logoutUser = createAction("user/logout");

// Variable pour stocker le jeton d'authentification
let authToken = null;

// Action asynchrone pour la connexion de l'utilisateur
export const loginUserAsync = (formData) => {
  return async (dispatch) => {
    try {
      const apiURL = "http://localhost:3001/api/v1/user/login";
      const response = await Axios.post(apiURL, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      // Stockez le jeton d'authentification dans la variable authToken
      const user = response.data;
      authToken = user.token;

      // Dispatch une action de réussite avec les données de l'utilisateur connecté
      dispatch(loginUserSuccess(user));


      // Traitez la réponse de la ressource protégée, si nécessaire

    } catch (error) {
      // En cas d'erreur, dispatch une action d'échec avec le message d'erreur
      const errorMessage = error.response.data.message || "An error occurred";
      dispatch(loginUserFailure(errorMessage));
      console.log(errorMessage);
    }
  };
};

// Action asynchrone pour la déconnexion de l'utilisateur
export const logoutUserAsync = () => {
  return async (dispatch) => {
    // Supprimez le jeton d'authentification de la variable authToken lors de la déconnexion
    authToken = null;

    dispatch(logoutUser());
  };
};
